import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import Sequelize from 'sequelize'
import { BaseService } from "./BaseService";
import uuid from "uuid";
import { Validators } from "../interfaces/Validators";
import { Op } from 'sequelize';

export class ProductoService extends BaseService {
  private db: BarServicesDB;
  private validations = [{
    propertyName: 'name',
    caption: 'Nombre',
    validation: Validators.NotNull
  }, {
    propertyName: 'tipoId',
    caption: 'Tipo',
    validation: Validators.NotNull
  }];

  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new ProductoService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}productos`, this.getProductos.bind(this));
  }

  private async getProductos(req: Request, res: Response) {
    const productos = await this.db.Producto.findAll({
        order: ['name']
      });
      
      res.send(productos);
  }
}