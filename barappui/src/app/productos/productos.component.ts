import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.productosService = this.dataServiceFactory.create('productos');
  }

  productos: any[];
  productosService: DataService;

  ngOnInit() {
    this.productosService.getAll<any[]>().subscribe(i => {
      this.productos = i;
    });
  }
}
