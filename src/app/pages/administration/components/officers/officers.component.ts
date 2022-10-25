import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'state', 'actions'];
  showForm: boolean;
  formOfficer: FormGroup;
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
    this.formOfficer = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexFacilitator !==undefined){
      this.dataSource[this.indexFacilitator] = this.formOfficer.value;
    }else{
      this.dataSource.push(this.formOfficer.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexFacilitator = index;
    this.showForm = true;
    this.formOfficer.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

}
