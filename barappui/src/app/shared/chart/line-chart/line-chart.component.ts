import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: '../chart/chart.component.html'
})
export class LineChartComponent extends ChartComponent {
  lineChartOptions: any = {
    responsive: true
  };

  chartType = 'line';

  protected ngOnInitCore() {
    this.options = this.lineChartOptions;
  }
}
