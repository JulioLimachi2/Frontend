import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from 'src/app/core/services/files.service';
import uniqid from 'uniqid';

@Component({
  selector: 'app-external-documents',
  templateUrl: './external-documents.component.html',
  styleUrls: ['./external-documents.component.scss']
})
export class ExternalDocumentsComponent implements OnInit {

  @Input() dataExternalDoc;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  formExternalDocument: FormGroup;
  numberTab: number = 3;
  file: File;
  sizeConvert: string;

  constructor(private builder: FormBuilder,
              private serviceFile: FilesService) {
    this.formExternalDocument = this.builder.group({
      id: [],
      documentName: [,Validators.required],
      numberResolution: [,Validators.required],
      date:[,Validators.required],
      archive: []
    });
   }

  ngOnInit(): void {
    this.dataExternalDoc && this.setForm();
  }
  save(){
    console.log('formExternalDocument',this.formExternalDocument.value);
    if(this.dataExternalDoc){
      this.onSave.emit({document: this.formExternalDocument.value, currentIdDoc: this.numberTab});
    }else{
      this.formExternalDocument.controls['id'].setValue(uniqid());
      this.onSave.emit({document: this.formExternalDocument.value, currentIdDoc: this.numberTab});
    }
  }

  setForm() {
    this.formExternalDocument.patchValue({
      id: this.dataExternalDoc.id,
      documentName: this.dataExternalDoc.documentName,
      numberResolution: this.dataExternalDoc.numberResolution,
      date : new Date(this.dataExternalDoc.date),
      archive : this.dataExternalDoc.archive,
    });
  }

  uploadFile(event) {
    if (event) {
      this.file = event.target.files[0];
      this.sizeConvert = this.serviceFile.formatBytes(this.file.size);
      this.formExternalDocument.controls['archive'].setValue(this.file);
      console.log('file', this.file);
    }
  }
  
  deleteFile(){
    this.file = null;
    this.formExternalDocument.controls['archive'].setValue([]);
  }

}
