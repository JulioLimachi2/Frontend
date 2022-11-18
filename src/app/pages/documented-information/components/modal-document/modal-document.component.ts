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
      name: "Documentos Generales y Específicos"
    },
    {
      id: 2,
      name: " Documentos Internos "
    },
    {
      id: 3,
      name: "Documentos Externos"
    },
    {
      id: 4,
      name: "Actas"
    }
  ];

  documentSelected = 1;

  formDocument: FormGroup;
  dataGeneralDoc;
  dataInternalDoc;
  dataExternalDoc;
  dataActas;
  changeTypeDoc: boolean = false
  currentTab: number;
  currentData;

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
    this.data.dataForm && this.setEdit(this.data);
    this.currentTab = this.data.tab + 1;
    this.documentSelected = this.data.tab + 1;
    this.currentData = this.data.dataForm;
  }

  save(dataForm) {
    if (this.data.dataForm) {
      this.dialogRef.close({documentEdit:dataForm.document, currentIdDoc:this.currentTab, newIdDoc: this.documentSelected, beforeData:this.currentData });
    } else {
      this.formDocument.controls['code'].setValue(`NTP-ISOIEC-${uniqid()}`);
      this.dialogRef.close({ document: dataForm.document, idDoc: this.documentSelected });
    }

  }

  docsChange(){
    this.changeTypeDoc = true;
    console.log('this.documentSelected',this.documentSelected);
  }

  setEdit(data) {
    if((data.tab + 1) === 1){
       this.dataGeneralDoc = data.dataForm.document;
    }
    if((data.tab + 1) === 2){
      this.dataInternalDoc = data.dataForm.document;
    }
    if((data.tab + 1) === 3){
      this.dataExternalDoc = data.dataForm.document;
    }
    if((data.tab + 1) === 4){
      this.dataActas = data.dataForm.document;
    }
   
  }


  getTitleModal(){
    const document = this.documents.find(x => x.id === this.documentSelected);
    return document.name
  }

}
