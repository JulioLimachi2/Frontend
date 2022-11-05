import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-treatment',
  templateUrl: './modal-treatment.component.html',
  styleUrls: ['./modal-treatment.component.scss']
})
export class ModalTreatmentComponent implements OnInit {

  formTreatment: FormGroup;

  dataCategoria = [
    {
      name: 'Extremo',
      color: '#FF0000'
    },
    {
      name: 'Alto',
      color: '#ff8000'
    },
    {
      name: 'Medio',
      color: '#ffff00'
    },
    {
      name: 'Ligero',
      color: '#B2D13F'
    },
    {
      name: 'Bajo',
      color: '#36FF33'
    }
  ];

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalTreatmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formTreatment = this.builder.group({
      categoria: [, Validators.required],
      description: [, Validators.required],
      description2: [, Validators.required],
      color: []
    });
  }

  ngOnInit(): void {
    this.data.treatment && this.setedit();
  }

  save() {
    const filcolor = this.dataCategoria.find(x => {return x.name === this.formTreatment.value.categoria});
    this.formTreatment.controls['color'].setValue(filcolor.color);
    const result = this.data.treatment ? {edit: this.formTreatment.value, index:this.data.index} : {new: this.formTreatment.value};
    this.dialogRef.close(result)
  }

  setedit(){
    this.formTreatment.patchValue({
      categoria: this.data.treatment.categoria,
      description: this.data.treatment.description,
      description2: this.data.treatment.description2,
      color: this.data.treatment.color,
    });
  }

}
