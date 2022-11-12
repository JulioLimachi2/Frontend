import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentedDetailsComponent } from './components/documented-details/documented-details.component';
import { DocumentedComponent } from './components/documented/documented.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentedComponent,
  },
  {
    path: 'detail/:iddoc',
    component: DocumentedDetailsComponent,
  },
  {
    path: 'edit',
    component: EditDocumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentedInformationRoutingModule {}