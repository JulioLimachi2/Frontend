import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from 'src/app/core/services/files.service';
import uniqid from 'uniqid';

@Component({
  selector: 'app-actas-form',
  templateUrl: './actas-form.component.html',
  styleUrls: ['./actas-form.component.scss']
})
export class ActasFormComponent implements OnInit {

  @Input() dataActas;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  formActas: FormGroup;
  numberTab: number = 4;
  file: File;
  sizeConvert: string;

  constructor(private builder: FormBuilder,
              private serviceFile: FilesService) { 
    this.formActas = this.builder.group({
      id: [],
      managementSystem:[,Validators.required],
      typeMeeting: [,Validators.required],
      actaNumber: [,Validators.required],
      archive: []
    });
  }

  ngOnInit(): void {
    this.dataActas && this.setForm();
  }

  save(){
    console.log('formActas',this.formActas.value);
    if(this.dataActas){
      this.onSave.emit({document: this.formActas.value, currentIdDoc: this.numberTab});
    }else{
      this.formActas.controls['id'].setValue(uniqid());
      this.onSave.emit({document: this.formActas.value, currentIdDoc: this.numberTab});
    }
  }

  setForm() {
    this.formActas.patchValue({
      id: this.dataActas.id,
      managementSystem: this.dataActas.managementSystem,
      typeMeeting: this.dataActas.typeMeeting,
      actaNumber: this.dataActas.actaNumber,
      archive: this.dataActas.archive,
    });
  }

  uploadFile(event) {
    if (event) {
      this.file = event.target.files[0];
      this.sizeConvert = this.serviceFile.formatBytes(this.file.size);
      this.formActas.controls['archive'].setValue(this.file);
      console.log('file', this.file);
    }
  }

  deleteFile(){
    this.file = null;
    this.formActas.controls['archive'].setValue([]);
  }

}
