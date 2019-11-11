import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MetadataTableService } from '../../core/services/metadata-table.service';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import { ModalComponent } from '../pages/modal/modal.component';
import { ModifyInputEventArgs } from '../interfaces/form/modifyInputEventArgs';
import { PropertyChangedEventArgs } from '../interfaces/form/propertyChangedEventArgs';
import { DataService } from '../../core/services/data.service';
import { ConfirmDialogComponent } from '../pages/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit, OnChanges {

  @ViewChild(ModalComponent, {static: true}) modal: ModalComponent;
  @ViewChild(ConfirmDialogComponent, { static: true}) confirm: ConfirmDialogComponent;

  constructor(private readonly metadataTableService: MetadataTableService) { }

  @Input() source: any[];
  @Input() metadataTableName: string;
  @Input() metadataFormName: string;
  @Input() title: string;
  @Input() dataService: DataService;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() newEvent = new EventEmitter();
  @Output() propertyChanged = new EventEmitter<PropertyChangedEventArgs>();
  @Output() saved = new EventEmitter<any>();

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
      if (args.rowIndex === 0) {
        this.tableDataSource.splice(args.rowIndex);
      } else {
        this.tableDataSource.splice(args.rowIndex);
      }
    } catch (e) {
      this.errors = e;
    }
  }

  onSaved() {
    this.loading = true;
    this.saved.emit();
  }

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }

  onPropertyChanged(args: PropertyChangedEventArgs) {
    this.propertyChanged.emit(args);
  }

}
