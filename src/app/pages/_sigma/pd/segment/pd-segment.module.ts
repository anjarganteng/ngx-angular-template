import { NgModule } from '@angular/core';
import { PdSegmentRoutingModule, routedComponents } from './pd-segment-routing.module';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../../@theme/theme.module';
// import { ActionsComponent } from './approval/action/action.component';

@NgModule({
  imports: [
    ThemeModule,
    PdSegmentRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbTooltipModule,
    NbDialogModule
  ],
  declarations: [
    routedComponents
  ],
})
export class PdSegmentModule { }
