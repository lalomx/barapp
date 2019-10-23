import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetadataTableService {

  private metadata: { [key: string]: any } = {};

  constructor() {
    this.metadata.InventarioTable = {
      name: 'InventarioTable',
      columns: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          type: 'text'
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          type: 'number'
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
  }
  getMetadata(key: string) {
    return Object.assign({}, this.metadata[key]);
  }

  setMetadata(key: string, metadata: any) {
    this.metadata[key] = metadata;
  }
}