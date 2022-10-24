import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ModalMsgComponent } from './components/modal-msg/modal-msg.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsGestionComponent } from './components/options-gestion/options-gestion.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ModalMsgComponent,
    ModalLoginComponent,
    OptionsGestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
