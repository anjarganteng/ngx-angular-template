import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IeMaterialComponent } from './ie-material.component';
import { IeMaterialListComponent } from './list/ie-material-list.component';
import { IeMaterialDraftComponent } from './draft/ie-material-draft.component';
import { IeMaterialApprovalComponent } from './approval/ie-material-approval.component';

const routes: Routes = [{
  path: '',
  component: IeMaterialComponent,
  children: [
    {
      path: 'list',
      component: IeMaterialListComponent,
    },
    {
      path: 'draft',
      component: IeMaterialDraftComponent,
    },
    {
      path: 'approval',
      component: IeMaterialApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IeMaterialRoutingModule { }

export const routedComponents = [
  IeMaterialComponent,
  IeMaterialListComponent,
  IeMaterialDraftComponent,
  IeMaterialApprovalComponent
];
