import { NgModule } from '@angular/core';
import { PdSimulationRoutingModule, routedComponents } from './pd-simulation-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    PdSimulationRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class PdSimulationModule { }
