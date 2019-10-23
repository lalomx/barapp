import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MetadataTableService } from '../../core/services/metadata-table.service';
import { MetadataFormService } from '../../core/services/metadata-form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit, OnChanges {

  constructor(private readonly metadataTableService: MetadataTableService,
              private readonly metadataFormService: MetadataFormService) { }

  @Input() source: any[];
  @Input() metadataTableName: string;
  @Input() metadataFormName: string;

  @Output() newEvent = new EventEmitter();


  tableMetadata: any;
  formMetadata: any;
  tableDataSource: any[];
  loading = true;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metadataFormName && changes.metadataFormName.currentValue) {
      this.tableMetadata = this.metadataTableService.getMetadata(this.metadataTableName);
    }
    if (changes.metadataFormService && changes.metadataFormService.currentValue) {
      this.formMetadata = this.metadataFormService.getMetadata(this.metadataFormName);
    }

    if (changes.source && changes.source.currentValue) {
      this.tableDataSource = this.source;
      setTimeout(() => this.loading = false, 3000);
    }
  }

  onAdd() {
    console.log('button add');
    this.newEvent.emit();
  }

}
