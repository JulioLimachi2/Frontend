import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-probability',
  templateUrl: './modal-probability.component.html',
  styleUrls: ['./modal-probability.component.scss']
})
export class ModalProbabilityComponent implements OnInit {

  formProbability: FormGroup;

  dataCategoria = [
    {
      name: 'Muy bajo',
      color: '#36FF33'
    },
    {
      name: 'Bajo',
      color: '#B2D13F'
    },
    {
      name: 'Medio',
      color: '#ffff00'
    },
    {
      name: 'Alto',
      color: '#ff8000'
    },
    {
      name: 'Muy Alto',
      color: '#FF0000'
    }
  ];

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalProbabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formProbability = this.builder.group({
      categoria: [, Validators.required],
      valor: [, Validators.required],
      description: [, Validators.required],
      color: []
    });
  }

  ngOnInit(): void {
    this.data.probability && this.setedit();
  }

  save() {
    const filcolor = this.dataCategoria.find(x => {return x.name === this.formProbability.value.categoria});
    this.formProbability.controls['color'].setValue(filcolor.color);
    const result = this.data.probability ? {edit: this.formProbability.value, index:this.data.index} : {new: this.formProbability.value};
    this.dialogRef.close(result)
  }

  setedit(){
    this.formProbability.patchValue({
      categoria: this.data.probability.categoria,
      valor: this.data.probability.valor,
      description: this.data.probability.description,
      color: this.data.probability.color,
    });
  }

}
