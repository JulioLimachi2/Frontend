import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //canActivate: [CanActiveViaAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'generalDocuments',
        loadChildren: () =>
          import('./pages/general-documents/general-documents.module').then((m) => m.GeneralDocumentsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }