import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FindingsService } from 'src/app/core/services/findings.service';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListActionsComponent implements OnInit {

  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator', 'area', 'source', 'requirement', 'state', 'dateIssue', 'descriptionNC', 'reasonNonApproval', 'dateShipment', 'responsibleUO'];
  yearFilter: string;
  dateYear: string;
  changeCountYear: number = 0;
  dataSource = new MatTableDataSource();
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter();
  dataHallazgos = [
    {
      id: 1,
      type: 'Preventiva',
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
      responsibleUO: 'Li Loo Francisco Fernando'
    },
    {
      id: 2,
      type: 'Preventiva',
      correlative: '0008',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Jefatura',
      source: 'Hallazgos del personal',
      requirement: '7.5',
      state: '01',
      dateIssue: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      descriptionNC: 'Se hacen las correcciones de la devolución',
      reasonNonApproval: '',
      dateShipment: 'Wed Nov 17 2015 13:49:15 GMT-0500 (hora estándar de Perú)',
      responsibleUO: 'Li Loo Francisco Fernando'
    },
    {
      id: 3,
      type: 'Preventiva',
      correlative: '0009',
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
      responsibleUO: 'Li Loo Francisco Fernando'
    }
  ];

  constructor(private findingservice: FindingsService) { }

  ngOnInit(): void {
    this.dataSource.data = this.dataHallazgos;
    this.findingservice.getFinding().subscribe(finding => {
      finding && (this.dataSource.data = this.dataHallazgos);
      if (finding?.index === null || finding?.index === undefined && finding.action) {
        finding.action.id = this.dataHallazgos[this.dataHallazgos.length - 1].id + 1;
        this.dataHallazgos.push(finding.action);
        this.dataSource.data = this.dataHallazgos;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
      if (finding?.index >=0) {
        const findingIndex = this.dataHallazgos.findIndex((x: any) => x.id === finding.action.id);
        this.dataHallazgos[findingIndex] = finding.action;
        this.dataSource.data = this.dataHallazgos;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
    });
  }

  search() {
    console.log('rar00');
    if (this.yearFilter) {
      const resultSearch = this.dataHallazgos.filter(hallazgo => {
        return hallazgo.year === this.yearFilter
      });
      this.dataSource.data = resultSearch;
    }
    this.dateYear = null
    this.changeCountYear++;
  }

  getYear(year: string) {
    this.yearFilter = year;
  }

  selectedRow(index: number) {
    this.onSelectRow.emit({ row: this.dataSource.data[index], index: index });
    this.dataSource.data = this.dataHallazgos;
  }

}
