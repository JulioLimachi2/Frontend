import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-effectiveness',
  templateUrl: './modal-effectiveness.component.html',
  styleUrls: ['./modal-effectiveness.component.scss']
})
export class ModalEffectivenessComponent implements OnInit {

  formEffectiveness: FormGroup;

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
    public dialogRef: MatDialogRef<ModalEffectivenessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formEffectiveness = this.builder.group({
      categoria: [, Validators.required],
      description: [, Validators.required],
      description2: [, Validators.required],
      color: []
    });
  }

  ngOnInit(): void {
    this.data.effectiveness && this.setedit();
  }

  save() {
    const filcolor = this.dataCategoria.find(x => {return x.name === this.formEffectiveness.value.categoria});
    this.formEffectiveness.controls['color'].setValue(filcolor.color);
    const result = this.data.effectiveness ? {edit: this.formEffectiveness.value, index:this.data.index} : {new: this.formEffectiveness.value};
    this.dialogRef.close(result)
  }

  setedit(){
    this.formEffectiveness.patchValue({
      categoria: this.data.effectiveness.categoria,
      description: this.data.effectiveness.description,
      description2: this.data.effectiveness.description2,
      color: this.data.effectiveness.color,
    });
  }


}
