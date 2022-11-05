import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-risk',
  templateUrl: './modal-risk.component.html',
  styleUrls: ['./modal-risk.component.scss']
})
export class ModalRiskComponent implements OnInit {

  formRisk: FormGroup;

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
    public dialogRef: MatDialogRef<ModalRiskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formRisk = this.builder.group({
      categoria: [, Validators.required],
      categoria2: [, Validators.required],
      color: []
    });
  }

  ngOnInit(): void {
    this.data.risk && this.setedit();
  }

  save() {
    const filcolor = this.dataCategoria.find(x => {return x.name === this.formRisk.value.categoria2});
    this.formRisk.controls['color'].setValue(filcolor.color);
    const result = this.data.risk ? {edit: this.formRisk.value, index:this.data.index} : {new: this.formRisk.value};
    this.dialogRef.close(result)
  }

  setedit(){
    this.formRisk.patchValue({
      categoria2: this.data.risk.categoria2,
      categoria: this.data.risk.categoria,
      color: this.data.risk.color,
    });
  }

}
