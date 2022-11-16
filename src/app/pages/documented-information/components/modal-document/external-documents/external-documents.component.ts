import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private builder: FormBuilder) {
    this.formExternalDocument = this.builder.group({
      id: [],
      documentName: [,Validators.required],
      numberResolution: [,Validators.required],
      date:[,Validators.required],
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
      date : new Date(this.dataExternalDoc.date)
    });
  }
  

}
