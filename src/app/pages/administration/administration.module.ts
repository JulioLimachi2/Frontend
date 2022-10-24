import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesComponent } from './components/states/states.component';
import { SourcesComponent } from './components/sources/sources.component';
import { FacilitatorsComponent } from './components/facilitators/facilitators.component';
import { ProcessRepresentativeComponent } from './components/process-representative/process-representative.component';
import { OfficersComponent } from './components/officers/officers.component';
import { AuditorsComponent } from './components/auditors/auditors.component';
import { TypesComponent } from './components/types/types.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StatesComponent,
    SourcesComponent,
    FacilitatorsComponent,
    ProcessRepresentativeComponent,
    OfficersComponent,
    AuditorsComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
