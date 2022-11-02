import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-indicators',
  templateUrl: './report-indicators.component.html',
  styleUrls: ['./report-indicators.component.scss']
})
export class ReportIndicatorsComponent implements OnInit {

  formReportIndicator: FormGroup;
  showReport: boolean = false;
  formReport;

  constructor(private builder: FormBuilder) {
    this.formReportIndicator = this.builder.group({
      month:[,Validators.required],
      year:[,Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getMonth(month){
    this.formReportIndicator.controls['month'].setValue(month);
  }

  getYear(year){
    this.formReportIndicator.controls['year'].setValue(year);
  }

  generate(){
  this.formReport = this.formReportIndicator.value;
  this.showReport = true;
  }

}
