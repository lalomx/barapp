import { Component, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;

  @Output() closed = new EventEmitter();
  constructor() { }

  private modalObject: any;
  open = false;

  ngAfterViewInit(): void {
    this.modalObject = UIkit.modal(this.modal.nativeElement);
    UIkit.util.on(this.modal.nativeElement, 'shown', (event) => {
      event.preventDefault();
    });
    UIkit.util.on(this.modal.nativeElement, 'hidden', e => {
      e.preventDefault();
      this.closed.emit();
    });
  }

  show() {
    setTimeout(() => {
      this.modalObject.show();
      this.open = true;
    }, 500);
  }

  close() {
    setTimeout(() => {
      this.modalObject.hide();
      this.open = false;
    }, 500);
  }
}
