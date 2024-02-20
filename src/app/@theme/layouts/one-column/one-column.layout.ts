import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header [(getIsShowAccordion)]="isShowAccordion"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <div [hidden]="isShowAccordion" class="accordion-container">
          <nb-accordion class="sidebar-accordion">
            <nb-accordion-item #item>
              <nb-accordion-item-header>
              <ng-content select="[tenant-name]"></ng-content>
              </nb-accordion-item-header>
              <nb-accordion-item-body>
                {{firstname}} {{lastname}}<br>
                <form class="form-accordion">
                  <div class="form-group row label-accordion">
                    <label class="label col-sm-4 col-form-label label-accordion">Branch</label>
                    <label class="label col-sm-8 col-form-label label-accordion">: {{branchCode}}</label>
                  </div>
                  <div class="form-group row label-accordion">
                    <label class="label col-sm-4 col-form-label label-accordion">Role</label>
                    <label class="label col-sm-8 col-form-label label-accordion">: {{role}}</label>
                  </div>
                  <div class="form-group row label-accordion">
                    <label class="label col-sm-4 col-form-label label-accordion">Username</label>
                    <label class="label col-sm-8 col-form-label label-accordion">: {{username}}</label>
                  </div>
                  <div class="form-group row label-accordion">
                    <label class="label col-sm-4 col-form-label label-accordion">Email</label>
                    <label class="label col-sm-8 col-form-label label-accordion">: {{email}}</label>
                  </div>
                  <div class="form-group row label-accordion">
                    <label class="label col-sm-4 col-form-label label-accordion">Last Login</label>
                    <label class="label col-sm-8 col-form-label label-accordion">: {{lastLogin}}</label>
                  </div>
                </form>
              </nb-accordion-item-body>
            </nb-accordion-item>
          </nb-accordion>
        </div>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer class="ngx-footer"></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  isShowAccordion = false;
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  username = localStorage.getItem('username');
  email = localStorage.getItem('email');
  emailVerified = localStorage.getItem('emailVerified');
  lastLogin = localStorage.getItem('lastLogin');
  branchCode = localStorage.getItem('branchCode');
  role = localStorage.getItem('role');
}
