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
  }

  getModule() {
    console.log("entre");

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

  nextTab(){
    this.indexTab = this.indexTab+1;
    const menu = this.menuFicha.find(x =>  x.index === this.indexTab);
    this.setTabs.add(menu.id);
    this.tabsCompleteds = [...this.setTabs];
    this.indexTab = menu.index;
    this.selectedIdOption = menu.id;
  }

}
