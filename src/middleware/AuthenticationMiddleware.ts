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
  private allowedTokens: string[] = [];

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
    this.initRoutes(router);

    let opts: any = {}
    opts.jwtFromRequest = jwtSstrategy.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.passport.jwtSecret

    passport.use('jwt', new jwtSstrategy.Strategy(opts, (payload, done) => {
      const findOpts = {
        where: {
          username: payload.id
        }
      };
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
    router.use(this.ensureAuthenticate.bind(this));
    
  }

  private initRoutes(router: Router) {
    router['post'](`${this.API_BASE}token-verify`, this.tokenVerify.bind(this));
    router['post'](`${this.API_BASE}login`, this.login.bind(this));
    router['get'](`${this.API_BASE}logout`, this.logout.bind(this));
    
  }

  private login(req: Request, res: Response) {
    passport.authenticate('local', (err, user, info) => {
      console.log(err);
      console.log(info);
      if (err) {
        res.status(400);
      }
      if (info !== undefined) {
        res.status(400).send(info);
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
              const token = jwt.sign({ id: user.username }, config.passport.jwtSecret, { expiresIn: '1d' });
              this.allowedTokens.push(token);
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
    // let authToken = req.header('Authorization');
    // authToken = authToken ? authToken.replace('Bearer ', '') : undefined;
    // console.log(authToken);
    // TODO: agregar token black list
    req.logout();
    res.status(200).send('ok');
  }

  private tokenVerify(req: Request, res: Response) {
    const verified = jwt.verify(req.body.token, config.passport.jwtSecret);
    res.status(200).send(verified);
  }

  private ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      // let authToken = req.header('Authorization');
      // authToken = authToken ? authToken.replace('Bearer ', '') : undefined;
      // console.log(authToken);
      // if (!this.allowedTokens.some(t => t === authToken)) { return (next(new HTTP401Error('Session expired')))}
      if (info) { return next(new HTTP401Error(info.message)); }
      if (err) { return next(err); }
      if (!user) { return next(new HTTP401Error("You are not allowed to access.")); }
      req.user = user;
      next();
    })(req, res, next);
  }
}
