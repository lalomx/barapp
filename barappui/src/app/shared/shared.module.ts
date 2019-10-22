import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages/page/page.component';
import { ChartComponent } from './chart/chart/chart.component';

import { NgChartjsModule } from 'ng-chartjs';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';
import { LoadingComponent } from './loading/loading.component';
import { DateComponent } from './date/date.component';


import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';


@NgModule({
  declarations: [
    PageComponent,
    ChartComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    LoadingComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartjsModule,
    NgChartjsModule.registerPlugin(),
    Ng2FlatpickrModule,
  ],
  exports: [
    PageComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    DateComponent
  ]
})
export class SharedModule { }
