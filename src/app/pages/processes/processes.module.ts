import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordFindingsComponent } from './components/record-findings/record-findings.component';
import { AuthorizationRegisterComponent } from './components/authorization-register/authorization-register.component';
import { ShareRegisterComponent } from './components/share-register/share-register.component';
import { ProcessesRoutingModule } from './processes-routing.module';



@NgModule({
  declarations: [
    RecordFindingsComponent,
    AuthorizationRegisterComponent,
    ShareRegisterComponent
  ],
  imports: [
    CommonModule,
    ProcessesRoutingModule
  ]
})
export class ProcessesModule { }
