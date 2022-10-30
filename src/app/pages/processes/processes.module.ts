import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RecordFindingsComponent } from './components/record-findings/record-findings.component';
import { AuthorizationRegisterComponent } from './components/authorization-register/authorization-register.component';
import { ShareRegisterComponent } from './components/share-register/share-register.component';
import { ProcessesRoutingModule } from './processes-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListActionsComponent } from './components/record-findings/list-actions/list-actions.component';
import { ActionRequestComponent } from './components/record-findings/action-request/action-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListActionsAuthorizationComponent } from './components/authorization-register/list-actions-authorization/list-actions-authorization.component';
import { ActionRequestAuthorizationComponent } from './components/authorization-register/action-request-authorization/action-request-authorization.component';
import { ActionPlanRegisterComponent } from './components/authorization-register/action-plan-register/action-plan-register.component';
import { FollowUpActionComponent } from './components/authorization-register/follow-up-action/follow-up-action.component';
import { EfficacyVerificationComponent } from './components/authorization-register/efficacy-verification/efficacy-verification.component';
import { ListActionsShareComponent } from './components/share-register/list-actions-share/list-actions-share.component';
import { ActionRequestShareComponent } from './components/share-register/action-request-share/action-request-share.component';
import { ActionPlanShareComponent } from './components/share-register/action-plan-share/action-plan-share.component';
import { FollowUpShareComponent } from './components/share-register/follow-up-share/follow-up-share.component';
import { EfficacyVerificationShareComponent } from './components/share-register/efficacy-verification-share/efficacy-verification-share.component';



@NgModule({
  declarations: [
    RecordFindingsComponent,
    AuthorizationRegisterComponent,
    ShareRegisterComponent,
    ListActionsComponent,
    ActionRequestComponent,
    ListActionsAuthorizationComponent,
    ActionRequestAuthorizationComponent,
    ActionPlanRegisterComponent,
    FollowUpActionComponent,
    EfficacyVerificationComponent,
    ListActionsShareComponent,
    ActionRequestShareComponent,
    ActionPlanShareComponent,
    FollowUpShareComponent,
    EfficacyVerificationShareComponent
  ],
  imports: [
    CommonModule,
    ProcessesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[]
})
export class ProcessesModule { }
