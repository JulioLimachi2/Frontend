import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private builder: FormBuilder) {
      this.formLogin = this.builder.group({
        user: [,Validators.required],
        pass: [,Validators.required],
        rol:['Facilitador']
      });
     }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.formLogin.valid){
      if(this.formLogin.value.user.toLowerCase() === 'admin'){
        this.formLogin.value.rol = 'Admin';
      }
      localStorage.setItem('userlog',JSON.stringify(this.formLogin.value));
      this.dialogRef.close(this.formLogin.value);
    }
  }
}
