import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-returned',
  templateUrl: './returned.component.html',
  styleUrls: ['./returned.component.scss']
})
export class ReturnedComponent implements OnInit {

  displayedColumns: string[] = ['period', 'officeIndicator', 'areaIndicator','name','valorIndicator','metaIndicator','bossUO','cca'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        period:'Enero 2018',
        officeIndicator: 'San Borja',
        areaIndicator: 'Tesoreria',
        name: '% de productos no conformes del servicio de Copia informativa ISO de Partida Registral',
        valorIndicator: '0.17',
        metaIndicator: '<=1%',
        bossUO: true,
        cca: false
      }
    ]
  }

}
