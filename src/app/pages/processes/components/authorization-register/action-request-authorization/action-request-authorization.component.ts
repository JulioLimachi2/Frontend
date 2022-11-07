import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionAuthorizationService } from 'src/app/core/services/action-authorization.service';

@Component({
  selector: 'app-action-request-authorization',
  templateUrl: './action-request-authorization.component.html',
  styleUrls: ['./action-request-authorization.component.scss']
})
export class ActionRequestAuthorizationComponent implements OnInit, OnChanges {

  @Input() listAuthorization;
  @Input() changeCount: string;
  @Output() onSave: EventEmitter<boolean> = new EventEmitter();
  dateYear: string;
  @Input() nextDisabled: boolean = true;
  changeCountYear: number = 0;
  formActionRequestAuthorization: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();

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
    },
    {
      id: 3,
      name: 'Oportunidad de mejora'
    }
  ];

  areas = [
    {
      id: '01',
      name: 'Gerencia de Informática'
    }
  ];

  constructor(private builder: FormBuilder,
    private serviceauthorization: ActionAuthorizationService) {
    this.formActionRequestAuthorization = this.builder.group({
      id: [],
      correlative: [, Validators.required],
      year: [, Validators.required],
      source: [, Validators.required],
      type: [, Validators.required],
      requirement: [, Validators.required],
      state: [, Validators.required],
      area: [, Validators.required],
      dateIssue: [, Validators.required],
      descriptionNC: [, Validators.required],
      reasonNonApproval: [],
      coordinator: [, Validators.required],
      dateShipment: [, Validators.required],
      responsibleUO: [, Validators.required],
      return: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.changeCount) {
      if (this.listAuthorization?.authorization) {
        this.listAuthorization?.authorization && this.setEdit();
      } else {
        this.formActionRequestAuthorization.reset();
        this.changeCountYear++;
        this.dateYear = null;
      }
      if(changes['nextDisabled']?.currentValue){
        this.nextDisabled = changes['nextDisabled'].currentValue;
      }
    }
  }

  ngOnInit(): void {
  }

  save() {
    console.log('formActionRequestAuthorization', this.formActionRequestAuthorization.value);
    const area = this.areas.find(x => x.name === this.formActionRequestAuthorization.value.area);
    this.formActionRequestAuthorization.controls['area'].setValue(area);
    this.serviceauthorization.setAuthorizationg({ authorization: this.formActionRequestAuthorization.value, index: this.listAuthorization?.index })
    this.onSave.emit(true);
  }

  getYear(year: string) {
    this.formActionRequestAuthorization.controls['year'].setValue(year);
  }

  next() {
    this.onNext.emit(true);
  }

  setEdit() {
    this.formActionRequestAuthorization.patchValue({
      id: this.listAuthorization.authorization.id,
      correlative: this.listAuthorization.authorization.correlative,
      year: this.listAuthorization.authorization.year,
      source: this.listAuthorization.authorization.source,
      type: this.listAuthorization.authorization.type,
      requirement: this.listAuthorization.authorization.requirement,
      state: this.listAuthorization.authorization.state,
      area: this.listAuthorization.authorization.area.name,
      dateIssue: new Date(this.listAuthorization.authorization.dateIssue),
      descriptionNC: this.listAuthorization.authorization.descriptionNC,
      reasonNonApproval: this.listAuthorization.authorization.reasonNonApproval,
      coordinator: this.listAuthorization.authorization.coordinator,
      dateShipment: new Date(this.listAuthorization.authorization.dateShipment),
      responsibleUO: this.listAuthorization.authorization.responsibleUO,
      return: this.listAuthorization.authorization.return
    });
    this.changeCountYear++;
    this.dateYear = this.listAuthorization.authorization.year;
  }
}
