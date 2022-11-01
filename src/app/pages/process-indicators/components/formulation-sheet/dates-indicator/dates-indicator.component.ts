import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dates-indicator',
  templateUrl: './dates-indicator.component.html',
  styleUrls: ['./dates-indicator.component.scss']
})
export class DatesIndicatorComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
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

  constructor(private builder: FormBuilder) {
    this.formIndicador = this.builder.group({
      code: [''],
      name: ['', Validators.required],
      finalidad: ['', Validators.required],
      proceso: ['', Validators.required],
      objetivo: ['', Validators.required],
      formula: ['', Validators.required],
      unidad: ['', Validators.required],
      fuente: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save() {
    console.log('formIndicador', this.formIndicador.value);
    this.onSave.emit(this.formIndicador.value);
  }

  next() {
    this.onNext.emit(true);
  }


}
