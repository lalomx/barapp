import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputNumeric]'
})
export class InputNumericDirective {

  constructor(private inputElement: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.inputElement.nativeElement.value;

    this.inputElement.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.inputElement.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
