import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less']
})
export class ConfirmDialogComponent {

  @ViewChild(DialogComponent, { static: true }) private dialog: DialogComponent;

  private dialogClosedSource = new Subject();
  private dialogClosed$ = this.dialogClosedSource.asObservable();
  private closedSubscription: Subscription;
  result = false;

  async confirm() {
    if (this.closedSubscription) {
      this.closedSubscription.unsubscribe();
      this.closedSubscription = null;
    }
    return new Promise(async resolve => {
      this.closedSubscription = this.dialogClosed$.subscribe(() => {
        resolve(this.result);
      });
      await this.show();
    });
  }

  show() {
    this.result = false;
    this.dialog.show();
  }

  close() {
    this.dialog.close();
  }

  onYes() {
    this.result = true;
    this.close();
  }

  onNo() {
    this.result = false;
    this.close();
  }

  onClosed() {
    this.dialogClosedSource.next();
  }
}
