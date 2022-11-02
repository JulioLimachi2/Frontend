import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportIndicatorsComponent } from './components/report-indicators/report-indicators.component';
import { FormulationRevisionComponent } from './components/formulation-revision/formulation-revision.component';
import { ReportsIndicatorsRoutingModule } from './reports-indicators-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportTablesComponent } from './components/report-indicators/report-tables/report-tables.component';



@NgModule({
  declarations: [
    ReportIndicatorsComponent,
    FormulationRevisionComponent,
    ReportTablesComponent
  ],
  imports: [
    CommonModule,
    ReportsIndicatorsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ReportsIndicatorsModule { }
