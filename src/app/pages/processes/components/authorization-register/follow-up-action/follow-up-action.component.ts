import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-follow-up-action',
  templateUrl: './follow-up-action.component.html',
  styleUrls: ['./follow-up-action.component.scss']
})
export class FollowUpActionComponent implements OnInit {

  formUpAction: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();

  constructor(private builder: FormBuilder) {
    this.formUpAction = this.builder.group({
      correlative: [, Validators.required],
      year: [, Validators.required],
      type: [, Validators.required],
      state: [, Validators.required],
      followUp: [, Validators.required],
      verificationDate: [, Validators.required],
      implemented: [],
      dateEfficacy: []
    });
  }

  ngOnInit(): void {
  }

  getYear(year: string) {
    this.formUpAction.controls['year'].setValue(year);
  }

  next(){
     this.onNext.emit(true);
  }

}
