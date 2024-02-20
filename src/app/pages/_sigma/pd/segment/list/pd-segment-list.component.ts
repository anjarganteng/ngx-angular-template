import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationDialogComponent } from '../../../settings/ie-material/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-pd-segment-list',
  styleUrls: ['./pd-segment-list.component.scss'],
  templateUrl: './pd-segment-list.component.html',
})
export class PdSegmentListComponent {
  flipped = false;
  toggleView() {
    this.flipped = !this.flipped;
  }

  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      pdSegmentName: {
        title: 'PD Segment Name',
        type: 'string',
      },
      pdSegmentCriteriaColumn: {
        title: 'PD Segement Crit.Column',
        type: 'string',
      },
      totalRecordCriteria:  {
        title: 'Total Record Criteria',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data:any;


  constructor(
    private service: SmartTableData,
    private api: ApiService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {
    this.getAllProduct();
  }

  onDeleteConfirm(event): void {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Delete',
        message: 'Are you sure to delete this data ?',
        data: 'delete'
      },
    }).onClose.subscribe((res:any) => {
      if(res){
        this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/delete', event.data.accNo)
        .subscribe((res: any) => {
          this.toastrService.success('Item deleted successfully, wait untill approve by approve to see the changes', 'Success');
          event.confirm.resolve();
          this.getAllProduct();
        }, (err:any) => {
          this.toastrService.danger('Item failed to deleted', 'Error');
        })
      }
    })
  }

  fetchApi(url: string, payload: any) {
    return this.api.post(url, payload)
  }

  getAllProduct(){
    this.fetchApi(this.api.urlBase+'/trxPdSegment/v1/search', {
      "offset": 0,
      "limit": 99999999,
      "keyword": {
        "_all": ""
      },
      "order": {
        "asc": [
          "pdSegmentName"
        ]
      }
    })
    .subscribe((res: any) => {
      this.data =  res.data;
      this.source.load(this.data);
    })
  }

  onCreateConfirm(event): void {
    this.fetchApi(this.api.urlBase+'/trxExclusionEcl/v1/saveAsDraft', {
      "accNo": event.newData.accNo,
      "exclusionType": event.newData.exclusionType == 'true' ? true : false,
      "exclusionEclAmount": event.newData.exclusionEclAmount,
      "exclusionEclPercentage": event.newData.exclusionEclPercentage,
      "createdBy": localStorage.getItem('username')
    })
    .subscribe((res: any) => {
      event.confirm.resolve();
      this.toastrService.success('Data has been saved as draft, check draft to send to approver', 'Success');
      this.getAllProduct();
    },err => {
      event.confirm.reject();
      this.toastrService.danger('Data failed to save as draft', 'Error');
    })
  }

  onEditConfirm(event): void {
    console.log('Edit Confirm event.data: ', event);
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Delete',
        message: `Are you sure to edit ${event.newData.accNo} ?`,
        data: 'edit'
      },
    }).onClose.subscribe((res:any) => {
      if(res){
        this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/saveAsSendToApproval', {
          "accNo": event.newData.accNo,
          "versionNo" : event.newData.versionNo,
          "exclusionType": event.newData.exclusionType == 'true' ? true : false,
          "exclusionEclAmount": event.newData.exclusionEclAmount,
          "exclusionEclPercentage": event.newData.exclusionEclPercentage,
          "modifiedBy": localStorage.getItem('username')
        })
        .subscribe((res: any) => {
          this.toastrService.success(`Item ${event.newData.accNo} edited successfully, wait untill approve by approve to see the changes`, 'Success');
          event.confirm.resolve();
          this.getAllProduct();
        }, (err:any) => {
          this.toastrService.danger(`Item ${event.newData.accNo} failed to deleted`, 'Error');
        })
      }
    })

    event.confirm.resolve();
  }

}
