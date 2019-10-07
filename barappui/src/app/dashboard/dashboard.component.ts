import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../core/services/data-service-factory.service';
import { DataService } from '../core/services/data.service';
import { Dashboard } from '../shared/interfaces/dashboard/Dashboard';
import { LineChartData } from '../shared/interfaces/LineChartData';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  private dashboardService: DataService;

  constructor(private readonly dataServiceFactory: DataServiceFactory) {
    this.dashboardService = dataServiceFactory.create('dashboard');
    this.dashboardService.getAll<any>().subscribe(p => {
      console.log(p);
      this.salesChart = [{
        label: 'Ventas por día',
        data: p.sales.map(s => s.total)
      }];
      this.salesChartLabels = p.sales.map(s => moment(s.date).format('dddd'));
      console.log(this.salesChartLabels);
    });
  }

  salesChart: LineChartData[];
  salesChartLabels: string[];

  ngOnInit() {
  }

}
