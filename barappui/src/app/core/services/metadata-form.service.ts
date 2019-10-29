import { Injectable } from '@angular/core';
import { FormEditor } from '../interfaces/FormEditor';

@Injectable({
  providedIn: 'root'
})
export class MetadataFormService {

  private metadata: { [key: string]: any } = {};

  constructor() {
    this.metadata.InventarioForm = {
      name: 'InventarioForm',
      inputs: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          editor: FormEditor.Text
        },
        {
          caption: 'Tipo',
          propertyName: 'tipo',
          editor: FormEditor.Select,
          dropdownOptions: null,
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          editor: FormEditor.Number
        },
        {
          caption: 'Precio Unitario',
          propertyName: 'unitPrice',
          editor: FormEditor.Number
        },
        {
          caption: 'Limite de unidades',
          propertyName: 'unitLimit',
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
