import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { DropdownService } from '../core/services/dropdown.service';
import { MetadataTableService } from '../core/services/metadata-table.service';

@Component({
  selector: 'app-inventario-productos-list',
  templateUrl: './inventario-productos-list.component.html'
})
export class InventarioProductosListComponent implements OnInit {

  constructor(private dataServiceFactory: DataServiceFactory,
              private dropdownService: DropdownService,
              private tableMetadata: MetadataTableService) {
    this.inventarioService = this.dataServiceFactory.create('inventario');
  }

  inventarioService: DataService;
  granularities: any[];
  inventario = [];
  metadata: any;

  ngOnInit() {
    this.granularities = this.dropdownService.dropdowns;
    this.inventarioService.getAll<any[]>().subscribe(i => {
      this.inventario = i.map(stock => ({
        name: stock.name,
        granularity: stock.granularity,
        granularityName: this.granularities.find(d => d.id === stock.granularity).name }));
      console.log(this.inventario);
      console.log(this.granularities);
    });
    this.metadata = this.tableMetadata.getMetadata('inventarioProductosTable');
  }
}
