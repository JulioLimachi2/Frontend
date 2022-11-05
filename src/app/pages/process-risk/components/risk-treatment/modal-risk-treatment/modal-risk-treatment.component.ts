import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-risk-treatment',
  templateUrl: './modal-risk-treatment.component.html',
  styleUrls: ['./modal-risk-treatment.component.scss']
})
export class ModalRiskTreatmentComponent implements OnInit {

  formRiskTreatment: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalRiskTreatmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formRiskTreatment = this.builder.group({
      subProcess: [],
      type: [],
      riskCode: [],
      riskName: [],
      riskValue: [],
      residualRiskBefore: [],
      assetName: [],
      referenceControlISO: [],
      proposedControls: [],
      responsible: [],
      startDate: [],
      endDate: [],
      followUp: [],
      controlImplementationStatus: [],
      determinationDefinitionResponsibleParty: [],
      frequencyExecution: [],
      documentacionEvidencia: [],
      preventiveNature: [],
      controlApplication: [],
      effectivenessProposedControl: [],
      valueResidualRisk: [],
      residualRiskAfter: [],
      comment: [],
    })
  }

  ngOnInit(): void {
    this.data.treatment && this.setEdit();
  }

  save() {
    const data = this.data.treatment ? {edit: this.formRiskTreatment.value,index:this.data.index} : {new: this.formRiskTreatment.value};
    this.dialogRef.close(data);
  }

  setEdit(){
    this.formRiskTreatment.patchValue({
      subProcess: this.data.treatment.subProcess,
      type: this.data.treatment.type,
      riskCode: this.data.treatment.riskCode,
      riskName: this.data.treatment.riskName,
      riskValue: this.data.treatment.riskValue,
      residualRiskBefore: this.data.treatment.residualRiskBefore,
      assetName: this.data.treatment.assetName,
      referenceControlISO: this.data.treatment.referenceControlISO,
      proposedControls: this.data.treatment.proposedControls,
      responsible: this.data.treatment.responsible,
      startDate: this.data.treatment.startDate,
      endDate: this.data.treatment.endDate,
      followUp: this.data.treatment.followUp,
      controlImplementationStatus: this.data.treatment.controlImplementationStatus,
      determinationDefinitionResponsibleParty: this.data.treatment.determinationDefinitionResponsibleParty,
      frequencyExecution: this.data.treatment.frequencyExecution,
      documentacionEvidencia: this.data.treatment.documentacionEvidencia,
      preventiveNature: this.data.treatment.preventiveNature,
      controlApplication: this.data.treatment.controlApplication,
      effectivenessProposedControl: this.data.treatment.effectivenessProposedControl,
      valueResidualRisk: this.data.treatment.valueResidualRisk,
      residualRiskAfter: this.data.treatment.residualRiskAfter,
      comment: this.data.treatment.comment
    });
  }

}
