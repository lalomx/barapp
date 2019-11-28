import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as UIkit from 'uikit';
import { ModifyInputEventArgs } from '../../interfaces/form/modifyInputEventArgs';
import { PropertyChangedEventArgs } from '../../interfaces/form/propertyChangedEventArgs';
import { FormComponent } from '../../form/form.component';
import { HasChangesService } from '../../../core/services/has-changes.service';
import { DataService } from '../../../core/services/data.service';


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
  @Input() dataService: DataService;

  @Output() modifyInput = new EventEmitter<ModifyInputEventArgs>();
  @Output() propertyChanged = new EventEmitter<PropertyChangedEventArgs>();
  @Output() saved = new EventEmitter<any>();
  @Output() formInitializing = new EventEmitter<any>();

  private modalObject: any;

  constructor(private hasChangesService: HasChangesService) { }

  open = false;
  submitting = false;

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
  }

  ngAfterViewInit(): void {
    this.modalObject = UIkit.modal(this.modal.nativeElement);
    UIkit.util.on(this.modal.nativeElement, 'shown', (event) => {
      this.modal.nativeElement.querySelector('.uk-modal-body').scrollTo( 0, 0 );
      event.preventDefault();
    });
    UIkit.util.on(this.modal.nativeElement, 'hidden', e => e.preventDefault()) ;
  }

  show() {
    this.open = true;
    this.form.errors = null;
    this.modalObject.show();
  }

  onModifyInput(args: ModifyInputEventArgs) {
    this.modifyInput.emit(args);
  }

  onPropertyChanged(args: PropertyChangedEventArgs) {
    this.propertyChanged.emit(args);
  }

  async save() {
    this.form.errors = null;
    this.submitting = true;
    try {
      const savedEntity = await this.dataService.save(this.entity).toPromise();
      this.saved.emit(savedEntity);
      this.submitting = false;
      this.close();
    } catch (e) {
      this.submitting = false;
      this.form.errors = e;
    }
  }

  onCancel() {
    this.form.cancel();
  }

  close() {
    setTimeout(() => this.modalObject.hide(), 500);
  }

  onFormInitializing(args: any) {
    this.formInitializing.emit(args);
  }
}
