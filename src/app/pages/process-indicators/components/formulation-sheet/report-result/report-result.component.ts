import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-result',
  templateUrl: './report-result.component.html',
  styleUrls: ['./report-result.component.scss']
})
export class ReportResultComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  formReportResult: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.formReportResult = this.builder.group({
      month: [,Validators.required],
      year: [,Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getYear(year: string){
    this.formReportResult.controls['year'].setValue(year);
  }

  getMonth(month: string){
    this.formReportResult.controls['month'].setValue(month);
  }

  save(){
    console.log('formReportResult',this.formReportResult.value);
    this.onSave.emit(this.formReportResult.value);
  }

  next(){
    this.onNext.emit(true);
  }
}
