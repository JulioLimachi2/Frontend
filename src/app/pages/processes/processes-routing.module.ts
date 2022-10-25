import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationRegisterComponent } from './components/authorization-register/authorization-register.component';
import { RecordFindingsComponent } from './components/record-findings/record-findings.component';
import { ShareRegisterComponent } from './components/share-register/share-register.component';

const routes: Routes = [
  {
    path: 'findings',
    component: RecordFindingsComponent
  },
  {
    path: 'authorization',
    component: AuthorizationRegisterComponent
  },
  {
    path: 'actions',
    component: ShareRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessesRoutingModule {}