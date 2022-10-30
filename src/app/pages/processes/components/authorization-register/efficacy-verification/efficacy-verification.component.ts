import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-efficacy-verification',
  templateUrl: './efficacy-verification.component.html',
  styleUrls: ['./efficacy-verification.component.scss']
})
export class EfficacyVerificationComponent implements OnInit {

  formEfficacyVerification: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.formEfficacyVerification = this.builder.group({
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
    this.formEfficacyVerification.controls['year'].setValue(year);
  }

  save(){
    console.log('formEfficacyVerification',this.formEfficacyVerification.value);
  }

}
