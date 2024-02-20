import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationDialogComponent } from '../../../settings/ie-material/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-exclusion-ecl-list',
  styleUrls: ['./exclusion-ecl-list.component.scss'],
  templateUrl: './exclusion-ecl-list.component.html',
})
export class ExclusionEclListComponent {
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
      accNo: {
        title: 'Acc No',
        type: 'string',
      },
      exclusionType: {
        title: 'Exclusion Type',
        editor: {
          type:'list',
          config:{
            list:[
              {
                value: true,
                title: "True"
              },
              {
                value: false,
                title: "False"
              }
            ]
          }
        }
      },
      exclusionEclAmount:  {
        title: 'Exclusion Ecl.Amount',
        type: 'boolean',
      },
      exclusionEclPercentage: {
        title: 'Exclusion Ecl.Percentage',
        type: 'string',
      },
      // createdDate: {
      //   title: 'Created Date',
      //   type: 'string',
      // },
      // createdBy: {
      //   title: 'Created By',
      //   type: 'string',
      // },
      // modifiedDate: {
      //   title: 'Modified Date',
      //   type: 'string',
      // },
      // modifiedBy: {
      //   title: 'Modified By',
      //   type: 'string',
      // },
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
    // const requestJson = {
    //   "offset": 0,
    //   "limit": 99999999,
    //   "keyword": {
    //     "_all": ""
    //   },
    //   "order": {
    //     "asc": [
    //       "accNo"
    //     ]
    //   }
    // };
    this.fetchApi(this.api.urlBase+'/trxExclusionEcl/v1/search', {
      "offset": 0,
      "limit": 99999999,
      "keyword": {
        "_all": ""
      },
      "order": {
        "asc": [
          "accNo"
        ]
      }
    })
    // this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/search', requestJson)
    .subscribe((res: any) => {
      this.data =  res.data;
      this.source.load(this.data);
    })
  }

  onCreateConfirm(event): void {
    // const payload = {
    //   "accNo": event.newData.accNo,
    //   "exclusionType": event.newData.exclusionType == 'true' ? true : false,
    //   "exclusionEclAmount": event.newData.exclusionEclAmount,
    //   "exclusionEclPercentage": event.newData.exclusionEclPercentage,
    //   "createdBy": localStorage.getItem('username')
    // };
    this.fetchApi(this.api.urlBase+'/trxExclusionEcl/v1/saveAsDraft', {
      "accNo": event.newData.accNo,
      "exclusionType": event.newData.exclusionType == 'true' ? true : false,
      "exclusionEclAmount": event.newData.exclusionEclAmount,
      "exclusionEclPercentage": event.newData.exclusionEclPercentage,
      "createdBy": localStorage.getItem('username')
    } )
    // this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/saveAsDraft', payload)
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
