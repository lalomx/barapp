import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnChanges, AfterViewInit {

  @ViewChild('dropdownO', { static: true}) dropdown: ElementRef;
  @Input() formMetadataKey: string;

  constructor(private readonly metadataFormService: MetadataFormService, private fb: FormBuilder) { }

  formGroup: FormGroup;
  hasMetadata = false;
  formMetadata: any;
  selectValue: any;
  dropdownObject: any;

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

  ngAfterViewInit(): void {
    this.dropdownObject = UIkit.dropdown(this.dropdown.nativeElement);
    console.log(this.dropdownObject);
    UIkit.util.on(this.dropdown.nativeElement, 'shown', (event) => {
      console.log('dropdown shown');
      event.stopPropagation();
    });
    // UIkit.util.on(this.dropdownObject.nativeElement, 'hidden', () => console.log('hidden'));
  }

  onSelected() {
    console.log('selected');
    this.dropdownObject.hide(false);
  }

  private getMetadata() {
    this.formMetadata = this.metadataFormService.getMetadata(this.formMetadataKey);
    console.log(this.formMetadata);
  }
}
