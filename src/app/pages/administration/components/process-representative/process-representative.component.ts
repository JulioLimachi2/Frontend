import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-representative',
  templateUrl: './process-representative.component.html',
  styleUrls: ['./process-representative.component.scss']
})
export class ProcessRepresentativeComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'state', 'actions'];
  showForm: boolean;
  formProcess: FormGroup;
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
    this.formProcess = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexFacilitator !==undefined){
      this.dataSource[this.indexFacilitator] = this.formProcess.value;
    }else{
      this.dataSource.push(this.formProcess.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexFacilitator = index;
    this.showForm = true;
    this.formProcess.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

}
