import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-action-plan-share',
  templateUrl: './action-plan-share.component.html',
  styleUrls: ['./action-plan-share.component.scss']
})
export class ActionPlanShareComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'activities', 'area', 'datestart','dateend'];
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        nro:'001',
        activities: 'Actividad 1-2',
        area: 'Tesorería',
        datestart: '10/07/2022',
        dateend: '10/08/2022'
      },
      {
        nro:'002',
        activities: 'Actividad 2-2',
        area: 'Tesorería',
        datestart: '12/08/2022',
        dateend: '15/08/2022'
      },
    ];
  }

  next(){
    this.onNext.emit(true);
  }

}
