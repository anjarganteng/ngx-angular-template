import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdSimulationComponent } from './pd-simulation.component';
import { PdSimulationListComponent } from './list/pd-simulation-list.component';
import { PdSimulationDraftComponent } from './draft/pd-simulation-draft.component';
import { PdSimulationApprovalComponent } from './approval/pd-simulation-approval.component';

const routes: Routes = [{
  path: '',
  component: PdSimulationComponent,
  children: [
    {
      path: 'list',
      component: PdSimulationListComponent,
    },
    {
      path: 'draft',
      component: PdSimulationDraftComponent,
    },
    {
      path: 'approval',
      component: PdSimulationApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdSimulationRoutingModule { }

export const routedComponents = [
  PdSimulationComponent,
  PdSimulationListComponent,
  PdSimulationDraftComponent,
  PdSimulationApprovalComponent
];
