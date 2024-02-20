import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryComponent } from './inquiry.component';
import { AccountInquiryComponent } from './account-inquiry/account-inquiry.component';
import { JournalInquiryComponent } from './journal-inquiry/journal-inquiry.component';
import { DownloadReportComponent } from './download-report/download-report.component';

const routes: Routes = [{
  path: '',
  component: InquiryComponent,
  children: [
    {
      path: 'account-inquiry',
      component: AccountInquiryComponent,
    },
    {
      path: 'journal-inquiry',
      component: JournalInquiryComponent,
    },
    {
      path: 'download-report',
      component: DownloadReportComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiryRoutingModule { }

export const routedComponents = [
  InquiryComponent,
  AccountInquiryComponent,
  JournalInquiryComponent,
  DownloadReportComponent
];
