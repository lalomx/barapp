import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import Sequelize from 'sequelize';
import moment from 'moment';

export class SettingsService extends BaseService {
  private db: BarServicesDB;
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new SettingsService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}settings`, (req: Request, res: Response) => res.send([]));
  }
}