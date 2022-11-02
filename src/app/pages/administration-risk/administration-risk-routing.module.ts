import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpactComponent } from './impact/impact.component';
import { ProbabilityComponent } from './probability/probability.component';
import { RiskComponent } from './risk/risk.component';
import { EffectivenessComponent } from './effectiveness/effectiveness.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  {
    path: 'probability',
    component: ProbabilityComponent,
  },
  {
    path: 'impact',
    component: ImpactComponent,
  },
  {
    path: 'risk',
    component: RiskComponent,
  },
  {
    path: 'effectiveness',
    component: EffectivenessComponent,
  },
  {
    path: 'treatment',
    component: TreatmentComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRiskRoutingModule {}