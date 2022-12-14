import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationSheetComponent } from './components/formulation-sheet/formulation-sheet.component';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';
import { ProcessIndicatorsRoutingModule } from './process-indicators-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DatesIndicatorComponent } from './components/formulation-sheet/dates-indicator/dates-indicator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeditionControlComponent } from './components/formulation-sheet/medition-control/medition-control.component';
import { MetaIndicatorComponent } from './components/formulation-sheet/meta-indicator/meta-indicator.component';
import { ReportResultComponent } from './components/formulation-sheet/report-result/report-result.component';
import { RevisionApprovalComponent } from './components/formulation-sheet/revision-approval/revision-approval.component';
import { AnalysisActionsComponent } from './components/revision-sheet/analysis-actions/analysis-actions.component';



@NgModule({
  declarations: [
    FormulationSheetComponent,
    RevisionSheetComponent,
    DatesIndicatorComponent,
    MeditionControlComponent,
    MetaIndicatorComponent,
    ReportResultComponent,
    RevisionApprovalComponent,
    AnalysisActionsComponent,

  ],
  imports: [
    CommonModule,
    ProcessIndicatorsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProcessIndicatorsModule { }
