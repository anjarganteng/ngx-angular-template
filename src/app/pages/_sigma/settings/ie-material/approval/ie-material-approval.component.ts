import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbToastrService } from '@nebular/theme';
import { ActionsComponent } from './action/action.component';
import { ActionService } from './action.service';

@Component({
  selector: 'ngx-ie-material-approval',
  styleUrls: ['./ie-material-approval.component.scss'],
  templateUrl: './ie-material-approval.component.html',
})
export class IeMaterialApprovalComponent {
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
      yearIE: {
        title: 'Year IE',
        type: 'string',
      },
      maxAccumulatedIncomeAmount: {
        title: 'Max Acc.Inc.Amount',
        type: 'string',
      },
      maxIndividualIncomeAmount:  {
        title: 'Max Indiv.Inc.Amount',
        type: 'boolean',
      },
      currentAccumulatedIncomeAmount: {
        title: 'Current Acc.Inc.Amount',
        type: 'string',
      },
      maxAccumulatedExpenseAmount:  {
        title: 'Max Acc.Exp.Amount',
        type: 'string',
      },
      maxIndividualExpenseAmount: {
        title: 'Max Indiv.Exp.Amount',
        type: 'string',
      },
      currentAccumulatedExpenseAmount: {
        title: 'Current Acc.Exp.Amount',
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
            this.getAllProduct()
          });
          instance.reject.subscribe(row => console.log('Reject click', row));
        }
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
    private api:ApiService,
    private toastrService: NbToastrService,
    private actionService: ActionService
  ) {
    this.getAllProduct();
    this.actionService.$action.subscribe((res:any) => {
      this.getAllProduct();
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
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
          "yearIE"
        ]
      }
    };
    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/searchApprWaitingApproval', requestJson)
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
        this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/approve', event.data.yearIE)
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
        this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/reject', event.data)
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
