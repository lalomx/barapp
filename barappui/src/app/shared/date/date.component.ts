import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import { FlatpickrOptions, Ng2FlatpickrComponent } from '../../../../node_modules/ng2-flatpickr';
import { FlatpickrInstance } from '../../../../node_modules/ng2-flatpickr/src/flatpickr-instance';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit, AfterViewInit {


  @ViewChild(Ng2FlatpickrComponent, {static: false}) picker: Ng2FlatpickrComponent;
  @ViewChild('dateComponentUikit', {static: true}) dateP: ElementRef;

  datePickerConfig: FlatpickrOptions;
  show = false;
  dated = moment().format('YYYY-MM-DD');

  private instance: FlatpickrInstance;

  ngOnInit() {
    this.datePickerConfig = {
      onChange: this.onChange.bind(this),
      appendTo: this.dateP.nativeElement,
      maxDate: moment().toDate(),
      defaultDate: this.dated
    };
    this.show = true;
  }

  ngAfterViewInit(): void {
    this.instance = this.picker.flatpickr as FlatpickrInstance;
  }

  onChange(selectedDates: any, dateStr: any, instance: any) {
    this.dated = dateStr;
  }

  toggle() {
    this.instance.toggle();
  }

  onKeypress(event: any) {
    event.preventDefault();
  }
}
