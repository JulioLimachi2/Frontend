import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';
import { EditionIndicatorsRoutingModule } from './edition-indicators-routing.module';



@NgModule({
  declarations: [
    RevisionSheetComponent
  ],
  imports: [
    CommonModule,
    EditionIndicatorsRoutingModule
  ]
})
export class EditionIndicatorsModule { }
