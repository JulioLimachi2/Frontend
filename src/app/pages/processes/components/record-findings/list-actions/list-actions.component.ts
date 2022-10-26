import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListActionsComponent implements OnInit {

  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area'];
  dataSource = [
    {
      type:'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática'
    },
    {
      type:'Preventiva',
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

  }

}
