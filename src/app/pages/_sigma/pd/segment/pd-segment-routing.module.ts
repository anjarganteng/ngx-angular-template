import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdSegmentComponent } from './pd-segment.component';
import { PdSegmentListComponent } from './list/pd-segment-list.component';
import { PdSegmentDraftComponent } from './draft/pd-segment-draft.component';
import { PdSegmentApprovalComponent } from './approval/pd-segment-approval.component';

const routes: Routes = [{
  path: '',
  component: PdSegmentComponent,
  children: [
    {
      path: 'list',
      component: PdSegmentListComponent,
    },
    {
      path: 'draft',
      component: PdSegmentDraftComponent,
    },
    {
      path: 'approval',
      component: PdSegmentApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdSegmentRoutingModule { }

export const routedComponents = [
  PdSegmentComponent,
  PdSegmentListComponent,
  PdSegmentDraftComponent,
  PdSegmentApprovalComponent
];
