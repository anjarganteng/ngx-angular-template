import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EclSimulationComponent } from './ecl-simulation.component';
import { EclSimulationListComponent } from './list/ecl-simulation-list.component';
import { EclSimulationDraftComponent } from './draft/ecl-simulation-draft.component';
import { EclSimulationApprovalComponent } from './approval/ecl-simulation-approval.component';

const routes: Routes = [{
  path: '',
  component: EclSimulationComponent,
  children: [
    {
      path: 'list',
      component: EclSimulationListComponent,
    },
    {
      path: 'draft',
      component: EclSimulationDraftComponent,
    },
    {
      path: 'approval',
      component: EclSimulationApprovalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EclSimulationRoutingModule { }

export const routedComponents = [
  EclSimulationComponent,
  EclSimulationListComponent,
  EclSimulationDraftComponent,
  EclSimulationApprovalComponent
];
