import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";
import uuid from "uuid";
import { Validators } from "../interfaces/Validators";
import { Op } from 'sequelize';

export class InventarioService extends BaseService {
  private db: BarServicesDB;
  private validations = [{
    propertyName: 'name',
    validation: Validators.NotNull
  }, {
    propertyName: 'tipoId',
    validation: Validators.NotNull
  }, {
    propertyName: 'quantity',
    validation: Validators.MoreThanZero
  }, {
    propertyName: 'unitPrice',
    validation: Validators.MoreThanZero
  }, {
    propertyName: 'unitLimit',
    validation: Validators.MoreThanZero
  }];
  private constructor(db: BarServicesDB) {
    super();
    this.db = db;
  }
  static instance(db: BarServicesDB) {
    return new InventarioService(db);
  }

  init(router: Router) {
    router['get'](`${this.API_BASE}inventario`, this.getInventario.bind(this));
    router['post'](`${this.API_BASE}inventario`, this.createInventario.bind(this));
    router['put'](`${this.API_BASE}inventario/:id`, this.updateInventario.bind(this));
    router['delete'](`${this.API_BASE}inventario/:id`, this.deleteInventario.bind(this));
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
        tipoId: c.tipoId,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
      }
    }));
  }

  private async getInventarioTipos(req: Request, res: Response) {
    const tipoInventarios = await this.db.TipoInventario.findAll({ attributes: ['id', 'name']});
    res.send(tipoInventarios);
  }

  private async createInventario(req: Request, res: Response){
    const inventario = req.body;
    const errors = this.validateEntity(inventario, this.validations);
    if(errors.length) {
      res.status(400).send({ errors });
      return;
    }
    inventario.id = uuid();
    const items = await this.db.Inventario.findAll({ 
      where: { name: inventario.name, tipoId: inventario.tipoId }
    });
    if (items.length > 0) {
      res.status(400).send({
        errors: [{ msg: 'Ya existe un registro de inventario con ese nombre y tipo' }]
      })
    } else {
      inventario.createdAt = new Date();
      inventario.updatedAt = new Date();
      inventario.tipoId = inventario.tipoId;
      await this.db.Inventario.create(inventario);
      res.status(201).send(inventario);
    }
  }

  private async updateInventario(req: Request, res: Response) {
    const inventario = req.body;
    const errors = this.validateEntity(inventario, this.validations);
    if(errors.length) {
      res.status(400).send({ errors });
      return;
    }
    const items = await this.db.Inventario.findAll({ 
      where: { name: inventario.name, tipoId: inventario.tipoId, id: { [Op.ne]: inventario.id } }
    });
    if (items.length > 0) {
      res.status(400).send({
        errors: [{ msg: 'Ya existe un registro de inventario con ese nombre y tipo' }]
      })
      return;
    }
    const inventarioRecord = await this.db.Inventario.findOne({ where: { id: inventario.id }});
    if (!inventarioRecord) {
      res.status(400).send({
        errors: [{ msg: 'No existe el inventario' }]
      });
      return;
    }

    inventarioRecord.quantity = inventario.quantity;
    inventarioRecord.name = inventario.name ;
    inventarioRecord.unitLimit = inventario.unitLimit;
    inventarioRecord.unitPrice = inventario.unitPrice;
    inventarioRecord.tipoId = inventario.tipoId;
    inventarioRecord.updatedAt = new Date();
    await inventarioRecord.save();

    res.status(200).send(inventario);
  }

  private async deleteInventario(req: Request, res: Response) {
    const inventarioRecord = await this.db.Inventario.findOne({ where: { id: req.params.id }});
    if (!inventarioRecord) {
      res.status(400).send({
        errors: [{ msg: 'No existe el inventario' }]
      });
      return;
    }
    await inventarioRecord.destroy();

    res.status(200).send({});
  }
}