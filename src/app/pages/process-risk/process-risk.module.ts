import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskRegisteComponent } from './components/risk-registe/risk-registe.component';
import { AssetInventoryComponent } from './components/asset-inventory/asset-inventory.component';
import { RiskTreatmentComponent } from './components/risk-treatment/risk-treatment.component';
import { ProcessRiskRoutingModule } from './process-risk-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    RiskRegisteComponent,
    AssetInventoryComponent,
    RiskTreatmentComponent
  ],
  imports: [
    CommonModule,
    ProcessRiskRoutingModule,
    MaterialModule
  ]
})
export class ProcessRiskModule { }
