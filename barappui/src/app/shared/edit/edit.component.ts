import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MetadataTableService } from '../../core/services/metadata-table.service';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import { ModalComponent } from '../pages/modal/modal.component';
import { ModifyInputEventArgs } from '../interfaces/form/modifyInputEventArgs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit, OnChanges {

  @ViewChild(ModalComponent, {static: true}) modal: ModalComponent;

  constructor(private readonly metadataTableService: MetadataTableService) { }

  @Input() source: any[];
  @Input() metadataTableName: string;
  @Input() metadataFormName: string;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() newEvent = new EventEmitter();


  tableMetadata: any;
  formMetadata: any;
  tableDataSource: any[];
  loading = true;

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
    this.newEvent.emit();
    this.modal.show();
  }

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }

}
