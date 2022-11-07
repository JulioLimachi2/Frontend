import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FindingsService } from 'src/app/core/services/findings.service';

@Component({
  selector: 'app-action-request',
  templateUrl: './action-request.component.html',
  styleUrls: ['./action-request.component.scss']
})
export class ActionRequestComponent implements OnInit, OnChanges {

  @Input() listAction;
  @Input() changeCount: string;
  @Output() onSave: EventEmitter<boolean> =  new EventEmitter();
  dateYear: string;
  changeCountYear: number = 0;
  formActionRequest: FormGroup;

  fonts = [
    {
      id: 1,
      name: 'Hallazgos del personal'
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
  ];

  types = [
    {
      id: 1,
      name: 'Correctiva'
    },
    {
      id: 2,
      name: 'Preventiva'
    }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.changeCount){
      if(this.listAction?.action){
        this.listAction?.action && this.setEdit();
      }else{
        this.formActionRequest.reset();
        this.changeCountYear++;
        this.dateYear = null;
      }
      
    }
  }

  constructor(private builder: FormBuilder,
            private findingservice: FindingsService) { 
    this.formActionRequest = this.builder.group({
      id:[],
      correlative: [,Validators.required],
      year:  [,Validators.required],
      source: [,Validators.required],
      type: [,Validators.required],
      requirement:  [,Validators.required],
      state: [,Validators.required],
      area: [,Validators.required],
      dateIssue: [,Validators.required],
      descriptionNC: [,Validators.required],
      reasonNonApproval:[],
      coordinator:  [,Validators.required],
      dateShipment: [,Validators.required],
      responsibleUO : [,Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log('formActionRequest',this.formActionRequest.value);
    this.findingservice.setFinding({action:this.formActionRequest.value,index:this.listAction?.index})
    this.onSave.emit(true);
  }

  getYear(year: string){
     this.formActionRequest.controls['year'].setValue(year);
  }

  setEdit(){
    this.formActionRequest.patchValue({
      id: this.listAction.action.id,
      correlative: this.listAction.action.correlative,
      year:  this.listAction.action.year,
      source: this.listAction.action.source,
      type: this.listAction.action.type,
      requirement:  this.listAction.action.requirement,
      state: this.listAction.action.state,
      area: this.listAction.action.area,
      dateIssue: new Date(this.listAction.action.dateIssue),
      descriptionNC: this.listAction.action.descriptionNC,
      reasonNonApproval: this.listAction.action.reasonNonApproval,
      coordinator:  this.listAction.action.coordinator,
      dateShipment:  new Date(this.listAction.action.dateShipment),
      responsibleUO : this.listAction.action.responsibleUO
    });
    this.changeCountYear++;
    this.dateYear = this.listAction.action.year;
  }
}
