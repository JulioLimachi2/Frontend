import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-actions-share',
  templateUrl: './list-actions-share.component.html',
  styleUrls: ['./list-actions-share.component.scss']
})
export class ListActionsShareComponent implements OnInit {

  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area'];
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        type:'Preventiva',
        correlative: '0001',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0002',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0003',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0004',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0005',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0006',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      },
      {
        type:'Preventiva',
        correlative: '0007',
        year: '2015',
        coordinator: 'Llanos Barrios Patricia',
        area: 'Gerencia de Informática'
      }
    ];
  }

  getYear(year: string) {
    console.log('year', year);
  }

  next(){
    this.onNext.emit(true);
  }

  search(){
    
  }

}
