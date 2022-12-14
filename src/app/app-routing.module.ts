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
          import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'generalDocuments',
        loadChildren: () =>
          import('./pages/general-documents/general-documents.module').then((m) => m.GeneralDocumentsModule)
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('./pages/administration/administration.module').then((m) => m.AdministrationModule),
      },
      {
        path: 'processes',
        loadChildren: () =>
          import('./pages/processes/processes.module').then((m) => m.ProcessesModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./pages/reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'options',
        loadChildren: () =>
          import('./pages/options/options.module').then((m) => m.OptionsModule),
      },
      {
        path: 'edition-indicators',
        loadChildren: () =>
          import('./pages/edition-indicators/edition-indicators.module').then((m) => m.EditionIndicatorsModule),
      },
      {
        path: 'process',
        loadChildren: () =>
          import('./pages/process-indicators/process-indicators.module').then((m) => m.ProcessIndicatorsModule),
      },
      {
        path: 'edition-indicators',
        loadChildren: () =>
          import('./pages/edition-indicators/edition-indicators.module').then((m) => m.EditionIndicatorsModule),
      },
      {
        path: 'reports-indicators',
        loadChildren: () =>
          import('./pages/reports-indicators/reports-indicators.module').then((m) => m.ReportsIndicatorsModule),
      },
      {
        path: 'management-indicators',
        loadChildren: () =>
          import('./pages/management-indicators/management-indicators.module').then((m) => m.ManagementIndicatorsModule),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./pages/maintenance/maintenance.module').then((m) => m.MaintenanceModule),
      },
      {
        path: 'administration-risk',
        loadChildren: () =>
          import('./pages/administration-risk/administration-risk.module').then((m) => m.AdministrationRiskModule),
      },
      {
        path: 'process-risk',
        loadChildren: () =>
          import('./pages/process-risk/process-risk.module').then((m) => m.ProcessRiskModule),
      },
      {
        path: 'documented-information',
        loadChildren: () =>
          import('./pages/documented-information/documented-information.module').then((m) => m.DocumentedInformationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }