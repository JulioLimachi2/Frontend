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
  showForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getModule() {
   // this.showForm = !this.showForm;
  }

}
