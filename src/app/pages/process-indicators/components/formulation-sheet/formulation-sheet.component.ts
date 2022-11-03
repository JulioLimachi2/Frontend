import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulation-sheet',
  templateUrl: './formulation-sheet.component.html',
  styleUrls: ['./formulation-sheet.component.scss']
})


export class FormulationSheetComponent implements OnInit {

  indexTab = 0;
  selectedIdOption: string = '01';
  tabsCompleteds = [];
  formIndicator;
  formMedition;
  formReportsResult;
  formMeta;
  setTabs = new Set();
  data = [
    {
      id: 1,
      title: "PNC COPIA INFORMATIVA",
    },
    {
      id: 2,
      title: "REIMPRESION COPIA INFORMATIVA",
    },
    {
      id: 3,
      title: "PNC BOLETA INFORMATIVA",
    },
    {
      id: 4,
      title: "REIMPRESION BOLETA INFORMATIVA",
    },
    {
      id: 5,
      title: "ESPERA DE USUARIO EN COLA",
    },
  ];

  menuFicha = [
   {
    id: '01',
    name:'DATOS DEL INDICADOR',
    index: 0
   },
   {
    id: '02',
    name:'MEDICIÓN Y CONTROL',
    index: 1
   },
   {
    id: '03',
    name:'META DEL INDICADOR',
    index: 2
   },
   {
    id: '04',
    name:'REPORTE DE RESULTADOS',
    index: 3
   },
   {
    id: '05',
    name:'REVISIÓN Y APROBACIÓN DEL INDICADOR',
    index: 4
   }
  ];

  formIndicador: FormGroup;
  showForm: boolean = false;
  constructor(private router: Router, private builder: FormBuilder) {
    this.formIndicador = this.builder.group({
      code: [''],
      name: ['', Validators.required],
      finalidad: ['', Validators.required],
      proceso: ['', Validators.required],
      objetivo: ['', Validators.required],
      formula: ['', Validators.required],
      unidad: ['', Validators.required],
    })
  }


  ngOnInit(): void {
    this.myData = this.getDataSource();
    this.myColumns = this.getColumns();
  }


  getModule() {
    this.router.navigateByUrl("/process/file");
    this.showForm = !this.showForm;
  }

  goBack() {
    this.showForm = !this.showForm;
  }

  save() {
    this.showForm = !this.showForm;
  }

  selectOption(option){
    this.selectedIdOption = option.id;
    this.setTabs.add(option.id);
    this.tabsCompleteds = [...this.setTabs];
    this.indexTab = option.index;
  }

  setIndicator(form){
    this.formIndicator = form;
  }

  setMedition(form){
    this.formMedition = form;
  }

  setMeta(form){
    this.formMeta = form;
  }

  setResultReports(form){
    this.formReportsResult = form;
  }

  nextTab(){
    this.indexTab = this.indexTab+1;
    const menu = this.menuFicha.find(x =>  x.index === this.indexTab);
    this.setTabs.add(menu.id);
    this.tabsCompleteds = [...this.setTabs];
    this.indexTab = menu.index;
    this.selectedIdOption = menu.id;
  }

  myData: any
  myColumns: any;

  getDataSource(): any[] {
    return [
      {color: '#FF0000', categoria: 'Mul Alto',categoria2: 'Mul Alto', valor:'5', description: 'Se presentó una o mas veces a la semana' },
      { color: '#ff8000',categoria: 'Alto',categoria2: 'Mul Alto', valor:'4',description: 'Se presentó una o mas veces al año' },
      { color: '#ffff00',categoria: 'Medio',categoria2: 'Mul Alto',valor:'3', description: 'Se presentó una vez al año' },
      { color: '#B2D13F',categoria: 'Bajo',categoria2: 'Mul Alto', valor:'2',description: 'Ha sucedido una vez en la historia de la institución' },
      { color: '#36FF33',categoria: 'Muy bajo',categoria2: 'Mul Alto',valor:'1', description: 'Nunca se ha presentado' },
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Categoría', field: 'categoria' },
      { caption: 'Categoría 2', field: 'categoria2' },
      { caption: 'Valor', field: 'valor' },
      { caption: 'Descripcion', field: 'description' }
    ];
  };
  
}
