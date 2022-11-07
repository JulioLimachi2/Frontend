import { Component, OnInit, EventEmitter,Input ,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActionAuthorizationService } from 'src/app/core/services/action-authorization.service';

@Component({
  selector: 'app-list-actions-authorization',
  templateUrl: './list-actions-authorization.component.html',
  styleUrls: ['./list-actions-authorization.component.scss']
})
export class ListActionsAuthorizationComponent implements OnInit {

  formSearchActions: FormGroup;
  dateYear: string;
  changeCountYear: number = 0;
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area','state','source', 'requirement', 'state', 'dateIssue', 'descriptionNC', 'reasonNonApproval', 'dateShipment', 'responsibleUO','return'];
  areas = [
    {
      id: '01',
      name: 'Gerencia de Informatica'
    }
  ];
  dataActions = [
    {
      id: 1,
      type:'Preventiva',
      correlative: '0001',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    },
    {
      id: 2,
      type:'Oportunidad de mejora',
      correlative: '0002',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    },
    {
      id: 3,
      type:'Preventiva',
      correlative: '0003',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    },
    {
      id: 4,
      type:'Oportunidad de mejora',
      correlative: '0004',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    },
    {
      id: 5,
      type:'Preventiva',
      correlative: '0005',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    },
    {
      id: 6,
      type:'Preventiva',
      correlative: '0006',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: true
    },
    {
      id: 7,
      type:'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: {
        id:'01',
        name: 'Gerencia de Informática'
      },
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando',
      return: false
    }
  ];

  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder,
    private serviceauthorization: ActionAuthorizationService) {
    this.formSearchActions = this.builder.group({
      year: [],
      state: [],
      area: []
    });
  }

  ngOnInit(): void {
    this.dataSource.data = this.dataActions;
    this.serviceauthorization.getAuthorizationg().subscribe(authorization => {
      authorization && (this.dataSource.data = this.dataActions);
      if (authorization?.index === null || authorization?.index === undefined && authorization.authorization) {
        authorization.authorization.id = this.dataActions[this.dataActions.length-1].id + 1;
        this.dataActions.push(authorization.authorization);
        this.dataSource.data = this.dataActions;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
      if (authorization?.index >=0) {
        const authorizationIndex = this.dataActions.findIndex((x: any) => x.id === authorization.authorization.id);
        this.dataActions[authorizationIndex] = authorization.authorization;
        this.dataSource.data = this.dataActions;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
    });
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
    this.formSearchActions.reset();
    this.changeCountYear++;
    this.dateYear = null;
  }

  next(){
    this.onNext.emit(true);
  }

  selectedRow(index: number) {
    this.onSelectRow.emit({ row: this.dataSource.data[index], index: index });
    this.dataSource.data = this.dataActions;
  }
}
