import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRiskComponent } from './modal-risk/modal-risk.component';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {

  reset: number = 0;
  indexSelected: number = null;
  dataSource = [
    {color: '#FF0000', categoria: '17 a mas',categoria2: 'Extremo' },
    { color: '#ff8000',categoria: 'Entre 11 y 16',categoria2: 'Alto'},
    { color: '#ffff00',categoria: 'Entre 5 y 10',categoria2: 'Medio' },
    { color: '#B2D13F',categoria: 'Entre 3 y 4',categoria2: 'Ligero'},
    { color: '#36FF33',categoria: 'Hasta 2',categoria2: 'Bajo'},
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getColumns():  any[] {
    return [
      { caption: 'Nombre', field: 'categoria' },
      { caption: 'Código', field: 'categoria2' },
    ];
  };

  add(i?: number): void {
    const data = i !== null ? this.dataSource[i] : null;
    const dialogRef = this.dialog.open(ModalRiskComponent, {
      width: '500px',
      panelClass: 'mdl-noPadding',
      data: { risk: data, index: i }
    });

    dialogRef.afterClosed().subscribe(risk => {
      if (risk?.new) {
        this.dataSource.push(risk.new);
        this.reset = this.reset + 1;
      }
      if (risk?.edit) {
        this.dataSource[risk.index] = risk.edit;
        this.reset = this.reset + 1;
      }
    });
  }

  getrow(index: number) {
    this.indexSelected = index;
  }
}
