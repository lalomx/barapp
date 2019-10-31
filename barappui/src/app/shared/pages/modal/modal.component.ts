import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as UIkit from 'uikit';
import { ModifyInputEventArgs } from '../../interfaces/form/modifyInputEventArgs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;

  @Input() mode = 'add';
  @Input() entity: any;
  @Input() formMetadata: any;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();

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
  }

  ngAfterViewInit(): void {
    this.modalObject = UIkit.modal(this.modal.nativeElement);
    console.log(this.modal.nativeElement);
    UIkit.util.on(this.modal.nativeElement, 'shown', (event) => {
      event.preventDefault();
    });
    UIkit.util.on(this.modal.nativeElement, 'hidden', e => e.preventDefault()) ;
  }

  show() {
    this.open = true;
    setTimeout(() => this.modalObject.show(), 500);
  }

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }
}
