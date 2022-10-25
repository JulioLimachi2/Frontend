import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  displayedColumns: string[] = ['code', 'description', 'corrective','upgrade','actions'];
  showForm: boolean;
  formSource: FormGroup;
  indexSource:number;

  dataSource = [
    {
      code:'07256',
      description:'Hallazgos del Personal',
      corrective: true,
      upgrade: false
    },
    {
      code:'96113',
      description:'Productos no conformes',
      corrective: false,
      upgrade: false
    },
    {
      code:'95145',
      description:'Reclamos',
      corrective: false,
      upgrade: false
    },
    {
      code:'32081',
      description:'Revisión por la dirección',
      corrective: false,
      upgrade: false
    },
    {
      code:'32116',
      description:'Auditorias Internas',
      corrective: false,
      upgrade: false
    }
  ];

  constructor(private builder: FormBuilder) { 
    this.formSource = this.builder.group({
      code: ['',Validators.required],
      description:['',Validators.required],
      corrective:[],
      upgrade: []
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.indexSource !==undefined){
      this.dataSource[this.indexSource] = this.formSource.value;
    }else{
      this.dataSource.push(this.formSource.value);
    }
    this.showForm = false;
  }

  edit(element,index){
    this.indexSource = index;
    this.showForm = true;
    this.formSource.patchValue({
      code: element.code,
      description: element.description,
      corrective: element.corrective,
      upgrade: element.upgrade,
    });
  }

}
