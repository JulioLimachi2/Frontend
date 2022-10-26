import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      correlative:[],
      year: [],
      font:[],
      requirement: [],
      state:[],
      area:[],
      date:[],
      descriptionNC:[],
      reasonNonApproval:[],
      coordinator: [],
      dateShipment: [],
      responsibleUO :[]
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log('formActionRequest',this.formActionRequest.value);
  }
}
