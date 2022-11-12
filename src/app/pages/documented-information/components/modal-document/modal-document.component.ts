import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import uniqid from 'uniqid';

@Component({
  selector: 'app-modal-document',
  templateUrl: './modal-document.component.html',
  styleUrls: ['./modal-document.component.scss']
})
export class ModalDocumentComponent implements OnInit {

  documents = [
    {
      id: 1,
      name: "Documento 1"
    },
    {
      id: 2,
      name: "Documento 2"
    },
    {
      id: 3,
      name: "Documento 3"
    }
  ];

  documentSelected: number;

  formDocument: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formDocument = this.builder.group({
      code: [],
      name: [, Validators.required],
      date: [, Validators.required],
      responsible: [, Validators.required],
      seedoc: [true]
    });
  }

  ngOnInit(): void {
    this.data && this.setEdit(this.data);
  }

  save() {
    if (this.data) {
      this.dialogRef.close({ documentEdit: this.formDocument.value, currentIdDoc: this.data.idDoc, newIdDoc: this.documentSelected });
    } else {
      this.formDocument.controls['code'].setValue(`NTP-ISOIEC-${uniqid()}`);
      this.dialogRef.close({ document: this.formDocument.value, idDoc: this.documentSelected });
    }

  }

  setEdit(data) {
    this.formDocument.patchValue({
      code: data.document.code,
      name: data.document.name,
      date: new Date(data.document.date),
      responsible: data.document.responsible,
      seedoc: data.document.seedoc,
    });
    this.documentSelected = this.data.idDoc;
  }

  uploadFile(event) {
    if (event) {
      let reader = new FileReader();
      let file = event.target.files[0];
      console.log('file', file);
    }
  }

}
