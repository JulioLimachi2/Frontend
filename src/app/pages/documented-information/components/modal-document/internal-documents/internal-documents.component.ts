import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from 'src/app/core/services/files.service';
import uniqid from 'uniqid';

@Component({
  selector: 'app-internal-documents',
  templateUrl: './internal-documents.component.html',
  styleUrls: ['./internal-documents.component.scss']
})
export class InternalDocumentsComponent implements OnInit {

  @Input() dataInternalDoc;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  formInternalDocument: FormGroup;
  numberTab: number = 2;
  file: File;
  sizeConvert: string;

  constructor(private builder: FormBuilder,
              private serviceFile: FilesService) {
    this.formInternalDocument = this.builder.group({
      id:[],
      documentName: [, Validators.required],
      numberResolution: [, Validators.required],
      date: [, Validators.required],
      archive: []
    });
  }

  ngOnInit(): void {
    this.dataInternalDoc && this.setForm();
  }

  save() {
    console.log('formInternalDocument',this.formInternalDocument.value);
    if(this.dataInternalDoc){
      this.onSave.emit({document: this.formInternalDocument.value, currentIdDoc: this.numberTab});
    }else{
      this.formInternalDocument.controls['id'].setValue(uniqid());
      this.onSave.emit({document: this.formInternalDocument.value, currentIdDoc: this.numberTab});
    }
  }

  setForm() {
    this.formInternalDocument.patchValue({
      id: this.dataInternalDoc.id,
      documentName: this.dataInternalDoc.documentName,
      numberResolution: this.dataInternalDoc.numberResolution,
      date : new Date(this.dataInternalDoc.date),
      archive: this.dataInternalDoc.archive
    });
  }

  uploadFile(event) {
    if (event) {
      this.file = event.target.files[0];
      this.sizeConvert = this.serviceFile.formatBytes(this.file.size);
      this.formInternalDocument.controls['archive'].setValue(this.file);
      console.log('file', this.file);
    }
  }

  deleteFile(){
    this.file = null;
    this.formInternalDocument.controls['archive'].setValue([]);
  }
}
