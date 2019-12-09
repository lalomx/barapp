import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { EditComponent } from '../shared/edit/edit.component';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.less']
})
export class ComandasComponent implements OnInit {

  @ViewChild(EditComponent, { static: true }) edit: EditComponent;

  constructor(private dataServiceFactory: DataServiceFactory) {
    this.comandasService = this.dataServiceFactory.create('comandas');
    this.productosService = this.dataServiceFactory.create('productos');
  }

  productosService: DataService;
  comandasService: DataService;
  comandas: any[];
  productos: any[];
  selectedProductos: {};

  ngOnInit() {
    this.comandasService.getAll<any>().subscribe(c => this.comandas = c);
    this.productosService.getAll<any[]>().subscribe(i => {
      this.productos = i;
    });
  }

  onFormInitializing(args: any) {
    const dropdownOptionsStatus = {
      multiselect: false,
      deselect: false,
      dataSource: 'CE',
      dataSourceOptions: { text: 'name', propertyName: 'id' }
    };

    const dropdownOptionsMesa = {
      multiselect: false,
      deselect: false,
      dataSource: 'CM',
      dataSourceOptions: { text: 'name', propertyName: 'id' }
    };
    args.modifyInput('status', { dropdownOptions: dropdownOptionsStatus });
    args.modifyInput('mesa', { dropdownOptions: dropdownOptionsMesa });
  }

  onPlus(e, name) {
    e.preventDefault();
    const prop = this.pascalConverter(name);
    this.selectedProductos[prop] += 1;
  }

  onMinus(e, name) {
    e.preventDefault();
    const prop = this.pascalConverter(name);
    if (this.selectedProductos[prop] <= 0) {
      return;
    }
    this.selectedProductos[prop] -= 1;
  }

  beforeOpen(entity: any) {
    this.selectedProductos = {};
    this.productos.forEach(p => {
      const prop = this.pascalConverter(p.name);
      this.selectedProductos[prop] = 0;
    });
    entity.selectedProductos = this.selectedProductos;
  }

  pascalConverter(str: string) {
    return str.slice(0, 1).toLocaleLowerCase() + str.replace(' ', '').slice(1, str.length - 1);
  }
}
