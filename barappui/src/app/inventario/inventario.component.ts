import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { ModalComponent } from '../shared/pages/modal/modal.component';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less'],
})
export class InventarioComponent implements OnInit {

  @ViewChild(ModalComponent, { static: true }) modal: ModalComponent;

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.inventarioService = this.dataServiceFactory.create('inventario');
    this.inventarioTransaccion = this.dataServiceFactory.create('inventario/transaccion');
  }

  inventario: any[];
  inventarioService: DataService;
  transaccion: any = {};
  inventarioTransaccion: DataService;

  ngOnInit() {
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i;
    });
  }

  onFormInitializing(args: any) {
    console.log(args);
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

  onTransaccionFormInitializing(args: any) {
    console.log(args);
    args.modifyInput('tipo', { dropdownOptions: {
      multiselect: false,
      deselect: false,
      dataSource: 'TT',
      dataSourceOptions: { text: 'name', propertyName: 'id' }
    } });
  }

  onActionMetadata(args: any) {
    this.transaccion = Object.assign({}, { inventarioId: args.rowData.id });
    this.modal.show();
  }

  onTransaccionSaved() {
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i;
    });
  }
}
