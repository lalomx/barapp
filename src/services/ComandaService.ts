import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import Sequelize from 'sequelize';
import moment from 'moment';

export class ComandaService extends BaseService {
  private db: BarServicesDB;
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new ComandaService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}comandas`, this.getComandas.bind(this));
  }

  private async getComandas(req: Request, res: Response) {
    const today = moment().format('YYYY-MM-DD');
    const where = {
      createdAt: today
    }
    const comandas = await this.db.Comanda.findAll({

      include: ['personas'],
    })
    
    res.send(comandas.map(c => {
      return {
        id: c.id,
        table: c.table,
        total: c.total,
        status: c.status,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
        personas: c.personas.length
      }
    }));
  }
}