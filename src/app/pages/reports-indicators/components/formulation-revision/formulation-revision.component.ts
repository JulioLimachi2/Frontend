import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulation-revision',
  templateUrl: './formulation-revision.component.html',
  styleUrls: ['./formulation-revision.component.scss']
})
export class FormulationRevisionComponent implements OnInit {

  formReport;
  formRevision: FormGroup;
  showReport: boolean = false;
  formIndicator = {
    "code": "asda",
    "name": "asdasdas",
    "finalidad": "sdas",
    "proceso": "dsa",
    "objetivo": "dasd",
    "formula": "asd",
    "unidad": "asdas",
    "fuente": "dasdas"
  };

  formMedition = {
    "responsibleMedition": "asdas",
    "responsibleControl": "dasd",
    "frequencyMedition": "asd",
    "frequencyControl": "asdasd"
  }

  formMeta = {
    "baseLine": "dasd",
    "optimo": "asdas",
    "tolerant": "dasd",
    "deficient": "asdasdasd"
  }

  constructor(private builder: FormBuilder) {
    this.formRevision = this.builder.group({
      month: [, Validators.required],
      year: [, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getMonth(month) {
    this.formRevision.controls['month'].setValue(month);
  }

  getYear(year) {
    this.formRevision.controls['year'].setValue(year);
  }

  generate() {
    this.formReport = this.formRevision.value;
    this.showReport = true;
  }

}
