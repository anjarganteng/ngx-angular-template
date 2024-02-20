import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS, MENU_ITEMS2 } from './pages-menu';
import { ApiService } from '../services/api.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <span tenant-name>{{tenantName}}</span>
      <nb-menu [items]="menu" class="menu-item" autoCollapse="true"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

export class PagesComponent implements OnInit{
  constructor(
    private api: ApiService) {}

  menu = MENU_ITEMS;
  tenantName: any;
  // MENU_ITEMS_RES: NbMenuItem[];

  public async ngOnInit() {
    console.log('MENU DEFAULT = ', MENU_ITEMS);
    // this.tenantName = localStorage.getItem('tennantName');

    //SHOW BE MENU
    // await this.getAllMenu();

    // SHOW ALL MENU
    // this.menu = MENU_ITEMS; 
  }

  async getAllMenu(){
    let MENU_ITEMS_RES: NbMenuItem[] = [{
      title: 'Home',
      icon: {icon:'home-outline',options: {animation:{ type: 'shake' }}},
      link: '/home'
    }];
    let response = await this.api.postAsync(this.api.urlBase+this.api.urlMenu+'/getApplicationMenus', null);
    MENU_ITEMS_RES = MENU_ITEMS_RES.concat(response.menus).concat({title: 'PAGE MENU FEATURES',group: true,});      
    this.setParents(MENU_ITEMS_RES);
    this.menu = MENU_ITEMS_RES;
    this.tenantName = response.tennantName;
    // localStorage.setItem('tennantName', response.tennantName);
    console.log('res tennantName: ', this.tenantName);
    console.log('res menus: ', this.menu);
    // })
  }

  private setParents(items: NbMenuItem[]){
    for(let i=0; i<items.length; i++){
      this.setParent(items[i]);  
    }
  }

  private setParent(item: NbMenuItem) {
    item.children && item.children.forEach(child => {
      child.parent = item;
      this.setParent(child);
    });
  }

}
