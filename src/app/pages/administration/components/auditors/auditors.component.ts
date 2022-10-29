import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalPersonalComponent } from '../modal-personal/modal-personal.component';

@Component({
  selector: 'app-auditors',
  templateUrl: './auditors.component.html',
  styleUrls: ['./auditors.component.scss']
})
export class AuditorsComponent implements OnInit {

  @ViewChild('tbauditors', { static: false }) tbAuditors: ElementRef;
  indexSelectedRow: number;
  editActive: boolean;
  indexSource: number;
  displayedColumns: string[] = ['code', 'name', 'state'];
  showForm: boolean;
  formAuditors: FormGroup;

  dataSource = new MatTableDataSource<any>([]);

    constructor(private builder: FormBuilder,public dialog: MatDialog) {
    this.formAuditors = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbAuditors?.nativeElement?.contains(event.target)) {
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
      this.dataSource.data.push(this.formAuditors.value);
    this.showForm = false;
  }

  edit(){
    this.dataSource.data[this.indexSelectedRow] = this.formAuditors.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formAuditors.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }

  add(){
    const dialogRef = this.dialog.open(ModalPersonalComponent, {
      width: '1000px',
      panelClass:'modal-personal',
      data: {}
    });

    dialogRef.afterClosed().subscribe(personal => {
      if(personal){
        this.formAuditors.patchValue({
          code: personal.code,
          name: `${personal.firstName} ${personal.lastName} ${personal.name}` ,
          state: personal.situation,
        });
        this.dataSource.data.push(this.formAuditors.value);
        this.dataSource = new MatTableDataSource(this.dataSource.data)
      }
    });
  }

}
