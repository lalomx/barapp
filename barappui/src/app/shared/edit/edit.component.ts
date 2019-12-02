import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MetadataTableService } from '../../core/services/metadata-table.service';
import { ModalComponent } from '../pages/modal/modal.component';
import { ModifyInputEventArgs } from '../interfaces/form/modifyInputEventArgs';
import { PropertyChangedEventArgs } from '../interfaces/form/propertyChangedEventArgs';
import { DataService } from '../../core/services/data.service';
import { ConfirmDialogComponent } from '../pages/confirm-dialog/confirm-dialog.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit, OnChanges {

  @ViewChild(ModalComponent, { static: true }) modal: ModalComponent;
  @ViewChild(TableComponent, { static: false }) table: TableComponent;
  @ViewChild(ConfirmDialogComponent, { static: true }) confirm: ConfirmDialogComponent;

  private editIndex: number;

  constructor(private readonly metadataTableService: MetadataTableService) { }

  @Input() source: any[];
  @Input() metadataTableName: string;
  @Input() metadataFormName: string;
  @Input() title: string;
  @Input() dataService: DataService;
  @Input() allowEdit = true;
  @Input() allowDelete = true;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() newEvent = new EventEmitter();
  @Output() propertyChanged = new EventEmitter<PropertyChangedEventArgs>();
  @Output() saved = new EventEmitter<any>();
  @Output() formInitializing = new EventEmitter<any>();
  @Output() actionMetadata = new EventEmitter<any>();

  tableMetadata: any;
  tableDataSource: any[];
  loading = true;
  entity: any;
  mode: 'add' | 'edit' = 'add';
  errors: any;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metadataTableName && changes.metadataTableName.currentValue) {
      this.tableMetadata = this.metadataTableService.getMetadata(this.metadataTableName);
    }

    if (changes.source && changes.source.currentValue) {
      this.tableDataSource = this.source;
      setTimeout(() => this.loading = false, 3000);
    }
  }

  onAdd() {
    this.mode = 'add';
    this.entity = {};
    this.modal.show();
  }

  onEditEntity(args) {
    this.mode = 'edit';
    this.entity = Object.assign({}, args.rowData);
    this.editIndex = args.rowIndex;
    this.modal.show();
  }

  async onDeleteEntity(args) {
    const confirm = await this.confirm.confirm();
    if (!confirm) {
      return;
    }
    this.errors = null;
    try {
      await this.dataService.delete(args.rowData.id).toPromise();
      this.tableDataSource.splice(args.rowIndex, 1);
    } catch (e) {
      this.errors = e;
    }
  }

  onSaved(entity: any) {
    if (this.mode === 'add') {
      this.tableDataSource.push(entity);
    } else {
      if (this.editIndex === null || this.editIndex === undefined) {
        return;
      }
      this.tableDataSource.splice(this.editIndex, 1, entity);
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }

  onPropertyChanged(args: PropertyChangedEventArgs) {
    this.propertyChanged.emit(args);
  }

  onFormInitializing(args: any) {
    this.formInitializing.emit(args);
  }

  onActionMetadata(args: any) {
    this.actionMetadata.emit(args);
  }
}
