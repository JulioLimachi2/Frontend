import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ModalMsgComponent } from './components/modal-msg/modal-msg.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerYearComponent } from './components/datepicker-year/datepicker-year.component';
import { SafePipe } from './pipes/safe.pipe';
import { CardItemComponent } from './components/card-item/card-item.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ModalMsgComponent,
    ModalLoginComponent,
    DatepickerYearComponent,
    SafePipe,
    CardItemComponent,
    TableEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    DatepickerYearComponent,
    SafePipe,
    CardItemComponent,
    TableEditComponent
  ]
})
export class SharedModule { }
