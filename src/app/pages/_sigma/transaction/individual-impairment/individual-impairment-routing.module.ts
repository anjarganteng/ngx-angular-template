import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualImpairmentComponent } from './individual-impairment.component';
import { IndividualImpairmentListComponent } from './list/individual-impairment-list.component';
import { IndividualImpairmentDraftComponent } from './draft/individual-impairment-draft.component';
import { IndividualImpairmentApprovalComponent } from './approval/individual-impairment-approval.component';

const routes: Routes = [{
  path: '',
  component: IndividualImpairmentComponent,
  children: [
    {
      path: 'list',
      component: IndividualImpairmentListComponent,
    },
    {
      path: 'draft',
      component: IndividualImpairmentDraftComponent,
    },
    {
      path: 'approval',
      component: IndividualImpairmentApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualImpairmentRoutingModule { }

export const routedComponents = [
  IndividualImpairmentComponent,
  IndividualImpairmentListComponent,
  IndividualImpairmentDraftComponent,
  IndividualImpairmentApprovalComponent
];
