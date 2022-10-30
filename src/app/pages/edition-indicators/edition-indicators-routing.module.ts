import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevisionSheetComponent } from './components/revision-sheet/revision-sheet.component';

const routes: Routes = [
  {
    path: 'findings',
    component: RevisionSheetComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditionIndicatorsRoutingModule {}