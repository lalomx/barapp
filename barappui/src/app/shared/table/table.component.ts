import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { EventEmitter } from '../../../../node_modules/@types/events';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() source: any[];
  @Input() metadata: any;

  constructor() { }

  loading = true;
  columns: any[];
  hasData = false;

  ngOnInit() {
    setTimeout(() => this.loading = false, 5000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metadata && changes.metadata.currentValue) {
      this.columns = this.metadata.columns;
    }

    if (changes.source && changes.source.currentValue) {
      console.log(this.source);
      console.log('source');
      this.hasData = true;
    } else {
      this.hasData = false;
    }
  }
}
