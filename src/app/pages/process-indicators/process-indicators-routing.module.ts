import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulationSheetComponent } from './components/formulation-sheet/formulation-sheet.component';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';

const routes: Routes = [
  {
    path: 'file',
    component: FormulationSheetComponent,
  },
  {
    path: 'revision',
    component: RevisionSheetComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessIndicatorsRoutingModule {}