import { NgModule } from '@angular/core';
import { IeMaterialRoutingModule, routedComponents } from './ie-material-routing.module';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ActionsComponent } from './approval/action/action.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AddOptionComponent } from './add-option/add-option.component';

@NgModule({
  imports: [
    ThemeModule,
    IeMaterialRoutingModule,
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
    routedComponents,
    ActionsComponent,
    ConfirmationDialogComponent,
    AddOptionComponent
  ],
  entryComponents: [
    ActionsComponent
  ]
})
export class IeMaterialModule { }
