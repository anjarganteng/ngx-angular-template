import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { ApiService } from '../../../../../services/api.service';
import FileSaver from 'file-saver';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../../../../../util/validation';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-product-approval',
  styleUrls: ['./product-approval.component.scss'],
  templateUrl: './product-approval.component.html',
})
export class ProductApprovalComponent {
  flipped = false;
  sourceProduct: LocalDataSource = new LocalDataSource();
  data: any;
  loanTypes: any;
  flagEirs: any = [true, false];
  coas: any;
  formProduct: FormGroup;
  dialogRef: NbDialogRef<any>;
  dialogTitle: any;


  constructor(
    private serviceTable: SmartTableData, 
    private api: ApiService,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private validation: Validation
  ) {
    this.formProduct = this.formBuilder.group({
      productCode: ['', Validators.required], 
      flagEir: ['', Validators.required],
      prepaymentMonth: ['', Validators.required],
      marketRate: ['', Validators.required],
      spreadRate: [''],
      glIncomeAmortizeDebit: [''],
      glIncomeAmortizeCredit: [''],
      glExpenseAmortizeDebit: [''],
      glExpenseAmortizeCredit: [''],
      glUmrateAmortizeDebit: [''],
      glUmrateAmortizeCredit: [''],
      glDeltaAmortizeDebit: [''],
      glDeltaAmortizeCredit: [''],
      glEclCollectiveDebit: [''],
      glEclCollectiveCredit: [''],
      glReversalEclCollectiveDebit: [''],
      glReversalEclCollectiveCredit: [''],
      glUnwindingCollectiveDebit: [''],
      glUnwindingCollectiveCredit: [''],
      glEclIndividualDebit: [''],
      glEclIndividualCredit: [''],
      glReversalEclIndividualDebit: [''],
      glReversalEclIndividualCredit: [''],
      glUnwindingIndividualDebit: [''],
      glUnwindingIndividualCredit: ['']
  });
    this.getAllProduct();    
    this.getAllLoanType(); 
    this.getAllCoa();
    this.formProduct.disable();
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

  settings = {
    // hideSubHeader: true,
    mode: 'external',
    actions: {
      add: false,
      delete: false,
    },
    edit: {
      editButtonContent: '<i class="nb-compose"></i>'
    },
    columns: {
      productCode: {
        title: 'Product Code',
        type: 'string',
      },
      productName: {
        title: 'Product Name',
        type: 'string',
      },
      flagEir:  {
        title: 'Flag Eir',
        type: 'boolean',
      },
      prepaymentMonth: {
        title: 'Prepayment Month',
        type: 'string',
      },
      marketRate:  {
        title: 'Market Rate',
        type: 'string',
      },
      spreadRate:  {
        title: 'Spread Rate',
        type: 'string',
      },
      glIncomeAmortizeDebit: {
        title: 'GL Inc.Amor.Debit',
        type: 'string',
      },
      glIncomeAmortizeCredit: {
        title: 'GL Inc.Amor.Credit',
        type: 'string',
      },
      glExpenseAmortizeDebit: {
        title: 'GL Exp.Amor.Debit',
        type: 'string',
      },
      glExpenseAmortizeCredit: {
        title: 'GL Exp.Amor.Credit',
        type: 'string',
      },
      glUmrateAmortizeDebit: {
        title: 'GL Umrate.Amor.Debit',
        type: 'string',
      },
      glUmrateAmortizeCredit: {
        title: 'GL Umrate.Amor.Credit',
        type: 'string',
      },
      glDeltaAmortizeDebit: {
        title: 'GL Delta.Amor.Debit',
        type: 'string',
      },
      glDeltaAmortizeCredit: {
        title: 'GL Delta.Amor.Credit',
        type: 'string',
      },
      glEclCollectiveDebit: {
        title: 'GL ECL.Coll.Debit',
        type: 'string',
      },
      glEclCollectiveCredit: {
        title: 'GL ECL.Coll.Credit',
        type: 'string',
      },
      glReversalEclCollectiveDebit: {
        title: 'GL.Rev ECL.Coll.Debit',
        type: 'string',
      },
      glReversalEclCollectiveCredit: {
        title: 'GL.Rev ECL.Coll.Credit',
        type: 'string',
      },
      glUnwindingCollectiveDebit: {
        title: 'GL Unw.Coll.Debit',
        type: 'string',
      },
      glUnwindingCollectiveCredit: {
        title: 'GL Unw.Coll.Credit',
        type: 'string',
      },
      glEclIndividualDebit: {
        title: 'GL ECL.Indv.Debit',
        type: 'string',
      },
      glEclIndividualCredit: {
        title: 'GL ECL.Indv.Credit',
        type: 'string',
      },
      glReversalEclIndividualDebit: {
        title: 'GL.Rev ECL.Indv.Debit',
        type: 'string',
      },
      glReversalEclIndividualCredit: {
        title: 'GL.Rev ECL.Indv.Credit',
        type: 'string',
      },
      glUnwindingIndividualDebit: {
        title: 'GL Unw.Indv.Debit',
        type: 'string',
      },
      glUnwindingIndividualCredit: {
        title: 'GL Unw.Indv.Credit',
        type: 'string',
      },
    },
  };

  getAllProduct(){
    const requestJson = {
      "offset": 0,
      "limit": 99999999,
      "keyword": {
        "_all": ""
      },
      "order": {
        "asc": [
          "productCode"
        ]
      }
    };
    this.api.post(this.api.urlBase+this.api.urlProduct+'/searchApprWaitingApproval', requestJson).subscribe((res: any) => {
      this.data =  res.data;
      this.sourceProduct.load(this.data);
    })
  }
  
  getAllLoanType(){
    this.api.get(this.api.urlBase+this.api.urlRefference+'/findAllLoanType').subscribe((res: any) => {
      this.loanTypes = res;
    })
  }
  
  getAllCoa(){
    this.api.get(this.api.urlBase+this.api.urlRefference+'/findAllCoa').subscribe((res: any) => {
      this.coas = res;
    })
  }

  getExcelData() {  
    this.api.postBlob(this.api.urlBase+this.api.urlProduct+'/download', null).subscribe((val) => {
      FileSaver.saveAs(val, 'Product.xlsx');
    });
  }

  actionEdit(event): void  {
    this.openFormDialog(event, 'Edit Product');
    this.formProduct.patchValue(event.data)
  }

  @ViewChild('dialog') dialogtemplate: TemplateRef<any>;
  openFormDialog(event, titleStr) {
    this.dialogTitle = titleStr;
    this.dialogRef = this.dialogService.open(
      this.dialogtemplate,
      {
        context: event,
        closeOnBackdropClick: false,
        closeOnEsc: false,
      });
  }

  closeFormDialog() {
    this.dialogRef.close();
  }
  
  onSubmit(saveAsType) {
    this.validation.getFormValidationInvalid(this.formProduct);
    if(this.formProduct){
      if(saveAsType==="approve" || saveAsType=="reject"){
        this.saveProduct(saveAsType);
      }
    }
  }

  resetForm(){
    this.formProduct.reset();
  }

  filterCoas(value: string): object[] {
    const filterValue = value.toLowerCase();
    return this.coas.filter(optionValue =>
      optionValue.glCode.toLowerCase().includes(filterValue) || optionValue.glName.toLowerCase().includes(filterValue)
    );
  }
  
  saveProduct(saveAsType){
    var requestJson = this.formProduct.value.productCode;
    this.api.post(this.api.urlBase+this.api.urlProduct+'/'+saveAsType, requestJson)
    .subscribe((res: any) => {
      this.validation.showToastSuccess('Success '+saveAsType+' product');
      this.resetForm();
      this.closeFormDialog();
      this.getAllProduct();
    },err => {
      this.validation.showToastFailed('Failed '+saveAsType+' product (response code '+err.status+') '+err.message);
    })
  }

}