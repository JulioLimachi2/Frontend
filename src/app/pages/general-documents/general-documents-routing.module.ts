import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralDocumentsListComponent } from './components/general-documents-list/general-documents-list.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralDocumentsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralDocumentsRoutingModule {}