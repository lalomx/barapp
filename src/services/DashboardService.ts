import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import moment from 'moment';
import Sequelize from 'sequelize';
import { Dashboard } from "../interfaces/dashboard/Dashboard";
import { StockChart } from "../interfaces/dashboard/StockChart";
const Op = Sequelize.Op;

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
    const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');
    const where = {
      createdAt: {
        [Op.gte]: lastWeek,
        [Op.lte]: today
      }
    }

    const stockQueryResult = await this.db.sequelize.query(
      `SELECT 
        date_trunc('day', "pp"."createdAt") as date,
        "p"."name" as product,
        SUM("it"."quantity") as stock,
        COUNT("pp"."productoId") as sold
      FROM "PersonaProductos" as "pp"
      LEFT OUTER JOIN "Productos" AS "p" ON "pp"."productoId" = "p"."id"
      LEFT OUTER JOIN "InventarioProductos" AS "ip" ON "pp"."productoId" = "ip"."productoId"
      LEFT OUTER JOIN "Inventarios" AS "i" ON "ip"."inventarioId" = "i"."id"
      LEFT OUTER JOIN "InventarioTransaccions" AS "it" ON "it"."inventarioId" = "i"."id"
      LEFT OUTER JOIN "Personas" AS "pe" ON "pp"."personaId" = "pe"."id"
      LEFT OUTER JOIN "Comandas" AS "c" ON "pe"."comandaId" = "c"."id"
      WHERE "c"."status" = 0 OR "c"."status" = 1 
        AND ("c"."createdAt" >= '${lastWeek}' AND "c"."createdAt" <= '${today}')
      GROUP BY date, product;`);
    const sales = await this.db.Comanda.findAll({
      where,
      group: ['date'],
      attributes: [
        [Sequelize.fn('date_trunc', 'day', Sequelize.col('createdAt')), 'date'],
        [Sequelize.fn('sum', Sequelize.col('total')), 'total']]
    });

    const tables = await this.db.Comanda.findAll({
      where,
      group: ['table'],
      attributes: [
        'table',
        [Sequelize.fn('sum', Sequelize.col('total')), 'total']
      ]
    });

    const productsResult = await this.db.PersonaProducto.findAll({
      include: [
        {
          association: 'producto',
          attributes: [
            'name',
            [Sequelize.fn('count', Sequelize.col('producto.name')), 'count']
          ]
        },
        {
          association: 'persona',
          attributes: [],
          include: [{
            association: 'comanda',
            where,
            attributes: []
          }]
        }
      ],
      attributes: [],
      raw: true,
      group: ['producto.name']
    });

    const products = productsResult.map((p: any) => {
      return {
        name: p['producto.name'],
        count: p['producto.count']
      }
    });
    const stock = stockQueryResult[0] as StockChart[];
    const dashboard = {
      stock,
      sales,
      tables,
      products
    } as Dashboard;
    res.send(dashboard);
  }
}
