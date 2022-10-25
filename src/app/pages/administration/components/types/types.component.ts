import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  displayedColumns: string[] = ['code', 'description', 'actions'];
  showForm: boolean;
  formType: FormGroup;
  indexFacilitator: number;

  dataSource = [
    {
      code: '1',
      description: 'Correctiva'
    },
    {
      code: '2',
      description: 'Oportunidad de mejora'
    }
  ];

    constructor(private builder: FormBuilder) {
    this.formType = this.builder.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexFacilitator !==undefined){
      this.dataSource[this.indexFacilitator] = this.formType.value;
    }else{
      this.dataSource.push(this.formType.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexFacilitator = index;
    this.showForm = true;
    this.formType.patchValue({
      code: element.code,
      description: element.description
    });
  }

}
