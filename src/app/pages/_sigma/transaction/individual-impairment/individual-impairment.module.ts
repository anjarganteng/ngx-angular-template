import { NgModule } from '@angular/core';
import { IndividualImpairmentRoutingModule, routedComponents } from './individual-impairment-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    IndividualImpairmentRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class IndividualImpairmentModule { }
