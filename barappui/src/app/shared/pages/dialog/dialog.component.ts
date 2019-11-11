import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;

  constructor() { }

  private modalObject: any;
  open = false;

  ngAfterViewInit(): void {
    this.modalObject = UIkit.modal(this.modal.nativeElement);
    UIkit.util.on(this.modal.nativeElement, 'shown', (event) => {
      event.preventDefault();
    });
    UIkit.util.on(this.modal.nativeElement, 'hidden', e => e.preventDefault()) ;
  }

  show() {
    this.open = true;
    setTimeout(() => this.modalObject.show(), 500);
  }

  close() {
    this.open = true;
    setTimeout(() => this.modalObject.hide(), 500);
  }

}
