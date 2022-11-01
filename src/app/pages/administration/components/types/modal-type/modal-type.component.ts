import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-type',
  templateUrl: './modal-type.component.html',
  styleUrls: ['./modal-type.component.scss']
})
export class ModalTypeComponent implements OnInit {

  formType: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalTypeComponent>,
    private builder: FormBuilder) { 
    this.formType = this.builder.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.formType.value);
  }
}
