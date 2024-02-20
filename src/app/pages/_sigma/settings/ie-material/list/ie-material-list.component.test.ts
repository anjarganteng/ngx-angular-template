import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IeMaterialListComponent } from './ie-material-list.component';
import { ApiService } from '../../../../../services/api.service';
import { SmartTableData } from '../../../../../@core/data/smart-table';
import { NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { of } from 'rxjs';

describe('IeMaterialListComponent', () => {
  let component: IeMaterialListComponent;
  let fixture: ComponentFixture<IeMaterialListComponent>;
  let apiService: ApiService;
  let toastrService: NbToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IeMaterialListComponent],
      providers: [
        { provide: ApiService, useValue: { post: () => of({}) } },
        { provide: SmartTableData, useValue: {} },
        { provide: NbToastrService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeMaterialListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    toastrService = TestBed.inject(NbToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle view', () => {
    component.toggleView();
    expect(component.flipped).toBe(true);
    component.toggleView();
    expect(component.flipped).toBe(false);
  });

  it('should load data on initialization', () => {
    const getAllProductSpy = spyOn(component, 'getAllProduct');
    component.ngOnInit();
    expect(getAllProductSpy).toHaveBeenCalled();
  });

  it('should load all products', () => {
    const mockData = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    spyOn(apiService, 'post').and.returnValue(of({ data: mockData }));
    component.getAllProduct();
    expect(apiService.post).toHaveBeenCalledWith('/trxYearIeMaterial/v1/search', {
      offset: 0,
      limit: 99999999,
      keyword: { _all: '' },
      order: { asc: ['yearIE'] },
    });
    expect(component.data).toEqual(mockData);
    expect(component.source.load).toHaveBeenCalledWith(mockData);
  });

  it('should create a new product', () => {
    const event = {
      newData: {
        yearIE: '2022',
        maxAccumulatedIncomeAmount: '1000',
        maxIndividualIncomeAmount: true,
        currentAccumulatedIncomeAmount: '500',
        maxAccumulatedExpenseAmount: '800',
        maxIndividualExpenseAmount: '600',
        currentAccumulatedExpenseAmount: '400',
      },
      confirm: { resolve: jasmine.createSpy(), reject: jasmine.createSpy() },
    };
    spyOn(apiService, 'post').and.returnValue(of({}));
    spyOn(toastrService, 'success');
    component.onCreateConfirm(event);
    expect(apiService.post).toHaveBeenCalledWith('/trxYearIeMaterial/v1/saveAsDraft', {
      yearIE: '2022',
      versionNo: 0,
      maxAccumulatedIncomeAmount: '1000',
      maxIndividualIncomeAmount: true,
      currentAccumulatedIncomeAmount: '500',
      maxAccumulatedExpenseAmount: '800',
      maxIndividualExpenseAmount: '600',
      currentAccumulatedExpenseAmount: '400',
      createdDate: 0,
      createdBy: 'string',
      modifiedDate: 0,
      modifiedBy: 'string',
      statusApproval: 0,
    });
    expect(event.confirm.resolve).toHaveBeenCalled();
    expect(toastrService.success).toHaveBeenCalledWith('Data has been saved as draft, check draft to send to approver', 'Success');
    expect(component.getAllProduct).toHaveBeenCalled();
  });

  it('should handle error when creating a new product', () => {
    const event = {
      newData: {
        yearIE: '2022',
        maxAccumulatedIncomeAmount: '1000',
        maxIndividualIncomeAmount: true,
        currentAccumulatedIncomeAmount: '500',
        maxAccumulatedExpenseAmount: '800',
        maxIndividualExpenseAmount: '600',
        currentAccumulatedExpenseAmount: '400',
      },
      confirm: { resolve: jasmine.createSpy(), reject: jasmine.createSpy() },
    };
    spyOn(apiService, 'post').and.returnValue(throwError('Error'));
    spyOn(toastrService, 'danger');
    component.onCreateConfirm(event);
    expect(apiService.post).toHaveBeenCalledWith('/trxYearIeMaterial/v1/saveAsDraft', {
      yearIE: '2022',
      versionNo: 0,
      maxAccumulatedIncomeAmount: '1000',
      maxIndividualIncomeAmount: true,
      currentAccumulatedIncomeAmount: '500',
      maxAccumulatedExpenseAmount: '800',
      maxIndividualExpenseAmount: '600',
      currentAccumulatedExpenseAmount: '400',
      createdDate: 0,
      createdBy: 'string',
      modifiedDate: 0,
      modifiedBy: 'string',
      statusApproval: 0,
    });
    expect(event.confirm.reject).toHaveBeenCalled();
    expect(toastrService.danger).toHaveBeenCalledWith('Data failed to save as draft', 'Error');
  });

  it('should confirm deletion', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const event = { confirm: { resolve: jasmine.createSpy(), reject: jasmine.createSpy() } };
    component.onDeleteConfirm(event);
    expect(event.confirm.resolve).toHaveBeenCalled();
  });

  it('should cancel deletion', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const event = { confirm: { resolve: jasmine.createSpy(), reject: jasmine.createSpy() } };
    component.onDeleteConfirm(event);
    expect(event.confirm.reject).toHaveBeenCalled();
  });

  it('should handle edit confirmation', () => {
    const event = { newData: { yearIE: '2022' } };
    component.onEditConfirm(event);
    expect(event.confirm.resolve).toHaveBeenCalled();
  });
});
