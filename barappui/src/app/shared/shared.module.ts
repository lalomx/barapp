import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages/page/page.component';
import { ChartComponent } from './chart/chart/chart.component';

import { NgChartjsModule } from 'ng-chartjs';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';


@NgModule({
  declarations: [PageComponent, ChartComponent, LineChartComponent, BarChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    NgChartjsModule,
    NgChartjsModule.registerPlugin()
  ],
  exports: [PageComponent, LineChartComponent, BarChartComponent, PieChartComponent]
})
export class SharedModule { }
