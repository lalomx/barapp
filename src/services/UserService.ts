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
  }
  private async getAllUsers(req: Request, res: Response) {
    this.db.User.findAll()
      .then(r => res.send(r))
      .catch(err => console.log(err));
  }
}