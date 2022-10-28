import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit {

  @ViewChild('tbofficer', { static: false }) tbOfficer: ElementRef;
  indexSelectedRow: number;
  editActive: boolean;
  indexSource: number;
  displayedColumns: string[] = ['code', 'name', 'state'];
  showForm: boolean;
  formOfficer: FormGroup;
  indexFacilitator: number;

  dataSource = new MatTableDataSource<any>([]);

    constructor(private builder: FormBuilder) {
    this.formOfficer = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbOfficer?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: '20009',
        name: 'Borja Espinoza Tula Maria',
        state: true  
      },
      {
        code: '24041',
        name: 'Llanos Barrios Patricia',
        state: false
      }
    ];
  }

  save(){
      this.dataSource.data.push(this.formOfficer.value);
    this.showForm = false;
  }

  edit(){
    this.dataSource.data[this.indexSelectedRow] = this.formOfficer.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formOfficer.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

}
