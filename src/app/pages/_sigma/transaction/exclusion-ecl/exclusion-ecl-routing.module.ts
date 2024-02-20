import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExclusionEclComponent } from './exclusion-ecl.component';
import { ExclusionEclListComponent } from './list/exclusion-ecl-list.component';
import { ExclusionEclDraftComponent } from './draft/exclusion-ecl-draft.component';
import { ExclusionEclApprovalComponent } from './approval/exclusion-ecl-approval.component';

const routes: Routes = [{
  path: '',
  component: ExclusionEclComponent,
  children: [
    {
      path: 'list',
      component: ExclusionEclListComponent,
    },
    {
      path: 'draft',
      component: ExclusionEclDraftComponent,
    },
    {
      path: 'approval',
      component: ExclusionEclApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExclusionEclRoutingModule { }

export const routedComponents = [
  ExclusionEclComponent,
  ExclusionEclListComponent,
  ExclusionEclDraftComponent,
  ExclusionEclApprovalComponent
];
