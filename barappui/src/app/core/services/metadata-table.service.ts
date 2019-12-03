import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetadataTableService {

  private metadata: { [key: string]: any } = {};

  constructor() {
    this.metadata.InventarioTable = {
      name: 'InventarioTable',
      showActions: true,
      sortOptions: { property: 'name', sort: 'asc' },
      customActions: [{
        name: 'transaccion',
        icon: 'arrow-right'
      }],
      columns: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          type: 'text'
        },
        {
          caption: 'Tipo',
          propertyName: 'tipoId',
          type: 'enum'
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          type: 'number'
        },
        {
          caption: 'Granularidad',
          propertyName: 'granularity',
          type: 'enum'
        },
        {
          caption: 'Precio Unitario',
          propertyName: 'unitPrice',
          type: 'number'
        },
        {
          caption: 'Limite de unidades',
          propertyName: 'unitLimit',
          type: 'number'
        }
      ]
    };

    this.metadata.ProductosTable = {
      name: 'ProductosTable',
      showActions: true,
      sortOptions: { property: 'name', sort: 'asc' },
      columns: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          type: 'text'
        },
        {
          caption: 'Tipo',
          propertyName: 'type',
          type: 'text'
        },
        {
          caption: 'Precio',
          propertyName: 'precio',
          type: 'number'
        }
      ]
    };

    this.metadata.inventarioProductosTable = {
      name: 'inventarioProductosTable',
      sortOptions: { property: 'name', sort: 'asc' },
      columns: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          type: 'text'
        },
        {
          caption: 'Granularidad',
          propertyName: 'granularityName',
          type: 'text'
        }
      ]
    };
  }
  getMetadata(key: string) {
    return Object.assign({}, this.metadata[key]);
  }

  setMetadata(key: string, metadata: any) {
    this.metadata[key] = metadata;
  }
}
