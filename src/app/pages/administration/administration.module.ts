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
import { ModalPersonalComponent } from './components/modal-personal/modal-personal.component';
import { ModalStateComponent } from './components/states/modal-state/modal-state.component';
import { ModalSourceComponent } from './components/sources/modal-source/modal-source.component';
import { ModalTypeComponent } from './components/types/modal-type/modal-type.component';



@NgModule({
  declarations: [
    StatesComponent,
    SourcesComponent,
    FacilitatorsComponent,
    ProcessRepresentativeComponent,
    OfficersComponent,
    AuditorsComponent,
    TypesComponent,
    ModalPersonalComponent,
    ModalStateComponent,
    ModalSourceComponent,
    ModalTypeComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
