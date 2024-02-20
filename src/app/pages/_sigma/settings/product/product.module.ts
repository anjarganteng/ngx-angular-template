import { NgModule } from '@angular/core';
import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    ProductRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbAutocompleteModule,
    NbCheckboxModule
  ],
  declarations: [
    routedComponents
  ],
})
export class ProductModule { }
