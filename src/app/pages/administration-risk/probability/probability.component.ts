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
      {color: '#FF0000', categoria: '17 a mas',categoria2: 'Extremo' },
      { color: '#ff8000',categoria: 'Entre 11 y 16',categoria2: 'Alto'},
      { color: '#ffff00',categoria: 'Entre 5 y 10',categoria2: 'Medio' },
      { color: '#B2D13F',categoria: 'Entre 3 y 4',categoria2: 'Ligero'},
      { color: '#36FF33',categoria: 'Hasta 2',categoria2: 'Bajo'},
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Nombre', field: 'categoria' },
      { caption: 'Código', field: 'categoria2' },
    ];
  };

}
