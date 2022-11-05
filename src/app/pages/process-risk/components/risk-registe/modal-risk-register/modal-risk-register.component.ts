import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-risk-register',
  templateUrl: './modal-risk-register.component.html',
  styleUrls: ['./modal-risk-register.component.scss']
})
export class ModalRiskRegisterComponent implements OnInit {

  formRiskRegister: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalRiskRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private builder: FormBuilder) {
    this.formRiskRegister = this.builder.group({
      origin: [],
      subProcess: [],
      asset: [],
      threatOpportunity: [],
      vulnerabilityStrength: [],
      riskCode: [],
      nameRisk: [],
      effect: [],
      probability: [],
      activeInformationC: [],
      activeInformationI: [],
      activeInformationD: [],
      valueCid: [],
      impact: [],
      riskValue: [],
      levelRisk: [],
      existingControls: [],
      responsibleDetermination: [],
      frequencyExecution: [],
      documentationOrEvidence: [],
      preventiveCharacter: [],
      applicationControl: [],
      controlEffectiveness: [],
      residualRiskValue: [],
      residualrisk: [],
      treatmentOption: [],
    });
  }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.formRiskRegister.value);
  }

}
