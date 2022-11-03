import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { OfficesComponent } from './components/offices/offices.component';
import { AreasComponent } from './components/areas/areas.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    IndicatorComponent,
    OfficesComponent,
    AreasComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MaintenanceModule { }
