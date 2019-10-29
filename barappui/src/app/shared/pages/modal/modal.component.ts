import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as UIkit from 'uikit';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;

  @Input() mode: string;
  @Input() entity: any;
  @Input() formMetadata: any;

  private modalObject: any;

  constructor() { }

  open = false;

  get title() {
    if (this.mode === 'add') {
      return 'Nuevo';
    } else if (this.mode === 'edit') {
      return 'Editar';
    } else {
      return 'Aqui va un titulo';
    }
  }
  ngOnInit() {
    console.log(this.formMetadata);
  }

  ngAfterViewInit(): void {
    this.modalObject = UIkit.modal(this.modal.nativeElement);
    console.log(this.modal.nativeElement);
    UIkit.util.on(this.modal.nativeElement, 'shown', (event) => {
      console.log('shown');
      console.log(event.target);
    });
    UIkit.util.on(this.modal.nativeElement, 'hidden', () => console.log('hidden')) ;
  }

  show() {
    this.open = true;
    setTimeout(() => this.modalObject.show(), 500);
  }

}
