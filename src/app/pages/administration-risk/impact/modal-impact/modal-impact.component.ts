import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-impact',
  templateUrl: './modal-impact.component.html',
  styleUrls: ['./modal-impact.component.scss']
})
export class ModalImpactComponent implements OnInit {

  formImpact: FormGroup;

  dataCategoria = [
    {
      name: 'Extremo',
      color: '#FF0000'
    },
    {
      name: 'Mayor',
      color: '#ff8000'
    },
    {
      name: 'Moderado',
      color: '#ffff00'
    },
    {
      name: 'Moderado',
      color: '#B2D13F'
    },
    {
      name: 'Insignificativo',
      color: '#36FF33'
    }
  ];

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalImpactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formImpact = this.builder.group({
      categoria: [, Validators.required],
      valor: [, Validators.required],
      negativo: [, Validators.required],
      positivo: [, Validators.required],
      color: []
    });
  }

  ngOnInit(): void {
    this.data.impact && this.setedit();
  }

  save() {
    const filcolor = this.dataCategoria.find(x => {return x.name === this.formImpact.value.categoria});
    this.formImpact.controls['color'].setValue(filcolor.color);
    const result = this.data.impact ? {edit: this.formImpact.value, index:this.data.index} : {new: this.formImpact.value};
    this.dialogRef.close(result)
  }

  setedit(){
    this.formImpact.patchValue({
      categoria: this.data.impact.categoria,
      valor: this.data.impact.valor,
      negativo: this.data.impact.negativo,
      positivo: this.data.impact.positivo,
      color: this.data.impact.color,
    });
  }
}
