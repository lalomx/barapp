import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() data: number[];
  @Input() labels: string[];

  chartData: number[];
  chartLabels: string[];
  chartType: string;
  showNoRecordsMessage = false;
  noRecordsMsg: string;
  options: any[];

  show = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.data && changes.data.currentValue && changes.data.currentValue.length > 0) {
      this.chartData = null;
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
        return;
      }
      this.chartData = this.data;
      this.chartLabels = this.labels;
      this.show = true;
    });
  }

  ngOnInit() {
    this.ngOnInitCore();
  }

  protected ngOnInitCore() {}
}
