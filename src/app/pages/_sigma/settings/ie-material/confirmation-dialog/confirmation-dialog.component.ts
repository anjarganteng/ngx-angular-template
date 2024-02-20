import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() data: any;
  constructor(
    protected ref: NbDialogRef<ConfirmationDialogComponent>
  ) {}
  dismiss() {
    this.ref.close();
  }


  confirm() {
    this.ref.close(true);
  }
  
}
