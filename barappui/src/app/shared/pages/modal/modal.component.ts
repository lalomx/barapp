import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as UIkit from 'uikit';
import { ModifyInputEventArgs } from '../../interfaces/form/modifyInputEventArgs';
import { PropertyChangedEventArgs } from '../../interfaces/form/propertyChangedEventArgs';
import { FormComponent } from '../../form/form.component';
import { HasChangesService } from '../../../core/services/has-changes.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  providers: [HasChangesService]
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', { static: true}) modal: ElementRef;
  @ViewChild(FormComponent, {static: true}) form: FormComponent;

  @Input() mode = 'add';
  @Input() entity: any;
  @Input() formMetadata: any;
  @Input() entityTitle: string;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() propertyChanged = new EventEmitter<PropertyChangedEventArgs>();

  private modalObject: any;

  constructor(private hasChangesService: HasChangesService) { }

  open = false;

  get title() {
    if (this.mode === 'add') {
      return `Nuevo ${this.entityTitle}`;
    } else if (this.mode === 'edit') {
      return `Editar ${this.entityTitle}`;
    } else {
      return 'Aqui va un titulo';
    }
  }

  get hasChanges() {
    return this.hasChangesService.hasChanges;
  }

  ngOnInit() {
    console.log(this.formMetadata);
  }

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

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }

  onPropertyChanged(args: PropertyChangedEventArgs) {
    this.propertyChanged.emit(args);
  }

  save() {
    this.form.save();
  }

  onCancel() {
    this.form.cancel();
  }
}
