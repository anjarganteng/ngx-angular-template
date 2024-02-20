import { NgModule } from '@angular/core';
import { EclSimulationRoutingModule, routedComponents } from './ecl-simulation-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    EclSimulationRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class EclSimulationModule { }
