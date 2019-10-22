import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as moment from 'moment';
import { FlatpickrOptions, Ng2FlatpickrComponent } from '../../../../node_modules/ng2-flatpickr';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FlatpickrInstance } from '../../../../node_modules/ng2-flatpickr/src/flatpickr-instance';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit, AfterViewInit {


  @ViewChild(Ng2FlatpickrComponent, {static: false}) picker: Ng2FlatpickrComponent;
  @ViewChild('dateComponentUikit', {static: true}) dateP: ElementRef;

  constructor() { }

  selectedDate = moment().format('YYYY-MM-DD');
  datePickerConfig: FlatpickrOptions;
  show = false;
  dated = 'adsasd';

  private instance: FlatpickrInstance;

  ngOnInit() {
    this.datePickerConfig = {
      onChange: this.onChange.bind(this),
      appendTo: this.dateP.nativeElement
    };
    this.show = true;
  }

  ngAfterViewInit(): void {
    this.instance = this.picker.flatpickr as FlatpickrInstance;
  }

  onChange(selectedDates: any, dateStr: any, instance: any) {
    console.log(dateStr);
    this.dated = dateStr;
    // this.inputPPP.nativeElement.trigger('input');
  }

  toggle() {
    this.instance.toggle();
  }

}
