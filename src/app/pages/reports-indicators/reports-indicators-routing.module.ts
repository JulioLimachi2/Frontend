import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportIndicatorsComponent } from './components/report-indicators/report-indicators.component';
import { FormulationRevisionComponent } from './components/formulation-revision/formulation-revision.component';

const routes: Routes = [
  {
    path: 'indicadores',
    component: ReportIndicatorsComponent,
  },
  {
    path: 'revision',
    component: FormulationRevisionComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsIndicatorsRoutingModule {}