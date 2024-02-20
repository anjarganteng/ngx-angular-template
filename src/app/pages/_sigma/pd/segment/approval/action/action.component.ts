import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ApiService } from '../../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ActionService } from '../action.service';
import { ConfirmationDialogComponent } from '../../../../settings/ie-material/confirmation-dialog/confirmation-dialog.component';

@Component({
  template: `
    <div style="gap:20px;" class="d-flex flex-row"  >
      <button class="btn btn-primary" (click)="open({
                                                      title:'Approve', message:'Are you sure to approve this data ?',
                                                      data: 'approve'})"> Approve
      </button>
      <button class="btn text-white btn-danger" (click)="open({
                                                      title:'Reject',
                                                      message:'Are you sure to reject this data ?', data: 'reject'})"> Reject
      </button>
    </div>
  `,
})
export class ActionsComponent implements ViewCell {
  @Input() value: string | number;
  @Input() rowData: any;

  @Output() approve: EventEmitter<any> = new EventEmitter();
  @Output() reject: EventEmitter<any> = new EventEmitter();

  constructor(
    private api: ApiService,
    private actionService : ActionService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {}

  onApprove() {
    this.approve.emit(this.rowData);
    console.log('Approve', this.rowData);
    this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/approve', this.rowData.accNo)
    .subscribe((res: any) => {
      this.actionService.action({action:'approve', data: this.rowData});
      this.toastrService.success('Item approved successfully', 'Success')
    }, (err:any) => {
      this.toastrService.danger('Item failed to approved', 'Error');
    })
  }

  onReject() {
    this.reject.emit(this.rowData);
    this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/reject', this.rowData.accNo)
    .subscribe((res: any) => {
      this.toastrService.success('Item reject successfully', 'Success')
    }, (err:any) => {
      this.toastrService.danger('Item failed to reject', 'Error');
    })
  }

  open({title, message, data}) {
    this.dialogService.open(ConfirmationDialogComponent,{
      context: {
        title: title,
        message: message,
        data: data
      } as Partial<ConfirmationDialogComponent> // Add 'as Partial<ConfirmationDialogComponent>' to specify known properties
    }).onClose.subscribe((res: any) => {
      if (res) {
        console.log('respawn data',res);
        if(data == 'approve'){
          this.onApprove();
        } else if (data == 'reject'){
          this.onReject();
        }
      }
    })
  }
}
