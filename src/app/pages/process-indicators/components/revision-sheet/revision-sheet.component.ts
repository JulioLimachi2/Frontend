import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-sheet',
  templateUrl: './revision-sheet.component.html',
  styleUrls: ['./revision-sheet.component.scss']
})
export class RevisionSheetComponent implements OnInit {

  dataCard = [
    {
      id: 1,
      title: "PNC COPIA INFORMATIVA",
    }
  ];
  menuFicha = [
    {
     id: '01',
     name:'DATOS DEL INDICADOR',
     index: 0
    },
    {
     id: '02',
     name:'CONTROL DEL INDICADOR',
     index: 1
    },
    {
     id: '03',
     name:'REPORTE DE RESULTADOS',
     index: 2
    },
    {
      id: '04',
      name:'ANÁLISIS Y ACCIONES CORRECTIVAS',
      index: 3
     },
    {
     id: '05',
     name:'REVISIÓN Y APROBACIÓN DEL INDICADOR',
     index: 4
    }
   ];
  showForm: boolean;
  indexTabProcess = 0;
  tabsCompleteds = [];
  selectedIdOption: string = '01';
  setTabs = new Set();
  formIndicator;
  formMedition;
  formReportsResults;

  constructor() { }

  ngOnInit(): void {
  }

  getModule() {
    this.showForm = !this.showForm;
  }

  setIndicator(form){
    this.formIndicator = form;
  }

  setMedition(form){
   this.formMedition = form;
  }

  setReportsResult(form){
   this.formReportsResults = form;
  }
  
  nextTab(){
    this.indexTabProcess = this.indexTabProcess+1;
    const menu = this.menuFicha.find(x =>  x.index === this.indexTabProcess);
    this.setTabs.add(menu.id);
    this.tabsCompleteds = [...this.setTabs];
    this.indexTabProcess = menu.index;
    this.selectedIdOption = menu.id;
  }

  selectOption(option){
    this.selectedIdOption = option.id;
    this.setTabs.add(option.id);
    this.tabsCompleteds = [...this.setTabs];
    this.indexTabProcess = option.index;
  }

}
