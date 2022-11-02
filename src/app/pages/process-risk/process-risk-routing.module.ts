import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskRegisteComponent } from './components/risk-registe/risk-registe.component';
import { AssetInventoryComponent } from './components/asset-inventory/asset-inventory.component';
import { RiskTreatmentComponent } from './components/risk-treatment/risk-treatment.component';

const routes: Routes = [
  {
    path: 'risk-register',
    component: RiskRegisteComponent,
  },
  {
    path: 'asset-inventory',
    component: AssetInventoryComponent,
  },
  {
    path: 'risk-treatment',
    component: RiskTreatmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessRiskRoutingModule {}