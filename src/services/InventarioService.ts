import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import Sequelize from 'sequelize'
import { BaseService } from "./BaseService";
import uuid from "uuid";
import { Validators } from "../interfaces/Validators";
import { Op } from 'sequelize';

export class InventarioService extends BaseService {
  private db: BarServicesDB;
  private validations = [{
    propertyName: 'name',
    caption: 'Nombre',
    validation: Validators.NotNull
  }, {
    propertyName: 'tipoId',
    caption: 'Tipo',
    validation: Validators.NotNull
  }, {
    propertyName: 'quantity',
    caption: 'Cantidad',
    validation: Validators.MoreThanZero
  }, {
    propertyName: 'granularity',
    caption: 'Granularidad',
    validation: Validators.NotNull
  }, {
    propertyName: 'unitPrice',
    caption: 'Precio Unitario',
    validation: Validators.MoreThanZero
  }, {
    propertyName: 'unitLimit',
    caption: 'Límite de unidades',
    validation: Validators.MoreThanZero
  }, ];

  private transaccionValidation = [{
    propertyName: 'tipo',
    caption: 'Tipo',
    validation: Validators.NotNull
  }, {
    propertyName: 'quantity',
    caption: 'Cantidad',
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
    router['get'](`${this.API_BASE}inventario/granularidad`, this.getGranularidad.bind(this));
    router['post'](`${this.API_BASE}inventario/transaccion`, this.createInventarioTransaccion.bind(this));
  }

  private async getInventario(req: Request, res: Response) {
    const inventarios = await this.db.Inventario.findAll({
      include: [
      {
        association: 'transacciones',
        attributes: []
      }],
      attributes: ['id', 'name', 'unitLimit', 'unitPrice', 'tipoId', 'granularity', [Sequelize.fn('sum', Sequelize.col('transacciones.quantity')), 'quantity'], 'updatedAt', 'createdAt'],
      raw: true,
      order: ['name'],
      group: ['Inventarios.id'],
    });
    
    res.send(inventarios);
  }

  private async getInventarioTipos(req: Request, res: Response) {
    const tipoInventarios = await this.db.TipoInventario.findAll({ attributes: ['id', 'name']});
    res.send(tipoInventarios);
  }

  private async getGranularidad(req: Request, res: Response) {
    const granularidad = await this.db.Granularidad.findAll({ attributes: ['id', 'name']});
    res.send(granularidad);
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
    } else if(inventario.unitLimit > inventario.quantity){
      res.status(400).send({
        errors: [{ msg: 'El límite de unidades debe ser menor o igual a la cantidad' }]
      })
    } else {
      inventario.createdAt = new Date();
      inventario.updatedAt = new Date();
      inventario.tipoId = inventario.tipoId;
      await this.db.Inventario.create(inventario);
      res.status(201).send(inventario);
    }
  }

  private async createInventarioTransaccion(req: Request, res: Response) {
    const transaccion = req.body;
    const errors = this.validateEntity(transaccion, this.transaccionValidation);
    transaccion.id = uuid();
    if (!transaccion.inventarioId) {
      res.status(400).send({
        errors: [{ msg: 'La transacción debe estar asociada a un item de inventario' }]
      });
      return;
    }
    await this.db.Transaccion.create(transaccion);
    res.status(201).send(transaccion);
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
    if(inventario.unitLimit > inventario.quantity){
      res.status(400).send({
        errors: [{ msg: 'El límite de unidades debe ser menor o igual a la cantidad' }]
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

    inventarioRecord.granularity = inventario.granularity;
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