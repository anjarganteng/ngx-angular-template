import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdBucketComponent } from './pd-bucket.component';
import { PdBucketListComponent } from './list/pd-bucket-list.component';
import { PdBucketDraftComponent } from './draft/pd-bucket-draft.component';
import { PdBucketApprovalComponent } from './approval/pd-bucket-approval.component';

const routes: Routes = [{
  path: '',
  component: PdBucketComponent,
  children: [
    {
      path: 'list',
      component: PdBucketListComponent,
    },
    {
      path: 'draft',
      component: PdBucketDraftComponent,
    },
    {
      path: 'approval',
      component: PdBucketApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdBucketRoutingModule { }

export const routedComponents = [
  PdBucketComponent,
  PdBucketListComponent,
  PdBucketDraftComponent,
  PdBucketApprovalComponent
];
