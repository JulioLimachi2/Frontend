import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getDataSource(): any[] {
    return [
      {color: '#FF0000', categoria: 'Extremo', description:'Mitigar Compartir o Evitar', description2: 'Aceptar' },
      { color: '#ff8000',categoria: 'Alto', description:'Mitigar Compartir o Evitar',description2: 'Aceptar Incrementar o Compartir' },
      { color: '#ffff00',categoria: 'Medio',description:'Aceptar Compartir o Mitigar', description2: 'Aceptar Incrementar o Compartir' },
      { color: '#B2D13F',categoria: 'Ligero', description:'Aceptar Mitigar',description2: 'Incrementar o Compartir' },
      { color: '#36FF33',categoria: ' bajo',description:'Aceptar', description2: 'Incrementar' },
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Opción de tratamiento Riesgo negativo', field: 'description' },
      { caption: 'Opción de tratamiento Riesgo positivo', field: 'description2' }
    ];
  };
}
