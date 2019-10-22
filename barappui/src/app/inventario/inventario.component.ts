import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less']
})
export class InventarioComponent implements OnInit {

  private inventarioService: DataService;

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.inventarioService = dataServiceFactory.create('inventario');
  }

  inventario: any[];

  ngOnInit() {
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i;
    });
  }
}
