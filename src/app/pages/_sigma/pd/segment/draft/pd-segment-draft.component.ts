import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationDialogComponent } from '../../../settings/ie-material/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-pd-segment-draft',
  styleUrls: ['./pd-segment-draft.component.scss'],
  templateUrl: './pd-segment-draft.component.html',
})
export class PdSegmentDraftComponent {
  flipped = false;
  toggleView() {
    this.flipped = !this.flipped;
  }

  settings = {
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
    private api:ApiService,
    private toastrService: NbToastrService,
    private dialogService : NbDialogService
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

  fetchApi(url: string, payload: any) {
    return this.api.post(url, payload)
  }

  getAllProduct(){
    this.fetchApi(this.api.urlBase+'/trxPdSegment/v1/searchDraft', {
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

  approve(data:any){
    this.api.post(this.api.urlBase+'/trxPdSegment/v1/saveAsSendToApproval', data)
    .subscribe((res: any) => {
      console.log('Get All Product RES : ', res);
      this.toastrService.success('Item send to Approver', 'Success');
      this.getAllProduct();
    }, (err:any) => {
      this.toastrService.danger('Item failed to send', 'Error');
    })
  }

  onCustomAction(event) {
    this.open({
      title: 'Send to Approver',
      message: 'Are you sure you want to send to approver this data?',
      data: event.data
    })
  }

  onEditConfirm(event) {
    console.log('data edit : -->', event);

    const body = {
      "pdSegmentName": event.newData.pdSegmentName,
      "pdSegmentCriteriaColumn": event.newData.pdSegmentCriteriaColumn,
      "totalRecordCriteria": event.newData.totalRecordCriteria,
      "modifiedBy": localStorage.getItem('username'),
      "trxPdSegmentDetailApprList": [
        {
            "pdSegmentDetailName": "Jagung Maniest",
            "pdSegmentDetailValues": "TDR 3000"
        }
      ]
    }

    this.api.post(this.api.urlBase+'/trxPdSegment/v1/saveAsDraft', body)
    .subscribe((res: any) => {
      event.confirm.resolve();
      this.toastrService.success('Data has been edited', 'Success');
    })
  }

  open({title, message, data}) {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title,
        message,
        data
      } as Partial<ConfirmationDialogComponent>
    }).onClose.subscribe((res: any) => {
      if(res) {
        // console.log('respawn data',res);
        console.log('respawn data',data);
        this.approve(data);
      }
    })
  }
}
