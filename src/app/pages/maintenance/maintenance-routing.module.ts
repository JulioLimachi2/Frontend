import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { OfficesComponent } from './components/offices/offices.component';
import { AreasComponent } from './components/areas/areas.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'indicators',
    component: IndicatorComponent,
  },
  {
    path: 'offices',
    component: OfficesComponent,
  },
  {
    path: 'areas',
    component: AreasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceRoutingModule {}