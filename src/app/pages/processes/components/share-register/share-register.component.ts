import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-register',
  templateUrl: './share-register.component.html',
  styleUrls: ['./share-register.component.scss']
})
export class ShareRegisterComponent implements OnInit {

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
