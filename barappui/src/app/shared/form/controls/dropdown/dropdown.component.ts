import {
  Component, OnInit, ViewChild, ElementRef,
  OnChanges, AfterViewInit, SimpleChanges,
  Renderer2, Input, forwardRef, AfterViewChecked, TemplateRef
} from '@angular/core';
import * as UIkit from 'uikit';
import { DropdownOptions } from '../../../interfaces/form/dropDownOptions';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownService } from '../../../../core/services/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, ControlValueAccessor {

  @ViewChild('dropdownO', { static: false }) dropdown: ElementRef;
  @ViewChild('dropdownInput', { static: false }) dropdownInput: ElementRef;
  @ViewChild('data', { static: true}) data: ElementRef;

  @Input() options: DropdownOptions;
  @Input() placeholder = 'Selecciona...';

  constructor(private render: Renderer2, private dropDownService: DropdownService) { }

  dropdownObject: any;
  dropdownCurrentEl: any;
  datasource: { text: string, value: any }[] = [];
  loading = true;

  value = null;
  text = null;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  ngOnInit() {
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.options && changes.options.currentValue) {
      await this.initDatasource();
    }
  }

  ngAfterViewInit(): void {
    this.dropdownObject = UIkit.dropdown(this.dropdown.nativeElement);
    UIkit.util.on(this.dropdown.nativeElement, 'shown', e => {
      const pixels = 45;
      let maxHeight = '';
      let minHeight = '';
      if (this.datasource.length === 0) {
        maxHeight = `${pixels}px`;
        minHeight = `${pixels}px`;
      } else if (this.datasource.length === 4) {
        maxHeight = `${pixels * this.datasource.length}px`;
        minHeight = `${pixels * this.datasource.length}px`;
      } else {
        maxHeight = `180px`;
        minHeight = `180px`;
      }
      this.dropdown.nativeElement.style.minHeight = minHeight;
      this.dropdown.nativeElement.style.maxHeight = maxHeight;
      e.stopPropagation();
    });
    UIkit.util.on(this.dropdown.nativeElement, 'shown', e => e.stopPropagation());
    UIkit.util.on(this.dropdown.nativeElement, 'hidden', e => e.stopPropagation());
  }

  ngAfterViewChecked() {
  }

  onSelected(item, event) {
    if ( this.dropdownCurrentEl) {
      this.render.removeClass(this.dropdownCurrentEl, 'b-selected');
    }
    if (this.dropdownCurrentEl && this.dropdownCurrentEl.id === event.target.id) {
      this.value = null;
      this.text = null;
      this.dropdownCurrentEl = null;
      this.dropdownTriggerValue(null);
    } else {
      this.dropdownCurrentEl = event.target;
      this.render.addClass(this.dropdownCurrentEl, 'b-selected');
      this.value = item.value;
      this.text = item.text;
      this.dropdownTriggerValue(item.value);
    }
    this.dropdownObject.hide(false);
    this.onTouch();
    this.onChange(this.value);
    event.stopPropagation();
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    } else {
      if (this.dropdownCurrentEl) {
        this.render.removeClass(this.dropdownCurrentEl, 'b-selected');
      }
      this.value = null;
      this.text = null;
      this.dropdownCurrentEl = null;
      this.dropdownTriggerValue(null);
    }
    setTimeout(() => this.selectItem());
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private selectItem() {
    const allElements = Array.from(this.dropdown.nativeElement.querySelectorAll('.b-dropdown-item'));
    allElements.forEach(el => this.render.removeClass(el, 'b-selected'));
    if (!this.value) {
      setTimeout(() => this.text = null);
      return;
    }

    const selected = allElements.find((item: HTMLElement) => item.id === this.value) as HTMLElement;

    if (!selected) {
      return;
    }
    if (this.text === selected.innerText) {
      return;
    }
    setTimeout(() => this.text = selected.innerText);
    this.dropdownCurrentEl = selected;
    this.render.addClass(this.dropdownCurrentEl, 'b-selected');
  }

  private dropdownTriggerValue(value) {
    this.dropdownInput.nativeElement.value = value;
    this.dropdownInput.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private async initDatasource() {
    const data = this.dropDownService.dropdowns.filter(d => d.group === this.options.dataSource);
    this.datasource = data
      .map(d => ({text: d[this.options.dataSourceOptions.text], value: d[this.options.dataSourceOptions.propertyName] }));
    this.loading = false;
  }
}
