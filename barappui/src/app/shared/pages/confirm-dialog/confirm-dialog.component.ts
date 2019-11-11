import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less']
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild(DialogComponent, { static: true }) dialog: DialogComponent;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.dialog.show();
  }

  close() {
    this.dialog.close();
  }

}
