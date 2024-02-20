import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CustomActionsComponent } from './custom-action-component/custom-action-component.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-ie-material-draft',
  styleUrls: ['./ie-material-draft.component.scss'],
  templateUrl: './ie-material-draft.component.html',
})
export class IeMaterialDraftComponent {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }


  settings = {
    // actions: {
    //   add: false,
    //   edit: false,
    //   delete: false,
    //   custom: [
    //     { name: 'approve', title: `<div class="position-relative"><i class="nb-arrow-thin-right position-absolute top-50 start-0"></i></div>` }
    //   ],
    //   position: 'rig ht'
    // },
    // actions: {
    //   add: false,
    //   edit: {
    //     mode: 'inline', // Enable the built-in edit form
    //     confirmSave: true,
    //   },
    //   delete: false,
    // },
    actions:{
      add:false,
      edit:true,
      delete:false,
      custom:[
        { name: 'approve', title: `<div class="position-relative pb-3"><i nbTooltip="Send to Approver" class="nb-arrow-thin-right position-absolute mb-3"></i></div>` }
      ],
      position: 'right'
    },
    edit : {
      confirmSave: true,
      editButtonContent: '<i nbTooltip="Edit data" class="nb-edit position-absolute mr-4 mb-3"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data:any;


  constructor(
    private service: SmartTableData,
    private api:ApiService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {
    this.getAllProduct();
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
    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/searchDraft', requestJson)
    .subscribe((res: any) => {
      console.log('Get All Product RES : ', res.data);
      this.data =  res.data;
      this.source.load(this.data);
    })
  }

  approve(data:any) {
    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/saveAsSendToApproval', data)
    .subscribe((res: any) => {
      console.log('Get All Product RES : ', res);
      this.toastrService.success('Item send to Approver', 'Success');
      this.getAllProduct();
    }, (err:any) => {
      this.toastrService.danger('Item failed to send', 'Error');
    })
  }

  onCustomAction(event) {
    this.open({title:'Send to Approver', message:'Are you sure to send to approver this data ?', data: event.data});
  }

  onEditConfirm(event) {
    console.log('data edit : -->', event);

    const body = {
      "yearIE": event.newData.yearIE,
      "maxAccumulatedIncomeAmount": event.newData.maxAccumulatedIncomeAmount,
      "maxIndividualIncomeAmount": event.newData.maxIndividualIncomeAmount,
      "currentAccumulatedIncomeAmount": event.newData.currentAccumulatedIncomeAmount,
      "maxAccumulatedExpenseAmount": event.newData.maxAccumulatedExpenseAmount,
      "maxIndividualExpenseAmount": event.newData.maxIndividualExpenseAmount,
      "currentAccumulatedExpenseAmount": event.newData.currentAccumulatedExpenseAmount,
      "modifiedBy": localStorage.getItem('username'),
    }

    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/saveAsDraft', body)
    .subscribe((res: any) => {
      event.confirm.resolve();
      this.toastrService.success('Data has been edited', 'Success');
    })
  }

  open({title, message, data}) {
    this.dialogService.open(ConfirmationDialogComponent,{
      context: {
        title,
        message,
        data
      } as Partial<ConfirmationDialogComponent> // Add 'as Partial<ConfirmationDialogComponent>' to specify known properties
    }).onClose.subscribe((res: any) => {
      if(res) {
        console.log('respawn data',res);
        this.approve(data);
      }
    })
  }


}
