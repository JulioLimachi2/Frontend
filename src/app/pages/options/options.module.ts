import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOptionsComponent } from './components/main-options/main-options.component';
import { OptionsRoutingModule } from './options-routing.module';
import { SgcIsoComponent } from './components/sgc-iso/sgc-iso.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainOptionsComponent,
    SgcIsoComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    SharedModule
  ]
})
export class OptionsModule { }
