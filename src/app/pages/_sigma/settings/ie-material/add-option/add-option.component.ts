import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() data: any;

  constructor(
    protected ref: NbDialogRef<AddOptionComponent>
  ) {}
  dismiss() {
    this.ref.close();
  }

  save_as_draft(){
    this.ref.close('save_as_draft');
    this.data.confirm.resolve()
  }

  send_to_approver(){
    this.ref.close('send_to_approver');
    this.data.confirm.resolve()

  }
}
