import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as UIkit from 'uikit';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;

  constructor() { }

  open = false;

  ngOnInit() {
  }

  show() {
    this.open = true;
    setTimeout(() => UIkit.modal(this.modal.nativeElement).show(), 500);
  }

}
