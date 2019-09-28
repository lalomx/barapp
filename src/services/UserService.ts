import passport from 'passport';
import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";

export class UserService extends BaseService {
  private db: BarServicesDB;
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new UserService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}users`, passport.authenticate('jwt', { session: false }), this.getAllUsers.bind(this));
    router['post'](`${this.API_BASE}user`, this.addUser.bind(this));
  }
  private async getAllUsers(req: Request, res: Response) {
    this.db.User.findAll()
      .then(r => res.send(r))
      .catch(err => console.log(err));
  }

  private async addUser(req: Request, res: Response) {
    console.log(req.body);
    res.status(201).send({});
  }
}