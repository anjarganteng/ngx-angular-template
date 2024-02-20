import { NgModule } from '@angular/core';
import { LgdSimulationRoutingModule, routedComponents } from './lgd-simulation-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    LgdSimulationRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class LgdSimulationModule { }
