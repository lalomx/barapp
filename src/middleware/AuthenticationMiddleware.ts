import { Router, Request, Response, NextFunction } from "express";
import passport from 'passport';
import jwt from 'jsonwebtoken';
import * as local from 'passport-local';
import * as jwtSstrategy from 'passport-jwt';
import { BarServicesDB } from "../interfaces/BarServicesDB";
import * as bcrypt from 'bcrypt';
import config from '../config';
import { HTTP401Error } from "../utils/httpErrors";

export class AuthenticationMiddleware {

  private readonly API_BASE = '/api/v1/';
  private db: BarServicesDB;

  private constructor(db: BarServicesDB) {
    this.db = db;
  }

  static instance(db: BarServicesDB) {
    return new AuthenticationMiddleware(db);
  }

  init(router: Router) {
    router.use(passport.initialize());
    passport.use('local', new local.Strategy({
      usernameField: 'username',
      passwordField: 'password'
    }, (username: string, password: string, done: any) => {
      console.log('local strategy handler');
      try {
        this.db.User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          if (!user) {
            return done(null, false, { message: 'usuario no existe' });
          }
          const found = bcrypt.compareSync(password, user.password);
          if (!found) {
            return done(null, false, { message: 'contraseña incorrecta' });
          }
          return done(null, user);
        })
      } catch (err) {
        done(err);
      }
    }));
    this.initializeRoutes(router);

    let opts: any = {}
    opts.jwtFromRequest = jwtSstrategy.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.passport.jwtSecret
    opts.algorithms = [process.env.JWT_ALGORITHM];

    passport.use('jwt', new jwtSstrategy.Strategy(opts, (jwt_payload, done) => {
      console.log("ejecutando *callback verify* de estategia jwt");
      const findOpts = { id: jwt_payload.sub, rejectOnEmpty: true };
      this.db.User.findOne(findOpts)
        .then(data => {
          if (data === null) {
            return done(null, false);
          } else {
            return done(null, data);
          }
        })
        .catch(err => done(err, null))
    }));
    router.use(this.ensureAuthenticate);
  }

  private initializeRoutes(router: Router) {
    router['post'](`${this.API_BASE}login`, this.login.bind(this));
    router['get'](`${this.API_BASE}logout`, this.logout.bind(this));
  }

  private login(req: Request, res: Response) {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        res.status(400);
      }
      if (info !== undefined) {
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          this.db.User.findOne({
            where: {
              username: user.username
            }
          }).then(user => {
            if (!user) {
              res.status(400).send('');
            } else {
              const token = jwt.sign({ id: user.username }, config.passport.jwtSecret);
              res.status(200)
                .send({
                  auth: true,
                  token: token,
                  message: 'logged in!'
                })
            }
          })
        })
      }
    })(req, res);
  }

  private logout(req: Request, res: Response) {
    req.logOut();
  }

  private ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      console.log("ejecutando *callback auth* de authenticate para estrategia jwt");
      if (info) { return next(new HTTP401Error(info.message)); }
      if (err) { return next(err); }
      if (!user) { return next(new HTTP401Error("You are not allowed to access.")); }
      req.user = user;
      next();
    })(req, res, next);
  }
}
