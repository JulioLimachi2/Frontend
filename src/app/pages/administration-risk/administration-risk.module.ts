import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProbabilityComponent } from './probability/probability.component';
import { ImpactComponent } from './impact/impact.component';
import { RiskComponent } from './risk/risk.component';
import { EffectivenessComponent } from './effectiveness/effectiveness.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AdministrationRiskRoutingModule } from './administration-risk-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalProbabilityComponent } from './probability/modal-probability/modal-probability.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalImpactComponent } from './impact/modal-impact/modal-impact.component';
import { ModalRiskComponent } from './risk/modal-risk/modal-risk.component';
import { ModalEffectivenessComponent } from './effectiveness/modal-effectiveness/modal-effectiveness.component';
import { ModalTreatmentComponent } from './treatment/modal-treatment/modal-treatment.component';



@NgModule({
  declarations: [
    ProbabilityComponent,
    ImpactComponent,
    RiskComponent,
    EffectivenessComponent,
    TreatmentComponent,
    ModalProbabilityComponent,
    ModalImpactComponent,
    ModalRiskComponent,
    ModalEffectivenessComponent,
    ModalTreatmentComponent
  ],
  imports: [
    CommonModule,
    AdministrationRiskRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdministrationRiskModule { }
