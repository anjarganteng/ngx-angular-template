import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EodComponent } from './eod.component';
import { ManualComponent } from './manual/manual.component';
import { ReprocessComponent } from './reprocess/reprocess.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [{
  path: '',
  component: EodComponent,
  children: [
    {
      path: 'manual',
      component: ManualComponent,
    },
    {
      path: 'reprocess',
      component: ReprocessComponent,
    },
    {
      path: 'scheduler',
      component: SchedulerComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EodRoutingModule { }

export const routedComponents = [
  EodComponent,
  ManualComponent,
  ReprocessComponent,
  SchedulerComponent
];
