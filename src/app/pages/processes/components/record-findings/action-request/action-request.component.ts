import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-action-request',
  templateUrl: './action-request.component.html',
  styleUrls: ['./action-request.component.scss']
})
export class ActionRequestComponent implements OnInit {

  formActionRequest: FormGroup;

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
  ]

  constructor(private builder: FormBuilder) { 
    this.formActionRequest = this.builder.group({
      correlative:[,Validators.required],
      year: [,Validators.required],
      font:[,Validators.required],
      requirement: [,Validators.required],
      state:[,Validators.required],
      area:[,Validators.required],
      date:[,Validators.required],
      descriptionNC:[,Validators.required],
      reasonNonApproval:[],
      coordinator: [,Validators.required],
      dateShipment: [,Validators.required],
      responsibleUO :[,Validators.required]
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log('formActionRequest',this.formActionRequest.value);
  }

  getYear(year: string){
     this.formActionRequest.controls['year'].setValue(year);
  }
}
