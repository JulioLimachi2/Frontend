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

  constructor(private builder: FormBuilder) {
    this.formRevision = this.builder.group({
      month:[,Validators.required],
      year:[,Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getMonth(month){
    this.formRevision.controls['month'].setValue(month);
  }

  getYear(year){
    this.formRevision.controls['year'].setValue(year);
  }

  generate(){
  this.formReport = this.formRevision.value;
  this.showReport = true;
  }

}
