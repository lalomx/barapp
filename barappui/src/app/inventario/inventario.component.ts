import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { ModifyInputEventArgs } from '../shared/interfaces/form/modifyInputEventArgs';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less'],
})
export class InventarioComponent implements OnInit {

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.inventarioService = this.dataServiceFactory.create('inventario');
  }

  inventario: any[];
  inventarioService: DataService;

  ngOnInit() {
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i;
    });
  }

  onFormInitializing(args: any) {
    const dropdownOptionsTipo = {
      multiselect: false,
      deselect: false,
      dataSource: 'TI',
      dataSourceOptions: { text: 'name', propertyName: 'id' }
    };

    const dropdownOptionsGran = {
      multiselect: false,
      deselect: false,
      dataSource: 'G',
      dataSourceOptions: { text: 'name', propertyName: 'id' }
    };
    args.modifyInput('tipoId', { dropdownOptions: dropdownOptionsTipo });
    args.modifyInput('granularity', { dropdownOptions: dropdownOptionsGran });
  }
}
