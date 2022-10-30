import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportIndicatorsComponent } from './components/report-indicators/report-indicators.component';
import { FormulationRevisionComponent } from './components/formulation-revision/formulation-revision.component';
import { ReportsIndicatorsRoutingModule } from './reports-indicators-routing.module';



@NgModule({
  declarations: [
    ReportIndicatorsComponent,
    FormulationRevisionComponent
  ],
  imports: [
    CommonModule,
    ReportsIndicatorsRoutingModule
  ]
})
export class ReportsIndicatorsModule { }
