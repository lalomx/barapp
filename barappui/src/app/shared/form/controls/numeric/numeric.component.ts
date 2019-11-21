import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericComponent),
      multi: true
    }
  ]
})
export class NumericComponent implements ControlValueAccessor {

  @Input() max = 99999;
  @Input() min = 0;
  @Input() format: string;

  constructor() { }

  value = 0;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: number | '') {
    if (value === '') {
      return;
    }
    this.value = +value;
    this.onTouch();
    this.onChange(this.value);
  }

  numUp(e) {
    const innerValue = this.value + 1;
    if (innerValue > this.max) {
      this.value = this.max;
    } else {
      this.value = innerValue;
      this.onChange(this.value);
    }
    e.preventDefault();
  }

  numDown(e) {
    const innerValue = this.value - 1;
    if (innerValue < this.min) {
      this.value = this.min;
    } else {
      this.value = innerValue;
      this.onChange(this.value);
    }
    e.preventDefault();
  }

  writeValue(value: number): void {
    if (value !== null && value !== undefined) {
      this.value = value;
    } else {
      this.value = 0;
    }
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
}
