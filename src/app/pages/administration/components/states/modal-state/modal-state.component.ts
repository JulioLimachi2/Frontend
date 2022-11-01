import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-state',
  templateUrl: './modal-state.component.html',
  styleUrls: ['./modal-state.component.scss']
})
export class ModalStateComponent implements OnInit {

  formState: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalStateComponent>,
    private builder: FormBuilder) {
      this.formState = this.builder.group({
        code: ['',Validators.required],
        name:['',Validators.required]
      })
    }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.formState.value);
  }
}
