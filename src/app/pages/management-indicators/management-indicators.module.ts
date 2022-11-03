import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './components/management/management.component';
import { ManagementIndicatorsRoutingModule } from './management-indicators-routing.module';
import { PendingComponent } from './components/management/pending/pending.component';
import { ApprovedComponent } from './components/management/approved/approved.component';
import { ReturnedComponent } from './components/management/returned/returned.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ManagementComponent,
    PendingComponent,
    ApprovedComponent,
    ReturnedComponent
  ],
  imports: [
    CommonModule,
    ManagementIndicatorsRoutingModule,
    MaterialModule
  ]
})
export class ManagementIndicatorsModule { }
