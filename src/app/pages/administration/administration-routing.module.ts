import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorsComponent } from './components/auditors/auditors.component';
import { FacilitatorsComponent } from './components/facilitators/facilitators.component';
import { OfficersComponent } from './components/officers/officers.component';
import { ProcessRepresentativeComponent } from './components/process-representative/process-representative.component';
import { SourcesComponent } from './components/sources/sources.component';
import { StatesComponent } from './components/states/states.component';
import { TypesComponent } from './components/types/types.component';

const routes: Routes = [
  {
    path: 'states',
    component: StatesComponent
  },
  {
    path: 'source',
    component: SourcesComponent
  },
  {
    path: 'facilitators',
    component: FacilitatorsComponent
  },
  {
    path: 'process-representative',
    component: ProcessRepresentativeComponent
  },
  {
    path: 'officers',
    component: OfficersComponent
  },
  {
    path: 'auditors',
    component: AuditorsComponent
  },
  {
    path: 'types',
    component: TypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}