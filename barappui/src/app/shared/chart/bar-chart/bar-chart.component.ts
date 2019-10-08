import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: '../chart/chart.component.html'
})
export class BarChartComponent extends ChartComponent {

  chartType = 'bar';
}

