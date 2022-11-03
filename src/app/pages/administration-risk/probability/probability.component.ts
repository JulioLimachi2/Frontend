import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probability',
  templateUrl: './probability.component.html',
  styleUrls: ['./probability.component.scss']
})
export class ProbabilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getDataSource(): any[] {
    return [
      {color: '#FF0000', categoria: 'Mul Alto', valor:'5', description: 'Se presentó una o mas veces a la semana' },
      { color: '#ff8000',categoria: 'Alto', valor:'4',description: 'Se presentó una o mas veces al año' },
      { color: '#ffff00',categoria: 'Medio',valor:'3', description: 'Se presentó una vez al año' },
      { color: '#B2D13F',categoria: 'Bajo', valor:'2',description: 'Ha sucedido una vez en la historia de la institución' },
      { color: '#36FF33',categoria: 'Muy bajo',valor:'1', description: 'Nunca se ha presentado' },
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Valor', field: 'valor' },
      { caption: 'Descripción', field: 'description' }
    ];
  };
}
