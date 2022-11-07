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
  listShare:any = [];
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
    this.listShare = {share:data.row,index:data.index};
    this.indexTab = 1;
  }

  saveShare(state){
    state && (this.indexTab = 0);
    this.changecount ++;
    this.listShare = null;
  }

  onTabChanged(tab){
    if(tab.index === 0){
      this.changecount ++;
      this.listShare = null;
    }
  }
}
