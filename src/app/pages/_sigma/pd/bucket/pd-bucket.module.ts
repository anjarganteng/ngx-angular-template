import { NgModule } from '@angular/core';
import { PdBucketRoutingModule, routedComponents } from './pd-bucket-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    PdBucketRoutingModule,
    NbCardModule
  ],
  declarations: [
    routedComponents
  ],
})
export class PdBucketModule { }
