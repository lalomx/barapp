import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { getColors, Color } from 'ng-chartjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  @Input() data: number[];
  @Input() labels: string[];
  @Input() chartType: string;

  // options = {
  //   responsive: true,
  //   legend: {
  //     position: 'top',
  //   },
  //   plugins: {
  //     datalabels: {
  //       formatter: (value, ctx) => {
  //         const label = ctx.chart.data.labels[ctx.dataIndex];
  //         return label;
  //       },
  //     },
  //   }
  // };
  // chartData: number[];
  // chartLabels: string[];
  // colors: any[];
  // legends: any[];
  // show = false;
  // plugins: any[];
  // loading = true;
  // showNoRecordsMessage = false;
  // noRecordsMsg: string;

  show = true;
  colors = [
    // '#F66D44',
    // '#378AFF',
    // '#FFA32F',
    // '#FFEC21',
    // '#F54F52',
    // '#93F03B',
    // '#9552EA',
  ];

  lineChartData: Array<any> = [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My First dataset 2',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'red',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'red',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'red',
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 2, 3, 4, 12, 32, 434],
    },

  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType = 'line';

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.data && changes.data.currentValue.length > 0) {
  //     this.chartData = null;
  //     this.loading = true;
  //   }
  //   this.initChart();
  // }


  // private initChart() {
  //   setTimeout(() => {
  //     if (!this.data || !this.data.length) {
  //       this.showNoRecordsMessage = true;
  //       this.noRecordsMsg = 'No Data';
  //       this.loading = false;
  //       return;
  //     }
  //     this.chartData = this.data;
  //     this.chartLabels = this.labels;
  //     this.colors = [{ backgroundColor: this.colorPalette.slice(0, this.labels.length) }];
  //     this.plugins = [this.labels];
  //     this.show = true;
  //     this.loading = false;
  //   });
  // }

  ngOnInit() {
    // this.lineChartData.forEach((d, i) => {
    //   const colors = getColors('line', 2, 2) as Color;
    //   console.log(colors);
    //   d = Object.assign(d, colors);
    // });
  }
}
