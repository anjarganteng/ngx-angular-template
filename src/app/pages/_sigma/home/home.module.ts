import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    HomeRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
  declarations: [
    routedComponents
  ],
})
export class HomeModule { }
