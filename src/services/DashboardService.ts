import passport from 'passport';
import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import { Sequelize } from 'sequelize';

export class DashboardService extends BaseService {
  private db: BarServicesDB;
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new DashboardService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}dashboard`, this.getDashboard.bind(this));
  }

  private async getDashboard(req: Request, res: Response) {
    const personas = await this.db.sequelize.query(
      `SELECT 
        date_trunc('day', "pp"."createdAt") as date,
        "p"."name" as product,
        "i"."quantity" as stock,
        COUNT("pp"."productoId") as sold
      FROM "PersonaProductos" as "pp"
      LEFT OUTER JOIN "Productos" AS "p" ON "pp"."productoId" = "p"."id"
      LEFT OUTER JOIN "InventarioProductos" AS "ip" ON "pp"."productoId" = "ip"."productoId"
      LEFT OUTER JOIN "Inventarios" AS "i" ON "ip"."inventarioId" = "i"."id"
      LEFT OUTER JOIN "Personas" AS "pe" ON "pp"."personaId" = "pe"."id"
      LEFT OUTER JOIN "Comandas" AS "c" ON "pe"."comandaId" = "c"."id"
      WHERE "c"."status" = 0 OR "c"."status" = 1
      GROUP BY date, product, stock;`)
    console.log(personas[0][0]);
    res.send(personas[0]);
  }
}
