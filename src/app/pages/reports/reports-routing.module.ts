import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralReportComponent } from './components/general-report/general-report.component';
import { FollowUpReportComponent } from './components/follow-up-report/follow-up-report.component';
import { ByStateReportingComponent } from './components/by-state-reporting/by-state-reporting.component';

const routes: Routes = [
  {
    path: 'general',
    component: GeneralReportComponent
  },
  {
    path: 'followUp',
    component: FollowUpReportComponent
  },
  {
    path: 'bystate',
    component: ByStateReportingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}