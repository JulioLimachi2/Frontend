import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentedComponent } from './components/documented/documented.component';
import { DocumentedInformationRoutingModule } from './documented-information-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DocumentedDetailsComponent } from './components/documented-details/documented-details.component';
import { ModalEditDocsComponent } from './components/modal-edit-docs/modal-edit-docs.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DocumentOneComponent } from './components/edit-document/document-one/document-one.component';
import { DocumentTwoComponent } from './components/edit-document/document-two/document-two.component';
import { DocumentThreeComponent } from './components/edit-document/document-three/document-three.component';
import { ModalDocumentComponent } from './components/modal-document/modal-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralDocumentsComponent } from './components/modal-document/general-documents/general-documents.component';
import { InternalDocumentsComponent } from './components/modal-document/internal-documents/internal-documents.component';
import { ExternalDocumentsComponent } from './components/modal-document/external-documents/external-documents.component';
import { ActasComponent } from './components/edit-document/actas/actas.component';
import { ActasFormComponent } from './components/modal-document/actas-form/actas-form.component';



@NgModule({
  declarations: [
    DocumentedComponent,
    DocumentedDetailsComponent,
    ModalEditDocsComponent,
    EditDocumentComponent,
    DocumentOneComponent,
    DocumentTwoComponent,
    DocumentThreeComponent,
    ModalDocumentComponent,
    GeneralDocumentsComponent,
    InternalDocumentsComponent,
    ExternalDocumentsComponent,
    ActasComponent,
    ActasFormComponent
  ],
  imports: [
    CommonModule,
    DocumentedInformationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class DocumentedInformationModule { }
