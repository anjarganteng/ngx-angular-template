import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';
import { NbMenuService } from '@nebular/theme';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public isLogin = false;
  public profilUser: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService, private analytics: AnalyticsService
    , private seoService: SeoService, private menuService: NbMenuService) {}

  public async ngOnInit() {
    this.isLogin = await this.keycloak.isLoggedIn();
    type roleUser = Array<{id: number, text: String}>;

    if(this.isLogin){
      this.profilUser = await this.keycloak.loadUserProfile();
      await this.keycloak.getToken().then(token => {
        console.log('token', token);
        //SAVE TO LOCAL STORAGE
        // window.localStorage.clear();
        localStorage.setItem('token', token);
        localStorage.setItem('username', this.profilUser.username);
        localStorage.setItem('firstname', this.profilUser.firstName);
        localStorage.setItem('lastname', this.profilUser.lastName);
        localStorage.setItem('email', this.profilUser.email);
        localStorage.setItem('emailVerified', this.profilUser.emailVerified?'Success':'Not yet');
        localStorage.setItem('lastLogin', new Date().toLocaleString('ID', { hour12: false }));
        localStorage.setItem('branchCode', this.profilUser['attributes'].branchCode);
        localStorage.setItem('tennantId', this.profilUser['attributes'].tennantId);
        localStorage.setItem('role', this.keycloak.getKeycloakInstance().realmAccess.roles[1]);

      });
    }

    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }

  public initiateSession(){
    this.keycloak.login();
  }

  public clearSession(){
    window.localStorage.clear();
    this.keycloak.logout();
  }
  
  onContecxtItemSelection(title) {
    console.log('click menu extras -> ', title);
    if(title == 'Log out'){
      this.clearSession();
    }
  }

}
