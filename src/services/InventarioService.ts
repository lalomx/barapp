import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";

export class InventarioService extends BaseService {
  private db: BarServicesDB;
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new InventarioService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}inventario`, this.getInventario.bind(this));
    router['get'](`${this.API_BASE}inventario/tipos`, this.getInventarioTipos.bind(this));
  }

  private async getInventario(req: Request, res: Response) {
    const inventarios = await this.db.Inventario.findAll({include: [
      {
        association: 'tipo',
        attributes: [
          'name',
        ]
      }]
    });
    
    res.send(inventarios.map((c:any) => {
      return {
        id: c.id,
        quantity: c.quantity,
        name: c.name,
        unitLimit: c.unitLimit,
        unitPrice: c.unitPrice,
        tipo: c.tipo.name,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
      }
    }));
  }

  private async getInventarioTipos(req: Request, res: Response) {
    const tipoInventarios = await this.db.TipoInventario.findAll({ attributes: ['id', 'name']});
    res.send(tipoInventarios);
  }
}