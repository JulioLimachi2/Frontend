import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProbabilityComponent } from './probability/probability.component';
import { ImpactComponent } from './impact/impact.component';
import { RiskComponent } from './risk/risk.component';
import { EffectivenessComponent } from './effectiveness/effectiveness.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AdministrationRiskRoutingModule } from './administration-risk-routing.module';



@NgModule({
  declarations: [
    ProbabilityComponent,
    ImpactComponent,
    RiskComponent,
    EffectivenessComponent,
    TreatmentComponent
  ],
  imports: [
    CommonModule,
    AdministrationRiskRoutingModule
  ]
})
export class AdministrationRiskModule { }
