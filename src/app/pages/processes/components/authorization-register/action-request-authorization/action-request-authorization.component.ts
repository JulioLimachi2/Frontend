import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-action-request-authorization',
  templateUrl: './action-request-authorization.component.html',
  styleUrls: ['./action-request-authorization.component.scss']
})
export class ActionRequestAuthorizationComponent implements OnInit {

  formActionRequestAuthorization: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();

  fonts = [
    {
      id: 1,
      name: 'Hallazgos de personal'
    },
    {
      id: 2,
      name: 'requirement'
    }
  ];

  responsibles = [
    {
      id: 1,
      name: 'Li Loo Francisco Fernando'
    },
    {
      id: 2,
      name: 'Carlos Andres'
    }
  ];

  types = [
    {
      id: 1,
      name: 'Correctiva'
    }
  ];

  constructor(private builder: FormBuilder) { 
    this.formActionRequestAuthorization = this.builder.group({
      correlative:[,Validators.required],
      year: [,Validators.required],
      font:[,Validators.required],
      type:[,Validators.required],
      requirement: [,Validators.required],
      state:[,Validators.required],
      area:[,Validators.required],
      date:[,Validators.required],
      descriptionNC:[,Validators.required],
      reasonNonApproval:[],
      coordinator: [,Validators.required],
      dateShipment: [,Validators.required],
      responsibleUO :[,Validators.required],
      return:[false]
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log('formActionRequestAuthorization',this.formActionRequestAuthorization.value);
  }

  getYear(year: string){
     this.formActionRequestAuthorization.controls['year'].setValue(year);
  }

  next(){
    this.onNext.emit(true);
  }
}
