import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages/page/page.component';
import { ChartComponent } from './chart/chart/chart.component';

import { NgChartjsModule } from 'ng-chartjs';


@NgModule({
  declarations: [PageComponent, ChartComponent],
  imports: [
    CommonModule,
    NgChartjsModule,
    NgChartjsModule.registerPlugin()
  ],
  exports: [PageComponent, ChartComponent]
})
export class SharedModule { }
