import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';
import { EditionIndicatorsRoutingModule } from './edition-indicators-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RevisionSheetComponent
  ],
  imports: [
    CommonModule,
    EditionIndicatorsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class EditionIndicatorsModule { }
