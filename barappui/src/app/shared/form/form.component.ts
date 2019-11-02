import {
  Component, Input, OnChanges,
  SimpleChanges, Output,
  EventEmitter, OnInit, ViewChild,
  AfterViewInit, KeyValueDiffers, KeyValueDiffer
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import { ModifyInputEventArgs } from '../interfaces/form/modifyInputEventArgs';
import { FormEditor } from '../../core/interfaces/FormEditor';
import { debounceTime } from 'rxjs/operators';
import { PropertyChangedEventArgs } from '../interfaces/form/propertyChangedEventArgs';
import { HasChangesService } from '../../core/services/has-changes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @Input() formMetadataKey: string;
  @Input() entity: any = {};

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() propertyChanged = new EventEmitter<PropertyChangedEventArgs>();
  @Output() saved = new EventEmitter<any>();

  private originalEntity: any;
  private entityDiffer: KeyValueDiffer<string, string>;

  constructor(private kvDiffers: KeyValueDiffers,
              private readonly metadataFormService: MetadataFormService,
              private hasChangesService: HasChangesService) { }

  hasMetadata = false;
  formMetadata: any;
  inputs = [];
  editor = FormEditor;

  ngOnInit() {
    this.originalEntity = Object.assign({}, this.entity);
    this.form.reset();
    this.entityDiffer = this.kvDiffers.find(this.originalEntity).create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formMetadataKey && changes.formMetadataKey.currentValue) {
      this.getMetadata();
    }
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(entity => {
      const changes = this.entityDiffer.diff(entity);
      if (!changes) {
        return;
      }
      changes.forEachChangedItem((record) => {
        if (record.currentValue === record.previousValue) {
          return;
        }
        if (!record.currentValue && !record.previousValue) {
          return;
        }
        this.propertyChanged.emit({
          propertyName: record.key,
          currentValue: record.currentValue,
          previousValue: record.previousValue,
          entity: this.entity
        });
        this.hasChangesService.hasChanges = true;
      });
    });
  }

  save() {
    console.log(this.entity);
  }

  cancel() {
    this.form.reset();
    this.entity = {};
    this.hasChangesService.hasChanges = false;
  }

  private getMetadata() {
    this.formMetadata = this.metadataFormService.getMetadata(this.formMetadataKey);
    this.formMetadata.inputs.forEach(i => {
      this.modifyInput.emit({
        input: i,
      });
    });

    this.inputs = this.formMetadata.inputs.map(i => i);
  }
}
