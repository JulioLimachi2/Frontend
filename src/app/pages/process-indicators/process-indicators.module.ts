import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationSheetComponent } from './components/formulation-sheet/formulation-sheet.component';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';
import { ProcessIndicatorsRoutingModule } from './process-indicators-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FormulationSheetComponent,
    RevisionSheetComponent,

  ],
  imports: [
    CommonModule,
    ProcessIndicatorsRoutingModule,
    SharedModule
  ]
})
export class ProcessIndicatorsModule { }
