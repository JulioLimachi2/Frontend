import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShareService } from 'src/app/core/services/share.service';

@Component({
  selector: 'app-list-actions-share',
  templateUrl: './list-actions-share.component.html',
  styleUrls: ['./list-actions-share.component.scss']
})
export class ListActionsShareComponent implements OnInit {

  dateYear: string;
  changeCountYear: number = 0;
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator','area','state','source', 'requirement', 'dateIssue', 'descriptionNC', 'reasonNonApproval', 'dateShipment', 'responsibleUO','return'];
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  @Output() onNextDisabled: EventEmitter<boolean> = new EventEmitter();
  dataSource = new MatTableDataSource<any>([]);
  yearFilter: string;
  dataShare = [
    {
      id: 1,
      type:'Preventiva',
      correlative: '0001',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática',
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
      type:'Preventiva',
      correlative: '0002',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática',
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
      area: 'Gerencia de Informática',
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
      type:'Preventiva',
      correlative: '0004',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática',
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
      area: 'Gerencia de Informática',
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
      area: 'Gerencia de Informática',
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
      id: 7,
      type:'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática',
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

  constructor(private serviceshare: ShareService) { }

  ngOnInit(): void {
    this.dataSource.data = this.dataShare;
    this.serviceshare.getShare().subscribe(date => {
      date && (this.dataSource.data = this.dataShare);
      if (date?.index === null || date?.index === undefined && date.share) {
        date.share.id = this.dataShare[this.dataShare.length-1].id + 1;
        this.dataShare.push(date.share);
        this.dataSource.data = this.dataShare;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.onNextDisabled.emit(false);
      }
      if (date?.index >=0) {
        const authorizationIndex = this.dataShare.findIndex((x: any) => x.id === date.share.id);
        this.dataShare[authorizationIndex] = date.share;
        this.dataSource.data = this.dataShare;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
    });
  }

  getYear(year: string) {
    this.yearFilter = year;
  }

  next(){
    this.onNext.emit(true);
  }

  search(){
    if (this.yearFilter) {
      const resultSearch = this.dataShare.filter(search => {
        return search.year === this.yearFilter
      });
      this.dataSource.data = resultSearch;
      this.changeCountYear++;
      this.dateYear = null;
    }
  }

  selectedRow(index: number) {
    this.onSelectRow.emit({ row: this.dataSource.data[index], index: index });
    this.dataSource.data = this.dataShare;
  }

}
