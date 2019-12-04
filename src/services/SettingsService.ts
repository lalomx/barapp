import { BarServicesDB } from "../interfaces/BarServicesDB";
import { Router, Request, Response } from "express";
import { BaseService } from "./BaseService";

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
    router['get'](`${this.API_BASE}settings/dropdowns`, this.getDropdownValues.bind(this));
  }

  private getDropdownValues(req: Request, res: Response) {
    Promise.all([
      this.getTipoInventarios(),
      this.getGranularidad(),
      this.getComandaStatus(),
      this.getMesa(),
      this.getTransaccionTipo()]).then((data: any) => {
        const dropdowns = [].concat.apply([], data);
        res.send(dropdowns);
      })
  }

  private getTipoInventarios() {
    return this.db.TipoInventario.findAll({ attributes: ['id', 'name'] })
      .then(ti => Promise.resolve(ti.map(t => ({ id: t.id, name: t.name, group: 'TI' }))));
  }

  private getGranularidad() {
    return this.db.Granularidad.findAll({ attributes: ['id', 'name'] })
      .then(ti => Promise.resolve(ti.map(t => ({ id: t.id, name: t.name, group: 'G' }))));
  }

  private getTransaccionTipo() {
    return Promise.resolve([
      { id: 'Ingreso', name: 'Ingreso', group: 'TT' },
      { id: 'Egreso', name: 'Egreso', group: 'TT' }
    ])
  }

  private getComandaStatus() {
    return Promise.resolve([
      { id: '0', name: 'Abierta', group: 'CE' },
      { id: '1', name: 'Cerrada', group: 'CE' }
    ])
  }

  private getMesa() {
    return Promise.resolve([
      { id: 'Barra', name: 'Barra', group: 'CM' },
      { id: '1', name: 'Mesa 1', group: 'CM' },
      { id: '2', name: 'Mesa 2', group: 'CM' },
      { id: '3', name: 'Mesa 3', group: 'CM' },
      { id: '4', name: 'Mesa 4', group: 'CM' },
      { id: '5', name: 'Mesa 5', group: 'CM' }
    ])
  }
}