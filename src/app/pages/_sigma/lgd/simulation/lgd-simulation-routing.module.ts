import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgdSimulationComponent } from './lgd-simulation.component';
import { LgdSimulationListComponent } from './list/lgd-simulation-list.component';
import { LgdSimulationDraftComponent } from './draft/lgd-simulation-draft.component';
import { LgdSimulationApprovalComponent } from './approval/lgd-simulation-approval.component';

const routes: Routes = [{
  path: '',
  component: LgdSimulationComponent,
  children: [
    {
      path: 'list',
      component: LgdSimulationListComponent,
    },
    {
      path: 'draft',
      component: LgdSimulationDraftComponent,
    },
    {
      path: 'approval',
      component: LgdSimulationApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LgdSimulationRoutingModule { }

export const routedComponents = [
  LgdSimulationComponent,
  LgdSimulationListComponent,
  LgdSimulationDraftComponent,
  LgdSimulationApprovalComponent
];
