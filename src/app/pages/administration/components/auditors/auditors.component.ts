import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auditors',
  templateUrl: './auditors.component.html',
  styleUrls: ['./auditors.component.scss']
})
export class AuditorsComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'state', 'actions'];
  showForm: boolean;
  formAuditors: FormGroup;
  indexFacilitator: number;

  dataSource = [
    {
      code: '20009',
      name: 'Borja Espinoza Tula Maria',
      state: true  
    },
    {
      code: '24041',
      name: 'Llanos Barrios Patricia',
      state: false
    }
  ];

    constructor(private builder: FormBuilder) {
    this.formAuditors = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexFacilitator !==undefined){
      this.dataSource[this.indexFacilitator] = this.formAuditors.value;
    }else{
      this.dataSource.push(this.formAuditors.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexFacilitator = index;
    this.showForm = true;
    this.formAuditors.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

}
