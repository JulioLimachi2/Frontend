import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'state'];
  dataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code:'ACA',
        name: 'ARCHIVO CENTRAL ADMINISTRATIVO',
        state: true
      },
      {
        code:'CCA',
        name: 'COORDINACION DE CALIDAD',
        state: true
      },
      {
        code:'CDMP',
        name: 'COORDINACION DE DIARIO Y MESA DE PARTES',
        state: true
      },
      {
        code:'CLS',
        name: 'COORDINACION DE LOGISTICA Y SERVIDORES',
        state: true
      },
      {
        code:'DUS',
        name: 'DEFENSORIA DEL USUARIO',
        state: true
      },
      {
        code:'GPJN',
        name: 'GERENCIA DE PERSONAS JURIDICAS Y NATURALES',
        state: true
      }
    ];
  }

}
