import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from 'src/app/core/services/files.service';

@Component({
  selector: 'app-general-documents',
  templateUrl: './general-documents.component.html',
  styleUrls: ['./general-documents.component.scss']
})
export class GeneralDocumentsComponent implements OnInit {

  @Input() dataGeneralDoc;
  @Input() changeTypeDoc: boolean = false;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  formGeneralDocument: FormGroup;
  numberTab: number = 1;
  file: File;
  sizeConvert: string;

  constructor(private builder: FormBuilder,
              private serviceFile: FilesService,
              private datePipe: DatePipe) { 
    this.formGeneralDocument = this.builder.group({
      id: [],
      documentName: [,Validators.required],
      code: [,Validators.required],
      version:[,Validators.required],
      resolution:[,Validators.required],
      dateApproval: [,Validators.required],
      applicableSystems : [,Validators.required],
      archive: [],
      typeDoc:['Tipo 1']
    });
  }

  ngOnInit(): void {
    this.dataGeneralDoc && this.setForm();
  }

  save(){
    console.log('formGeneralDocument',this.formGeneralDocument.value);
    if(this.dataGeneralDoc){
      this.onSave.emit({document: this.formGeneralDocument.value, currentIdDoc: this.numberTab});
    }else{
      const dateFormat = this.datePipe.transform(this.formGeneralDocument.value.dateApproval,'yyyy-MM-dd')
      this.formGeneralDocument.controls['dateApproval'].setValue(dateFormat);
      this.onSave.emit({document: this.formGeneralDocument.value, currentIdDoc: this.numberTab});
    }
  }

  setForm(){
    this.formGeneralDocument.patchValue({
      id: this.dataGeneralDoc.id,
      documentName: this.dataGeneralDoc.nombreArchivo,
      code: this.dataGeneralDoc.tpDocuGeneEspe.codigoDocumento,
      version: this.dataGeneralDoc.tpDocuGeneEspe.versionDocumento,
      resolution: this.dataGeneralDoc.tpDocuGeneEspe.codigoResolucion,
      dateApproval: new Date(this.dataGeneralDoc.tpDocuGeneEspe.fechaAprobacion),
      applicableSystems : this.dataGeneralDoc.tpDocuGeneEspe.codigoSistemaAplicable,
      archive: this.dataGeneralDoc.file,
      typeDoc: this.dataGeneralDoc.tpDocuGeneEspe.tipoDocumento
    });
  }

  uploadFile(event) {
    if (event) {
      this.file = event.target.files[0];
      this.sizeConvert = this.serviceFile.formatBytes(this.file.size);
      this.formGeneralDocument.controls['archive'].setValue(this.file);
      console.log('file', this.file);
    }
  }

  deleteFile(){
    this.file = null;
    this.formGeneralDocument.controls['archive'].setValue([]);
  }

}
