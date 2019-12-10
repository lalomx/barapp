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
          readonly: false,
          placeholder: '',
          required: true,
          editor: FormEditor.Text,
        },
        {
          caption: 'Tipo',
          propertyName: 'tipoId',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Select,
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          visible: true,
          readonly: false,
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
          readonly: false,
          required: true,
          editor: FormEditor.Number
        },
        {
          caption: 'Límite de unidades',
          propertyName: 'unitLimit',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Number
        }
      ]
    };
    this.metadata.InventarioTransaccionForm = {
      name: 'InventarioTransaccionForm',
      entityName: 'Inventario Transaccion Item',
      inputs: [
        {
          caption: 'Tipo',
          propertyName: 'tipo',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Select,
        },
        {
          caption: 'Cantidad',
          propertyName: 'quantity',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Number
        }
      ]
    };
    this.metadata.ProductosForm = {
      name: 'ProductosForm',
      entityName: 'Producto',
      inputs: [
        {
          caption: 'Nombre',
          propertyName: 'name',
          placeholder: 'Nombre',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Text,
        },
        {
          caption: 'Tipo',
          propertyName: 'type',
          placeholder: 'Tipo',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Text
        },
        {
          caption: 'Precio',
          propertyName: 'precio',
          placeholder: 'Precio',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Text
        }
      ]
    };

    this.metadata.ComandasForm = {
      name: 'ComandasForm',
      entityName: 'Comanda',
      inputs: [
        {
          caption: 'Mesa',
          propertyName: 'table',
          placeholder: '',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Select,
        },
        {
          caption: 'Total',
          propertyName: 'total',
          placeholder: 'Tipo',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Number
        },
        {
          caption: 'Status',
          propertyName: 'status',
          placeholder: '',
          visible: true,
          readonly: false,
          required: true,
          editor: FormEditor.Select
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
