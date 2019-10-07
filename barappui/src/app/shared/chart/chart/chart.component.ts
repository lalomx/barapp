import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { getColors, Color } from 'ng-chartjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() data: number[];
  @Input() labels: string[];
  @Input() chartType: string;

  chartData: number[];
  chartLabels: string[];
  // colors: any[];
  // legends: any[];
  // show = false;
  // plugins: any[];
  // loading = true;
  showNoRecordsMessage = false;
  noRecordsMsg: string;

  show = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.data && changes.data.currentValue && changes.data.currentValue.length > 0) {
      this.chartData = null;
      // this.loading = true;
    }
    this.initChart();
  }


  private initChart() {
    console.log('init chart');
    this.showNoRecordsMessage = false;
    setTimeout(() => {
      console.log(this.data);
      if (!this.data || !this.data.length) {
        this.showNoRecordsMessage = true;
        this.noRecordsMsg = 'No Data';
        // this.loading = false;
        return;
      }
      this.chartData = this.data;
      this.chartLabels = this.labels;
      console.log(this.chartData);
      console.log(this.chartLabels);
      // this.colors = [{ backgroundColor: this.colorPalette.slice(0, this.labels.length) }];
      // this.plugins = [this.labels];
      this.show = true;
      // this.loading = false;
    });
  }

  ngOnInit() {
    // this.lineChartData.forEach((d, i) => {
    //   const colors = getColors('line', 2, 2) as Color;
    //   console.log(colors);
    //   d = Object.assign(d, colors);
    // });
  }
}
