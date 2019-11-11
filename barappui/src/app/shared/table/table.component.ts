import {
  Component, Input, OnChanges,
  SimpleChanges, Output, EventEmitter,
  ViewChild, ElementRef, AfterViewInit
} from '@angular/core';
import { DropdownService } from '../../core/services/dropdown.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements AfterViewInit, OnChanges {

  @ViewChild('table', { static: true }) private table: ElementRef;
  @Input() source: any[];
  @Input() metadata: any;

  @Output() editEntity = new EventEmitter<any>();
  @Output() deleteEntity = new EventEmitter<any>();

  constructor(private dropdownService: DropdownService) { }

  columns: any[];
  hasData = false;

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

  ngAfterViewInit(): void {
    Array.from(this.table.nativeElement.querySelectorAll('.row'))
      .forEach((r: any) => {
        Array.from(r.cells)
          .filter((c: any) => c.id !== `${this.metadata.name}-actions`)
          .forEach((c: HTMLElement) => this.queryCellInfo(c));
      });
  }

  onEdit(rowData: any, rowIndex: number) {
    this.editEntity.emit({ rowData, rowIndex });
  }

  onDelete(rowData: any, rowIndex: number) {
    this.deleteEntity.emit({ rowData, rowIndex });
  }

  private queryCellInfo(cell: HTMLElement) {
    console.log(cell);
    const propertyName = cell.id.replace(`${this.metadata.name}-`, '');
    const metadata = this.metadata.columns.find(c => c.propertyName === propertyName);
    switch (metadata.type) {
      case 'enum':
        console.log(this.dropdownService.dropdowns);
        cell.innerText = this.dropdownService.dropdowns.find(d => d.id === cell.innerText).name;
        break;
      default:
        break;
    }
  }
}
