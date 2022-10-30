import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-efficacy-verification-share',
  templateUrl: './efficacy-verification-share.component.html',
  styleUrls: ['./efficacy-verification-share.component.scss']
})
export class EfficacyVerificationShareComponent implements OnInit {

  formEfficacyShare: FormGroup;
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();

    constructor(private builder: FormBuilder) { 
    this.formEfficacyShare = this.builder.group({
      correlative: [, Validators.required],
      year: [, Validators.required],
      type: [, Validators.required],
      state: [, Validators.required],
      efficacyVerification: [, Validators.required],
      verificationDate: [, Validators.required],
      closed:[,Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getYear(year: string) {
    this.formEfficacyShare.controls['year'].setValue(year);
  }

  save(){
    console.log('formEfficacyShare',this.formEfficacyShare.value);
  }

}
