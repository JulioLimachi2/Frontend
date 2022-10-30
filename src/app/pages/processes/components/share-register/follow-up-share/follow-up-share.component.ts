import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-follow-up-share',
  templateUrl: './follow-up-share.component.html',
  styleUrls: ['./follow-up-share.component.scss']
})
export class FollowUpShareComponent implements OnInit {

  formUpShare: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();

    constructor(private builder: FormBuilder) {
    this.formUpShare = this.builder.group({
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
    this.formUpShare.controls['year'].setValue(year);
  }

  next(){
    this.onNext.emit(true);
  }

}
