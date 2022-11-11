import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/services/login.service';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private builder: FormBuilder,
    private loginservice: LoginService,
    public dialog: MatDialog) {
      this.formLogin = this.builder.group({
        user: [,Validators.required],
        password: [,Validators.required]
      });
     }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.formLogin.valid){
       this.loginservice.logIn(this.formLogin.value).subscribe(result =>{
         if(result.length){
          localStorage.setItem('userlog',JSON.stringify(result[0]));
          this.dialogRef.close(result[0]);
         }else{
          const dialogRef = this.dialog.open(ModalMsgComponent, {
            width: '550px',
            height: '90px',
            panelClass: 'mdl-msg',
            data: {
              message: 'USUARIO NO VALIDO',
              type: 'danger'
            }
          });
         }
       });      
    }
  }
}
