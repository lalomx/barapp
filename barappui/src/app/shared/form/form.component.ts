import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataFormService } from '../../core/services/metadata-form.service';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnChanges, AfterViewInit {

  @ViewChild('dropdownO', { static: true }) dropdown: ElementRef;
  @ViewChild('dropdownInput', { static: false }) dropdownInput: ElementRef;
  @Input() formMetadataKey: string;

  constructor(private readonly metadataFormService: MetadataFormService, private fb: FormBuilder, private render: Renderer2) { }

  formGroup: FormGroup;
  hasMetadata = false;
  formMetadata: any;
  dropdownObject: any;
  hideIcon = false;
  dropdownValue = 'Selecciona...';
  dropdownCurrentId: string;

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
    UIkit.util.on(this.dropdown.nativeElement, 'shown', e => e.stopPropagation());
    UIkit.util.on(this.dropdown.nativeElement, 'hidden', e => e.stopPropagation());
  }

  onSelected(value, event) {
    if (this.dropdownCurrentId === event.target.id) {
      this.render.removeClass(event.target, 'b-selected');
      this.dropdownValue = 'Selecciona...';
      this.dropdownCurrentId = null;
      this.dropdownTriggerValue(null);
    } else {
      this.render.addClass(event.target, 'b-selected');
      this.dropdownTriggerValue(value);
      this.dropdownValue = value;
      this.dropdownCurrentId = event.target.id;
    }
    this.dropdownObject.hide(false);
    event.stopPropagation();
  }

  private dropdownTriggerValue(value) {
    this.dropdownInput.nativeElement.value = value;
    this.dropdownInput.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private getMetadata() {
    this.formMetadata = this.metadataFormService.getMetadata(this.formMetadataKey);
  }
}
