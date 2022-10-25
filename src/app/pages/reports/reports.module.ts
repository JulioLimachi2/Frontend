import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralReportComponent } from './components/general-report/general-report.component';
import { FollowUpReportComponent } from './components/follow-up-report/follow-up-report.component';
import { ByStateReportingComponent } from './components/by-state-reporting/by-state-reporting.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [
    GeneralReportComponent,
    FollowUpReportComponent,
    ByStateReportingComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
