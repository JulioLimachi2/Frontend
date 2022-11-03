import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getDataSource(): any[] {
    return [
      {color: '#FF0000', categoria: 'Extremo', valor:'5', negativo: 'Se presentó una o mas veces a la semana',positivo: 'Se presentó una o mas veces a la semana' },
      { color: '#ff8000',categoria: 'Mayor', valor:'4',negativo: 'Se presentó una o mas veces al año' ,positivo: 'Se presentó una o mas veces a la semana'},
      { color: '#ffff00',categoria: 'Moderado',valor:'3', negativo: 'Se presentó una vez al año',positivo: 'Se presentó una o mas veces a la semana' },
      { color: '#B2D13F',categoria: 'Moderado', valor:'2',negativo: 'Ha sucedido una vez en la historia de la institución',positivo: 'Se presentó una o mas veces a la semana' },
      { color: '#36FF33',categoria: 'Insignificativo',valor:'1', negativo: 'Nunca se ha presentado',positivo: 'Se presentó una o mas veces a la semana' },
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Valor', field: 'valor' },
      { caption: 'Negativo', field: 'negativo' },  
       { caption: 'Positivo', field: 'positivo' }
    ];
  };

}
