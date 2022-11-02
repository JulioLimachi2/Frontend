import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-tables',
  templateUrl: './report-tables.component.html',
  styleUrls: ['./report-tables.component.scss']
})
export class ReportTablesComponent implements OnInit {

  @Input() dataReport:any;
  months = [
    {
      name: 'Enero'
    },
    {
      name: 'Febrero'
    },
    {
      name: 'Marzo'
    },
    {
      name: 'Abril'
    },
    {
      name: 'Mayo'
    },
    {
      name: 'Junio'
    },
    {
      name: 'Julio'
    },
    {
      name: 'Agosto'
    },
    {
      name: 'Septiembre'
    },
    {
      name: 'Octubre'
    },
    {
      name: 'Noviembre'
    },
    {
      name: 'Diciembre'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
