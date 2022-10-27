import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-actions-authorization',
  templateUrl: './list-actions-authorization.component.html',
  styleUrls: ['./list-actions-authorization.component.scss']
})
export class ListActionsAuthorizationComponent implements OnInit {

  formSearchActions: FormGroup;
  areas = [
    {
      id: '01',
      name: 'Gerencia de Informatica'
    }
  ];

  constructor(private builder: FormBuilder) {
    this.formSearchActions = this.builder.group({
      year: [],
      state: [],
      area: []
    });
  }

  ngOnInit(): void {
  }

  getYear(year: string) {
    console.log('year', year);
  }

  search(){
    
  }

}
