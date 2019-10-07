import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LineChartData } from '../../interfaces/LineChartData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnChanges {

  @Input() data: LineChartData[];
  @Input() labels: string[];

  lineChartOptions: any = {
    responsive: true
  };

  chartData: LineChartData[];

  ngOnChanges(changes: SimpleChanges): void {
    this.chartData = changes.data.currentValue;
  }

}
