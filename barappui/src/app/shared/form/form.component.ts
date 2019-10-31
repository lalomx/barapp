import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import { ModifyInputEventArgs } from '../interfaces/form/modifyInputEventArgs';
import { FormEditor } from '../../core/interfaces/FormEditor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnChanges {

  @Input() formMetadataKey: string;
  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();

  constructor(private readonly metadataFormService: MetadataFormService, private fb: FormBuilder) { }

  formGroup: FormGroup;
  hasMetadata = false;
  formMetadata: any;
  inputs = [];
  editor = FormEditor;

  createForm() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formMetadataKey && changes.formMetadataKey.currentValue) {
      this.getMetadata();
    }
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
