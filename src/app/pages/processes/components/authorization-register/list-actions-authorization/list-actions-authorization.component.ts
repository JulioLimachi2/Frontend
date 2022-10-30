import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-actions-authorization',
  templateUrl: './list-actions-authorization.component.html',
  styleUrls: ['./list-actions-authorization.component.scss']
})
export class ListActionsAuthorizationComponent implements OnInit {

  formSearchActions: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area'];
  areas = [
    {
      id: '01',
      name: 'Gerencia de Informatica'
    }
  ];

  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder) {
    this.formSearchActions = this.builder.group({
      year: [],
      state: [],
      area: []
    });
  }

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
        type:'Oportunidad de mejora',
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
        type:'Oportunidad de mejora',
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

  search(){
    
  }

  next(){
    this.onNext.emit(true);
  }

}
