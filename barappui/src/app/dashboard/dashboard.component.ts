import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { Dashboard } from '../shared/interfaces/dashboard/Dashboard';
import { LineChartData } from '../shared/interfaces/LineChartData';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private dashboardService: DataService;

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.dashboardService = dataServiceFactory.create('dashboard');
  }

  salesChart: LineChartData[];
  salesChartLabels: string[];
  stockChart: any;
  stockChartLabels: string[];
  tablesChart: any;
  tablesChartLabels: string[];
  productsMostSold: any[];

  ngOnInit() {
    this.dashboardService.getAll<any>().subscribe(p => {
      this.salesChart = [{
        label: 'Ventas por día',
        data: p.sales.map(s => s.total)
      }];
      this.salesChartLabels = p.sales.map(s => moment(s.date).format('dddd'));
      this.stockChart = [{
        label: 'Vendido',
        data: p.stock.map(s => s.sold)
      }, {
        label: 'Stock',
        data: p.stock.map(s => s.stock)
      }];
      this.stockChartLabels = p.stock.map(s => s.product);
      this.tablesChart = [{
        label: 'Consumo por mesa',
        data: p.tables.map(t => t.total)
      }];
      this.tablesChartLabels = p.tables.map(t => `Mesa: ${t.table}`);
      this.productsMostSold = p.products;
    });
  }
}
