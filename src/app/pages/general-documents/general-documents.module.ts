import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDocumentsListComponent } from './components/general-documents-list/general-documents-list.component';
import { GeneralDocumentsRoutingModule } from './general-documents-routing.module';



@NgModule({
  declarations: [
    GeneralDocumentsListComponent
  ],
  imports: [
    CommonModule,
    GeneralDocumentsRoutingModule
  ]
})
export class GeneralDocumentsModule { }
