import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulation-sheet',
  templateUrl: './formulation-sheet.component.html',
  styleUrls: ['./formulation-sheet.component.scss']
})


export class FormulationSheetComponent implements OnInit {

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
  ]
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


}
