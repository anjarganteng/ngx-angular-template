import { NgModule } from '@angular/core';
import { InquiryRoutingModule, routedComponents } from './inquiry-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    InquiryRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class InquiryModule { }
