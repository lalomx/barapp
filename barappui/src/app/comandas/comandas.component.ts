import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html'
})
export class ComandasComponent implements OnInit {

  constructor(private dataServiceFactory: DataServiceFactory) {
    this.comandasService = this.dataServiceFactory.create('comandas');
  }

  comandasService: DataService;
  comandas: any[];

  ngOnInit() {
    this.comandasService.getAll<any>().subscribe(c => this.comandas = c);
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
}
