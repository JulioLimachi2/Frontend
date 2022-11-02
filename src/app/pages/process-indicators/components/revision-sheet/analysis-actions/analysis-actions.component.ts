import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-analysis-actions',
  templateUrl: './analysis-actions.component.html',
  styleUrls: ['./analysis-actions.component.scss']
})
export class AnalysisActionsComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  formAnalysis: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.formAnalysis = this.builder.group({
      month: [,Validators.required],
      analysis: [,Validators.required],
      actions: [,Validators.required]
    });
  }

  ngOnInit(): void {
  }
 
   getMonth(month: string){
     console.log('month',month);
     this.formAnalysis.controls['month'].setValue(month);
   }
 
   save(){
     console.log('formAnalysis',this.formAnalysis.value);
     this.onSave.emit(this.formAnalysis.value);
   }
 
   next(){
     this.onNext.emit(true);
   }

}
