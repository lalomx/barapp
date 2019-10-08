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
    console.log('childs method');
    this.options = this.lineChartOptions;
  }
}
