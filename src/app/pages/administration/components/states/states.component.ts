import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'actions'];
  showForm: boolean;
  formState: FormGroup;
  indexState:number;
  dataSource = [
    {
      code:'01',
      name:'generado'
    },
    {
      code:'02',
      name:'autorizado'
    },
    {
      code:'03',
      name:'devuelto'
    },
    {
      code:'04',
      name:'pendiente'
    },
    {
      code:'05',
      name:'implementado'
    }
  ];

  constructor(private builder: FormBuilder) { 
    this.formState = this.builder.group({
      code: ['',Validators.required],
      name:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexState !==undefined){
      this.dataSource[this.indexState] = this.formState.value;
    }else{
      this.dataSource.push(this.formState.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexState = index;
    this.showForm = true;
    this.formState.patchValue({
      code: element.code,
      name: element.name
    });
  }

}
