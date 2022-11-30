import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from 'src/app/core/services/files.service';
import uniqid from 'uniqid';

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
              private serviceFile: FilesService) { 
    this.formGeneralDocument = this.builder.group({
      id: [],
      documentName: [,Validators.required],
      code: [,Validators.required],
      version:[,Validators.required],
      resolution:[,Validators.required],
      dateApproval: [,Validators.required],
      applicableSystems : [,Validators.required],
      archive: []
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
      this.formGeneralDocument.controls['id'].setValue(uniqid());
      this.onSave.emit({document: this.formGeneralDocument.value, currentIdDoc: this.numberTab});
    }
  }

  setForm(){
    this.formGeneralDocument.patchValue({
      id: this.dataGeneralDoc.id,
      documentName: this.dataGeneralDoc.documentName,
      code: this.dataGeneralDoc.code,
      version: this.dataGeneralDoc.version,
      resolution: this.dataGeneralDoc.resolution,
      dateApproval: new Date(this.dataGeneralDoc.dateApproval),
      applicableSystems : this.dataGeneralDoc.applicableSystems,
      archive: this.dataGeneralDoc.archive
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
