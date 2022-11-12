import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentedComponent } from './components/documented/documented.component';
import { DocumentedInformationRoutingModule } from './documented-information-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DocumentedDetailsComponent } from './components/documented-details/documented-details.component';
import { ModalEditDocsComponent } from './components/modal-edit-docs/modal-edit-docs.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';



@NgModule({
  declarations: [
    DocumentedComponent,
    DocumentedDetailsComponent,
    ModalEditDocsComponent,
    EditDocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentedInformationRoutingModule,
    MaterialModule
  ]
})
export class DocumentedInformationModule { }
