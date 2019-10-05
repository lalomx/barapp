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
    router['get'](`${this.API_BASE}users`, this.getAllUsers.bind(this));
    router['post'](`${this.API_BASE}users`, this.addUser.bind(this));
    router['get'](`${this.API_BASE}users/:user`, this.getUser.bind(this));
    router['put'](`${this.API_BASE}users/:user`, this.updateUser.bind(this));
  }
  private async getAllUsers(req: Request, res: Response) {
    this.db.User.findAll()
      .then(r => res.send(r))
      .catch(err => console.log(err));
  }

  private async addUser(req: Request, res: Response) {
    res.status(201).send({});
  }

  private async getUser(req: Request, res: Response) {
    const user = await this.db.User.getUserInfo(req.params.user);
    if (!user) {
      res.status(400).send({ message: 'User not found' })
    } else {
      res.send(user);
    }
  }

  private updateUser(req: Request, res: Response) {
    res.status(200);
  }
}