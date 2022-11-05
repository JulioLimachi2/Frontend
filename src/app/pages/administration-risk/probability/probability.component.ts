import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProbabilityComponent } from './modal-probability/modal-probability.component';

@Component({
  selector: 'app-probability',
  templateUrl: './probability.component.html',
  styleUrls: ['./probability.component.scss']
})
export class ProbabilityComponent implements OnInit {

  indexSelected: number = null;
  reset: number = 0;
  getDataSource = [
    { color: '#FF0000', categoria: 'Muy Alto', valor: '5', description: 'Se presentó una o mas veces a la semana' },
    { color: '#ff8000', categoria: 'Alto', valor: '4', description: 'Se presentó una o mas veces al año' },
    { color: '#ffff00', categoria: 'Medio', valor: '3', description: 'Se presentó una vez al año' },
    { color: '#B2D13F', categoria: 'Bajo', valor: '2', description: 'Ha sucedido una vez en la historia de la institución' },
    { color: '#36FF33', categoria: 'Muy bajo', valor: '1', description: 'Nunca se ha presentado' }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  getColumns(): any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Valor', field: 'valor' },
      { caption: 'Descripción', field: 'description' }
    ];
  };


  add(i?: number): void {
    const data = i !== null ? this.getDataSource[i] : null;
    const dialogRef = this.dialog.open(ModalProbabilityComponent, {
      width: '500px',
      panelClass: 'mdl-noPadding',
      data: { probability: data, index: i }
    });

    dialogRef.afterClosed().subscribe(probability => {
      if (probability?.new) {
        this.getDataSource.push(probability.new);
        this.reset = this.reset + 1;
      }
      if (probability?.edit) {
        this.getDataSource[probability.index] = probability.edit;
        this.reset = this.reset + 1;
      }
    });
  }

  getrow(index: number) {
    this.indexSelected = index;
  }
}
