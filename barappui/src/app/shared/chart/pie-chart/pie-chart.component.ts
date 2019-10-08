import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: '../chart/chart.component.html',
})
export class PieChartComponent extends ChartComponent {

  chartType = 'pie';
}
