import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facilitators',
  templateUrl: './facilitators.component.html',
  styleUrls: ['./facilitators.component.scss']
})
export class FacilitatorsComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'state', 'actions'];
  showForm: boolean;
  formFacilitador: FormGroup;
  indexFacilitator: number;

  dataSource = [
    {
      code: '07256',
      name: 'Borja Espinoza Tula Maria',
      state: true  
    },
    {
      code: '96113',
      name: 'Abarca Cajigas Patricia Ivonne',
      state: false
    },
    {
      code: '95145',
      name: 'Chavez Solano Enrique Obed',
      state: false 
    },
    {
      code: '32081',
      name: 'Gutierrez Enriquez Maria Tatiana',
      state: false
    },
    {
      code: '32116',
      name: 'Li Loo Francisco Fernando',
      state: false 
    }
  ];

  constructor(private builder: FormBuilder) {
    this.formFacilitador = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexFacilitator !==undefined){
      this.dataSource[this.indexFacilitator] = this.formFacilitador.value;
    }else{
      this.dataSource.push(this.formFacilitador.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexFacilitator = index;
    this.showForm = true;
    this.formFacilitador.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

}
