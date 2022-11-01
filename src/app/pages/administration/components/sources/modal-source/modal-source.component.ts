import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-source',
  templateUrl: './modal-source.component.html',
  styleUrls: ['./modal-source.component.scss']
})
export class ModalSourceComponent implements OnInit {

  formSource: FormGroup;
  constructor(public dialogRef: MatDialogRef<ModalSourceComponent>,
    private builder: FormBuilder) {
    this.formSource = this.builder.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      corrective: [false],
      upgrade: [false]
    })
   }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.formSource.value);
  }
}
