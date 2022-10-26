import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordFindingsComponent } from './components/record-findings/record-findings.component';
import { AuthorizationRegisterComponent } from './components/authorization-register/authorization-register.component';
import { ShareRegisterComponent } from './components/share-register/share-register.component';
import { ProcessesRoutingModule } from './processes-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListActionsComponent } from './components/record-findings/list-actions/list-actions.component';
import { ActionRequestComponent } from './components/record-findings/action-request/action-request.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecordFindingsComponent,
    AuthorizationRegisterComponent,
    ShareRegisterComponent,
    ListActionsComponent,
    ActionRequestComponent
  ],
  imports: [
    CommonModule,
    ProcessesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProcessesModule { }
