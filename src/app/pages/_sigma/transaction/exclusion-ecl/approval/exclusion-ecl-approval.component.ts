import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ActionsComponent } from './action/action.component';
import { ActionService } from './action.service';
import { ConfirmationDialogComponent } from '../../../settings/ie-material/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-exclusion-ecl-approval',
  styleUrls: ['./exclusion-ecl-approval.component.scss'],
  templateUrl: './exclusion-ecl-approval.component.html',
})
export class ExclusionEclApprovalComponent {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

  settings = {
    actions:false,
    // actions: {
    //   add: false,
    //   edit: false,
    //   delete: false,
    //   // custom: [
    //   //   {
    //   //     name: 'approve',
    //   //     title: `
    //   //       <div class="action-container">
    //   //         <i class="nb-checkmark position-absolute mt-2 mr-2"></i>
    //   //       </div>
    //   //     `
    //   //   },
    //   //   {
    //   //     name: 'Reject',
    //   //     title: `
    //   //       <div class="action-container">
    //   //         <i class="nb-close position-absolute mb-2 ml-2 bottom-50" style="top:4px"></i>
    //   //       </div>
    //   //     `
    //   //   },
    //   // ],
    //   custom: [
    //     {
    //       name: 'custom',
    //       title: 'Actions',
    //       type: 'custom',
    //       renderComponent: ActionsComponent,
    //       onComponentInitFunction(instance) {
    //         instance.approve.subscribe(row => console.log('Approve click', row));
    //         instance.reject.subscribe(row => console.log('Reject click', row));
    //       }
    //     }
    //   ],
    //   position: 'right'
    // },
    columns: {
      accNo: {
        title: 'Acc No',
        type: 'string',
      },
      exclusionType: {
        title: 'Exclusion Type',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          console.log(cell);
          console.log(row);
        },
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
      actions: {
        filter: false,
        position: 'right',
        title: 'Actions',
        type: 'custom',
        renderComponent: ActionsComponent,
        onComponentInitFunction(instance) {
          console.log(instance, 'instance');

          instance.approve.subscribe(row =>  {
            console.log('Approve click', row);
          });
          instance.reject.subscribe(row => console.log('Reject click', row));
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data:any;


  constructor(
    private service: SmartTableData,
    private api:ApiService,
    private toastrService: NbToastrService,
    private actionService: ActionService,
    private dialogService: NbDialogService
  ) {
    this.getAllProduct();
    this.actionService.$action.subscribe((res:any) => {
      this.getAllProduct();
    })
  }

  onDeleteConfirm(event): void {
    console.log(event);

    // if (window.confirm('Are you sure you want to delete?')) {
    //   this.dialogService.open(ConfirmationDialogComponent, {
    //     context: {
    //       title: 'Delete',
    //       message: 'Are you sure to delete this data ?',
    //       data: 'delete'
    //     },
    //   }).onClose.subscribe((res:any) => {
    //     if(res){
    //       this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/delete', event.data.accNo)
    //       .subscribe((res: any) => {
    //         this.toastrService.success('Item deleted successfully', 'Success');
    //         this.getAllProduct();
    //       }, (err:any) => {
    //         this.toastrService.danger('Item failed to deleted', 'Error');
    //       })
    //     }
    //   })
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  getAllProduct(){
    const requestJson = {
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
    };
    this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/searchApprWaitingApproval', requestJson)
    .subscribe((res: any) => {
      console.log('Get All Product RES : ', res.data);
      this.data =  res.data;
      this.source.load(this.data);
    })
  }

  onCustomAction(event) {
    console.log(event);
    switch ( event.action) {
      case 'approve':
        // this.approveItem(event.data);
        console.log('Approve');
        this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/approve', event.data.accNo)
        .subscribe((res: any) => {
          this.toastrService.success('Item approved successfully', 'Success');
          this.getAllProduct();
        }, (err:any) => {
          this.toastrService.danger('Item failed to approved', 'Error');
        })
        break;
      case 'Reject':
        // this.rejectItem(event.data);
        console.log('Reject');
        this.api.post(this.api.urlBase+'/trxExclusionEcl/v1/reject', event.data)
        .subscribe((res: any) => {
          console.log('Get All Product RES : ', res);
          this.toastrService.danger('Item rejected successfully', 'Success');
          this.getAllProduct();
        })
        break;
      default:
        break;
    }
  }
}
