import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages/page/page.component';
import { ChartComponent } from './chart/chart/chart.component';

import { NgChartjsModule } from 'ng-chartjs';
import { LineChartComponent } from './chart/line-chart/line-chart.component';


@NgModule({
  declarations: [PageComponent, ChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    NgChartjsModule,
    NgChartjsModule.registerPlugin()
  ],
  exports: [PageComponent, ChartComponent, LineChartComponent]
})
export class SharedModule { }
