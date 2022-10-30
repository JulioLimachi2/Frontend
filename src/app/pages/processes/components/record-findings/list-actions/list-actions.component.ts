import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListActionsComponent implements OnInit {

  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area'];
  yearFilter: string;
  dataSource = [
    {
      type:'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática'
    },
    {
      type:'Oportunidad de mejora',
      correlative: '0008',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Jefatura'
    },
    {
      type:'Preventiva',
      correlative: '0009',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    if(this.yearFilter){
      console.log('yearFilter',this.yearFilter);
    }
  }

  getYear(year: string){
    this.yearFilter = year;
 }

}
