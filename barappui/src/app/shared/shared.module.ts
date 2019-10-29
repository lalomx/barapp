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
import { EditComponent } from './edit/edit.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ModalComponent } from './pages/modal/modal.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    PageComponent,
    ChartComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    LoadingComponent,
    DateComponent,
    EditComponent,
    PageNavComponent,
    ModalComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartjsModule,
    NgChartjsModule.registerPlugin(),
    Ng2FlatpickrModule,
  ],
  exports: [
    PageComponent,
    PageNavComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    DateComponent,
    EditComponent,
    FormComponent
  ]
})
export class SharedModule { }
