import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { OfficesComponent } from './components/offices/offices.component';
import { AreasComponent } from './components/areas/areas.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    IndicatorComponent,
    OfficesComponent,
    AreasComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
