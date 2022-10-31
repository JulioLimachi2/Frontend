import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListActionsComponent implements OnInit {

  displayedColumns: string[] = ['type', 'correlative', 'year', 'coordinator', 'area'];
  yearFilter: string;
  dataSource = new MatTableDataSource();
  dataHallazgos = [
    {
      type: 'Preventiva',
      correlative: '0007',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática'
    },
    {
      type: 'Preventiva',
      correlative: '0008',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Jefatura'
    },
    {
      type: 'Preventiva',
      correlative: '0009',
      year: '2015',
      coordinator: 'Llanos Barrios Patricia',
      area: 'Gerencia de Informática'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.dataHallazgos;
  }

  search() {
    console.log('rar00');
    if (this.yearFilter) {
      const resultSearch = this.dataHallazgos.filter(hallazgo => {
        return hallazgo.year === this.yearFilter
      });
      this.dataSource.data = resultSearch;
    }
  }

  getYear(year: string) {
    this.yearFilter = year;
  }

}
