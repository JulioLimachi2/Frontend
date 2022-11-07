import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from 'src/app/core/services/share.service';

@Component({
  selector: 'app-action-request-share',
  templateUrl: './action-request-share.component.html',
  styleUrls: ['./action-request-share.component.scss']
})
export class ActionRequestShareComponent implements OnInit {

  @Input() listShare;
  @Input() changeCount: string;
  @Output() onSave: EventEmitter<boolean> = new EventEmitter();
  dateYear: string;
  changeCountYear: number = 0;
  @Input() nextDisabled: boolean = true;
  formActionRequestShare: FormGroup;
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
    }
  ];

  constructor(private builder: FormBuilder,
              private serviceshare: ShareService) { 
    this.formActionRequestShare = this.builder.group({
      id:[],
      correlative:[,Validators.required],
      year: [,Validators.required],
      source:[,Validators.required],
      type:[,Validators.required],
      requirement: [,Validators.required],
      state:[,Validators.required],
      area:[,Validators.required],
      dateIssue:[,Validators.required],
      descriptionNC:[,Validators.required],
      reasonNonApproval:[],
      coordinator: [,Validators.required],
      dateShipment: [,Validators.required],
      responsibleUO :[,Validators.required],
      return:[false]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.changeCount) {
      if (this.listShare?.share) {
        this.listShare?.share && this.setEdit();
      } else {
        this.formActionRequestShare.reset();
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

  save(){
    console.log('formActionRequest',this.formActionRequestShare.value);
    this.serviceshare.setShare({ share: this.formActionRequestShare.value, index: this.listShare?.index })
    this.onSave.emit(true);
  }

  getYear(year: string){
     this.formActionRequestShare.controls['year'].setValue(year);
  }

  next(){
    this.onNext.emit(true);
  }

  setEdit() {
    this.formActionRequestShare.patchValue({
      id: this.listShare.share.id,
      correlative: this.listShare.share.correlative,
      year: this.listShare.share.year,
      source: this.listShare.share.source,
      type: this.listShare.share.type,
      requirement: this.listShare.share.requirement,
      state: this.listShare.share.state,
      area: this.listShare.share.area,
      dateIssue: new Date(this.listShare.share.dateIssue),
      descriptionNC: this.listShare.share.descriptionNC,
      reasonNonApproval: this.listShare.share.reasonNonApproval,
      coordinator: this.listShare.share.coordinator,
      dateShipment: new Date(this.listShare.share.dateShipment),
      responsibleUO: this.listShare.share.responsibleUO,
      return: this.listShare.share.return
    });
    this.changeCountYear++;
    this.dateYear = this.listShare.share.year;
  }
}
