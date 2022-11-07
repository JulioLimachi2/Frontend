import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization-register',
  templateUrl: './authorization-register.component.html',
  styleUrls: ['./authorization-register.component.scss']
})
export class AuthorizationRegisterComponent implements OnInit {

  indexTab: number = 0;
  tabsNavegated = new Set();
  totalTabs = [];
  listAuthorization:any = [];
  changecount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(state: boolean){
    if(state){
      this.indexTab ++;
      this.tabsNavegated.add(this.indexTab);
    }
    const tabs = [...this.tabsNavegated];
    this.totalTabs = tabs;
  }

  getRow(data){
    this.changecount ++;
    this.listAuthorization = {authorization:data.row,index:data.index};
    this.indexTab = 1;
  }

  saveAuthorization(state){
    state && (this.indexTab = 0);
    this.changecount ++;
    this.listAuthorization = null;
  }

  onTabChanged(tab){
    if(tab.index === 0){
      this.changecount ++;
      this.listAuthorization = null;
    }
  }

}
