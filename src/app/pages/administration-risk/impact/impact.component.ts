import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalImpactComponent } from './modal-impact/modal-impact.component';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {

  reset: number = 0;
  indexSelected: number = null;
  dataSource = [
    {color: '#FF0000', categoria: 'Extremo', valor:'5', negativo: 'Se presentó una o mas veces a la semana',positivo: 'Se presentó una o mas veces a la semana' },
    { color: '#ff8000',categoria: 'Mayor', valor:'4',negativo: 'Se presentó una o mas veces al año' ,positivo: 'Se presentó una o mas veces a la semana'},
    { color: '#ffff00',categoria: 'Moderado',valor:'3', negativo: 'Se presentó una vez al año',positivo: 'Se presentó una o mas veces a la semana' },
    { color: '#B2D13F',categoria: 'Moderado', valor:'2',negativo: 'Ha sucedido una vez en la historia de la institución',positivo: 'Se presentó una o mas veces a la semana' },
    { color: '#36FF33',categoria: 'Insignificativo',valor:'1', negativo: 'Nunca se ha presentado',positivo: 'Se presentó una o mas veces a la semana' }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Valor', field: 'valor' },
      { caption: 'Negativo', field: 'negativo' },  
       { caption: 'Positivo', field: 'positivo' }
    ];
  };

  add(i?: number): void {
    const data = i !== null ? this.dataSource[i] : null;
    const dialogRef = this.dialog.open(ModalImpactComponent, {
      width: '500px',
      panelClass: 'mdl-noPadding',
      data: { impact: data, index: i }
    });

    dialogRef.afterClosed().subscribe(impact => {
      if (impact?.new) {
        this.dataSource.push(impact.new);
        this.reset = this.reset + 1;
      }
      if (impact?.edit) {
        this.dataSource[impact.index] = impact.edit;
        this.reset = this.reset + 1;
      }
    });
  }

  getrow(index: number) {
    this.indexSelected = index;
  }
}
