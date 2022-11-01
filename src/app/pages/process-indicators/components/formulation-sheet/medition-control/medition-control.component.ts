import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medition-control',
  templateUrl: './medition-control.component.html',
  styleUrls: ['./medition-control.component.scss']
})
export class MeditionControlComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  formMedition: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formMedition = this.builder.group({
      responsibleMedition: ['', Validators.required],
      responsibleControl: ['', Validators.required],
      frequencyMedition: ['', Validators.required],
      frequencyControl: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save(){
    console.log('formMedition',this.formMedition.value);
    this.onSave.emit(this.formMedition.value);
  }

  next(){
    this.onNext.emit(true);
  }

}
