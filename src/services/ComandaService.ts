import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import Sequelize from 'sequelize';
import moment from 'moment';
import v4 from 'uuid';

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
    router['post'](`${this.API_BASE}comandas`, this.createComanda.bind(this));
    router['put'](`${this.API_BASE}comandas`, this.getComandas.bind(this));
    router['delete'](`${this.API_BASE}comandas`, this.getComandas.bind(this));
  }

  private async getComandas(req: Request, res: Response) {
    const today = moment().format('YYYY-MM-DD');
    const where = {
      createdAt: req.query.date || today
    }
    const comandas = await this.db.Comanda.findAll({
      where,
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
        personas: c.personas
      }
    }));
  }

  private async createComanda(req: Request, res: Response) {
    const comanda = await this.db.Comanda.create({
      id: v4(),
      table: req.body.table,
      total: req.body.total,
      status: req.body.status
    })

    res.status(201).send(comanda);
  }
}