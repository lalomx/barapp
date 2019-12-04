import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { DropdownService } from '../core/services/dropdown.service';
import { MetadataTableService } from '../core/services/metadata-table.service';
import { EditComponent } from '../shared/edit/edit.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  @ViewChild(EditComponent, { static: true }) private edit: EditComponent;

  constructor(private readonly dataServiceFactory: DataServiceFactory,
              private dropdownService: DropdownService,
              private tableMetadata: MetadataTableService) {
    this.productosService = this.dataServiceFactory.create('productos');
    this.inventarioService = this.dataServiceFactory.create('inventario');
  }

  productos: any[];
  productosService: DataService;
  inventarioService: DataService;
  granularities: any[];
  inventario = [];
  metadata: any;

  ngOnInit() {
    this.productosService.getAll<any[]>().subscribe(i => {
      this.productos = i;
    });
    this.granularities = this.dropdownService.dropdowns;
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i.map(stock => ({
        checked: false,
        name: stock.name,
        granularity: stock.granularity,
        granularityName: this.granularities.find(d => d.id === stock.granularity).name }));
    });
    this.metadata = this.tableMetadata.getMetadata('inventarioProductosTable');
  }

  onStockSelected(selected: any[]) {
    this.edit.entity.stock = selected;
  }
}
