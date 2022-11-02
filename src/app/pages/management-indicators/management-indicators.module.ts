import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './components/management/management.component';
import { ManagementIndicatorsRoutingModule } from './management-indicators-routing.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementIndicatorsRoutingModule
  ]
})
export class ManagementIndicatorsModule { }
