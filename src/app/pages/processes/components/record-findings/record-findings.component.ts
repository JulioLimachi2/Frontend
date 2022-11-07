import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-record-findings',
  templateUrl: './record-findings.component.html',
  styleUrls: ['./record-findings.component.scss']
})
export class RecordFindingsComponent implements OnInit {

  tabIndex: number = 0;
  listAction:any = [];
  changecount: number = 0;
  constructor() { }

 

  ngOnInit(): void {
  }

  getRow(data){
    this.changecount ++;
    this.listAction = {action:data.row,index:data.index};
    this.tabIndex = 1;
  }

  saveAction(state){
    state && (this.tabIndex = 0);
    this.changecount ++;
    this.listAction = null;
  }

  onTabChanged(tab){
    if(tab.index === 0){
      this.changecount ++;
      this.listAction = null;
    }
  }

}
