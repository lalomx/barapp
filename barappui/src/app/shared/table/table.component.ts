import {
  Component, Input, OnChanges,
  SimpleChanges, Output, EventEmitter,
  ViewChild, ElementRef, AfterViewInit
} from '@angular/core';
import { DropdownService } from '../../core/services/dropdown.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements AfterViewInit, OnChanges {

  @ViewChild('table', { static: true }) private table: ElementRef;
  @Input() source: any[];
  @Input() metadata: any;
  @Input() allowEdit = true;
  @Input() allowDelete = true;
  @Input() checkeable = false;

  @Output() editEntity = new EventEmitter<any>();
  @Output() deleteEntity = new EventEmitter<any>();
  @Output() actionMetadata = new EventEmitter<any>();

  constructor(private dropdownService: DropdownService) { }

  columns: any[];
  hasData = false;
  tableSource: any[];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metadata && changes.metadata.currentValue) {
      this.columns = this.metadata.columns;
    }

    if (changes.source && changes.source.currentValue) {
      this.order();
      this.hasData = true;
    } else {
      this.hasData = false;
    }
  }

  ngAfterViewInit() {
    this.updateRows();
  }

  onEdit(rowData: any, rowIndex: number) {
    this.editEntity.emit({ rowData, rowIndex });
  }

  onDelete(rowData: any, rowIndex: number) {
    this.deleteEntity.emit({ rowData, rowIndex });
  }

  private updateRows() {
    Array.from(this.table.nativeElement.querySelectorAll('.row'))
      .forEach((r: any) => {
        Array.from(r.cells)
          .filter((c: any) => c.className.includes('row-cell'))
          .forEach((c: HTMLElement) => this.queryCellInfo(c));
      });
  }

  private queryCellInfo(cell: HTMLElement) {
    const propertyName = cell.id.replace(`${this.metadata.name}-`, '');
    const metadata = this.metadata.columns.find(c => c.propertyName === propertyName);
    switch (metadata.type) {
      case 'enum':
        cell.innerText = this.dropdownService.dropdowns.find(d => d.id === cell.innerText).name;
        break;
      default:
        break;
    }
  }

  private order() {
    const ordered  = _.orderBy(this.source.map((r) => {
      const obj = Object.assign({}, r);
      if (typeof r[this.metadata.sortOptions.property] === 'string') {
        obj[this.metadata.sortOptions.property] = obj[this.metadata.sortOptions.property].toLowerCase();
      }
      return obj;
    }), [this.metadata.sortOptions.property], [this.metadata.sortOptions.sort]);

    this.tableSource = ordered.map((el) => {
      return this.source.find(s => s.id === el.id);
    });
  }

  private onActionClick(actionName: string, row: any) {
    this.actionMetadata.emit({ actionName, rowData: row });
  }
}
