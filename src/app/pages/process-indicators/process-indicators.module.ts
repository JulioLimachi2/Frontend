import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationSheetComponent } from './components/formulation-sheet/formulation-sheet.component';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';
import { ProcessIndicatorsRoutingModule } from './process-indicators-routing.module';



@NgModule({
  declarations: [
    FormulationSheetComponent,
    RevisionSheetComponent
  ],
  imports: [
    CommonModule,
    ProcessIndicatorsRoutingModule
  ]
})
export class ProcessIndicatorsModule { }
