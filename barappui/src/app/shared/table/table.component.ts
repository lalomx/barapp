import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() source: any[];
  @Input() metadata: any;

  @Output() editEntity = new EventEmitter<any>();
  @Output() deleteEntity = new EventEmitter<any>();

  constructor() { }

  columns: any[];
  hasData = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metadata && changes.metadata.currentValue) {
      this.columns = this.metadata.columns;
    }

    if (changes.source && changes.source.currentValue) {
      this.hasData = true;
    } else {
      this.hasData = false;
    }
  }

  onEdit(rowData: any, rowIndex: number) {
    this.editEntity.emit({rowData, rowIndex});
  }

  onDelete(rowData: any, rowIndex: number) {
    this.deleteEntity.emit({rowData, rowIndex});
  }
}
