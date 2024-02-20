import { NgModule } from '@angular/core';
import { EodRoutingModule, routedComponents } from './eod-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    EodRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class EodModule { }
