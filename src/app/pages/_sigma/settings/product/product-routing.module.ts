import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductDraftComponent } from './draft/product-draft.component';
import { ProductApprovalComponent } from './approval/product-approval.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [
    {
      path: 'list',
      component: ProductListComponent,
    },
    {
      path: 'draft',
      component: ProductDraftComponent,
    },
    {
      path: 'approval',
      component: ProductApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedComponents = [
  ProductComponent,
  ProductListComponent,
  ProductDraftComponent,
  ProductApprovalComponent
];
