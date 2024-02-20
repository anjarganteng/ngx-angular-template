import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { SchedulerComponent } from './_sigma/eod/scheduler/scheduler.component';
import { ReprocessComponent } from './_sigma/eod/reprocess/reprocess.component';
import { ManualComponent } from './_sigma/eod/manual/manual.component';
import { AccountInquiryComponent } from './_sigma/inquiry/account-inquiry/account-inquiry.component';
import { JournalInquiryComponent } from './_sigma/inquiry/journal-inquiry/journal-inquiry.component';
import { DownloadReportComponent } from './_sigma/inquiry/download-report/download-report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./_sigma/home/home.module')
        .then(m => m.HomeModule),
    },
    {
      path: 'settings/ie-material',
      loadChildren: () => import('./_sigma/settings/ie-material/ie-material.module')
        .then(m => m.IeMaterialModule),
    },
    {
      path: 'settings/product',
      loadChildren: () => import('./_sigma/settings/product/product.module')
        .then(m => m.ProductModule),
    },
    {
      path: 'pd/bucket',
      loadChildren: () => import('./_sigma/pd/bucket/pd-bucket.module')
        .then(m => m.PdBucketModule),
    },
    {
      path: 'pd/segment',
      loadChildren: () => import('./_sigma/pd/segment/pd-segment.module')
        .then(m => m.PdSegmentModule),
    },
    {
      path: 'pd/simulation',
      loadChildren: () => import('./_sigma/pd/simulation/pd-simulation.module')
        .then(m => m.PdSimulationModule),
    },
    {
      path: 'lgd/simulation',
      loadChildren: () => import('./_sigma/lgd/simulation/lgd-simulation.module')
        .then(m => m.LgdSimulationModule),
    },
    {
      path: 'ecl/simulation',
      loadChildren: () => import('./_sigma/ecl/simulation/ecl-simulation.module')
        .then(m => m.EclSimulationModule),
    },
    {
      path: 'transaction/individual-impairment',
      loadChildren: () => import('./_sigma/transaction/individual-impairment/individual-impairment.module')
        .then(m => m.IndividualImpairmentModule),
    },
    {
      path: 'transaction/exclusion-ecl',
      loadChildren: () => import('./_sigma/transaction/exclusion-ecl/exclusion-ecl.module')
        .then(m => m.ExclusionEclModule),
    },
    {
      path: 'eod',
      loadChildren: () => import('./_sigma/eod/eod.module')
        .then(m => m.EodModule),
    },
    {
      path: 'inquiry',
      loadChildren: () => import('./_sigma/inquiry/inquiry.module')
        .then(m => m.InquiryModule),
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'charts/echarts',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
