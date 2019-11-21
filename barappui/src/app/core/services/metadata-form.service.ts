import { Injectable } from '@angular/core';
import { FormEditor } from '../interfaces/FormEditor';
import { FormMetadata } from '../interfaces/formMetadata';

@Injectable({
  providedIn: 'root'
})
export class MetadataFormService {

  private metadata: { [key: string]: FormMetadata } = {};

  constructor() {
    this.metadata.InventarioForm = {
      name: 'InventarioForm',
      entityName: 'Inventario Item',
      inputs: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          visible: true,
          readonly: true,
          placeholder: '',
          required: true,
          editor: FormEditor.Text,
        },
        {
          caption: 'Tipo',
          propertyName: 'tipoId',
          visible: true,
          readonly: true,
          required: true,
          editor: FormEditor.Select,
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          visible: true,
          readonly: true,
          required: true,
          editor: FormEditor.Number
        },
        {
          caption: 'Granularidad',
          propertyName: 'granularity',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Select
        },
        {
          caption: 'Precio Unitario',
          propertyName: 'unitPrice',
          visible: true,
          readonly: true,
          required: true,
          editor: FormEditor.Number
        },
        {
          caption: 'Limite de unidades',
          propertyName: 'unitLimit',
          visible: true,
          readonly: true,
          required: true,
          editor: FormEditor.Number
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
