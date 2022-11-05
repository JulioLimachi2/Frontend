import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskRegisteComponent } from './components/risk-registe/risk-registe.component';
import { AssetInventoryComponent } from './components/asset-inventory/asset-inventory.component';
import { RiskTreatmentComponent } from './components/risk-treatment/risk-treatment.component';
import { ProcessRiskRoutingModule } from './process-risk-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalRiskRegisterComponent } from './components/risk-registe/modal-risk-register/modal-risk-register.component';
import { ModalAssetInventoryComponent } from './components/asset-inventory/modal-asset-inventory/modal-asset-inventory.component';
import { ModalRiskTreatmentComponent } from './components/risk-treatment/modal-risk-treatment/modal-risk-treatment.component';



@NgModule({
  declarations: [
    RiskRegisteComponent,
    AssetInventoryComponent,
    RiskTreatmentComponent,
    ModalRiskRegisterComponent,
    ModalAssetInventoryComponent,
    ModalRiskTreatmentComponent
  ],
  imports: [
    CommonModule,
    ProcessRiskRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProcessRiskModule { }
