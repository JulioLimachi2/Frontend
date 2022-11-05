import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEffectivenessComponent } from './modal-effectiveness/modal-effectiveness.component';

@Component({
  selector: 'app-effectiveness',
  templateUrl: './effectiveness.component.html',
  styleUrls: ['./effectiveness.component.scss']
})
export class EffectivenessComponent implements OnInit {

  reset: number = 0;
  indexSelected: number = null;
  dataSource = [
    {color: '#FF0000', categoria: 'Extremo', description:'Mitigar Compartir o Evitar', description2: 'Aceptar' },
    { color: '#ff8000',categoria: 'Alto', description:'Mitigar Compartir o Evitar',description2: 'Aceptar Incrementar o Compartir' },
    { color: '#ffff00',categoria: 'Medio',description:'Aceptar Compartir o Mitigar', description2: 'Aceptar Incrementar o Compartir' },
    { color: '#B2D13F',categoria: 'Ligero', description:'Aceptar Mitigar',description2: 'Incrementar o Compartir' },
    { color: '#36FF33',categoria: ' bajo',description:'Aceptar', description2: 'Incrementar' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Opción de tratamiento Riesgo negativo', field: 'description' },
      { caption: 'Opción de tratamiento Riesgo positivo', field: 'description2' }
    ];
  };

  add(i?: number): void {
    const data = i !== null ? this.dataSource[i] : null;
    const dialogRef = this.dialog.open(ModalEffectivenessComponent, {
      width: '500px',
      panelClass: 'mdl-noPadding',
      data: { effectiveness: data, index: i }
    });

    dialogRef.afterClosed().subscribe(effectiveness => {
      if (effectiveness?.new) {
        this.dataSource.push(effectiveness.new);
        this.reset = this.reset + 1;
      }
      if (effectiveness?.edit) {
        this.dataSource[effectiveness.index] = effectiveness.edit;
        this.reset = this.reset + 1;
      }
    });
  }

  getrow(index: number) {
    this.indexSelected = index;
  }
}
