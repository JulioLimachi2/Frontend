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
  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area','state'];
  areas = [
    {
      id: '01',
      name: 'Gerencia de Informatica'
    }
  ];
  dataActions = [
    {
      type:'Preventiva',
      correlative: '0001',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Oportunidad de mejora',
      correlative: '0002',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Preventiva',
      correlative: '0003',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Oportunidad de mejora',
      correlative: '0004',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Preventiva',
      correlative: '0005',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Preventiva',
      correlative: '0006',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '01'
    },
    {
      type:'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      state: '02'
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
    this.dataSource.data = this.dataActions;
  }

  getYear(year: string) {
    this.formSearchActions.controls['year'].setValue(year);
  }

  search(){
    const filtrado = this.dataActions.filter(action => {
      const year = this.formSearchActions.value.year ? action.year === this.formSearchActions.value.year : 1;
      const state = this.formSearchActions.value.state ? action.state === this.formSearchActions.value.state : 1;
      const area = this.formSearchActions.value.area ? action.area.id === this.formSearchActions.value.area : 1;
      if(year === 1 && state === 1 && area === 1){
        return false
      }
      return year && state && area;
    });
    this.dataSource.data = filtrado;
  }

  next(){
    this.onNext.emit(true);
  }

}
