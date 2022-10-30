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

}
