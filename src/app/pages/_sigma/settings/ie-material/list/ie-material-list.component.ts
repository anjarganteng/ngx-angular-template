import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddOptionComponent } from '../add-option/add-option.component';

@Component({
  selector: 'ngx-ie-material-list',
  styleUrls: ['./ie-material-list.component.scss'],
  templateUrl: './ie-material-list.component.html',
})
export class IeMaterialListComponent {
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
    private dialogService : NbDialogService
  ) {
    this.getAllProduct();
  }

  onDeleteConfirm(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
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
          "yearIE"
        ]
      }
    };
    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/search', requestJson)
    .subscribe((res: any) => {
      this.data =  res.data;
      this.source.load(this.data);
    })
  }

  onCreateConfirm(event): void {
    this.open_modal_add({title:'ADD DATA IE MATERIAL', message:'WHAT DO YO WANT ?', data:event})
  }

  onEditConfirm(event): void {
    console.log('Edit Confirm event.data: ', event);
    const payload = {
      "yearIE": event.newData.yearIE,
      "versionNo":  event.data.versionNo,
      "maxAccumulatedIncomeAmount": event.newData.maxAccumulatedIncomeAmount,
      "maxIndividualIncomeAmount": event.newData.maxIndividualIncomeAmount,
      "currentAccumulatedIncomeAmount": event.newData.currentAccumulatedIncomeAmount,
      "maxAccumulatedExpenseAmount": event.newData.maxAccumulatedExpenseAmount,
      "maxIndividualExpenseAmount": event.newData.maxIndividualExpenseAmount,
      "currentAccumulatedExpenseAmount": event.newData.currentAccumulatedExpenseAmount,
      "modifiedBy": localStorage.getItem('username')
    }
    this.api.post(this.api.urlBase+'/trxYearIeMaterial/v1/saveAsSendToApproval', payload)
    .subscribe((res: any) => {
      console.log('Create Confirm RES : ', res);
      event.confirm.resolve();
      this.toastrService.success('Data has been request to edit, wait data edited approved to see changes', 'Success');
      this.getAllProduct();
    },err => {
      console.log('Create Confirm ERR : ', err);
      event.confirm.reject();
      this.toastrService.danger('Data failed request to edit', 'Error');
    })
  }

  open_modal_add({title, message, data}){
    this.dialogService.open(AddOptionComponent, {
      context: {
        title,
        message,
        data
      } as Partial<AddOptionComponent>
    }).onClose.subscribe((res: any) => {

      const payload = {
          "yearIE": data.newData.yearIE,
          "maxAccumulatedIncomeAmount": data.newData.maxAccumulatedIncomeAmount,
          "maxIndividualIncomeAmount": data.newData.maxIndividualIncomeAmount,
          "currentAccumulatedIncomeAmount": data.newData.currentAccumulatedIncomeAmount,
          "maxAccumulatedExpenseAmount": data.newData.maxAccumulatedExpenseAmount,
          "maxIndividualExpenseAmount": data.newData.maxIndividualExpenseAmount,
          "currentAccumulatedExpenseAmount": data.newData.currentAccumulatedExpenseAmount,
          "createdBy": localStorage.getItem('username')
      }

      if(res == 'save_as_draft') {
        console.log('whats button is it ?',res);
        this.fetch_data(this.api.urlBase+'/trxYearIeMaterial/v1/saveAsDraft', payload,{
          message_success: 'Data has been saved as draft, check draft to send to approver',
          message_error: 'Data failed to save as draft'
        })
      } else if(res == 'send_to_approver') {
        console.log('whats button is it ?',res);
        this.fetch_data(this.api.urlBase+'/trxYearIeMaterial/v1/saveAsSendToApproval', payload,{
          message_success: 'Data has been send to approval, wait data approved to see changes',
          message_error: 'Data failed to send to approval'
        })
      }
    })
  }

  fetch_data(url, payload, {message_success, message_error}){
    this.api.post(url, payload)
    .subscribe((res: any) => {
      this.toastrService.success(message_success, 'Success');
      this.getAllProduct();
    },err => {
      this.toastrService.danger(message_error, 'Error');
    })
  }
}
