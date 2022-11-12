import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEditDocsComponent } from '../modal-edit-docs/modal-edit-docs.component';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

  displayedColumns: string[] = ['code','name','date','responsible','seedoc'];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: 'NTP-ISOIEC 27001-2014',
        name: 'Técnicas de seguridad. Sistemas de gestión de seguridad de la información. Requisitos',
        date: '20/11/2014',
        responsible: 'Coordinación Generales del Sistema Integrado de Gestión',
        seedoc: true
      }
    ]
  }

  selectedRow(index: number){

  }

  newDoc(){
    const dialogRef = this.dialog.open(ModalEditDocsComponent, {
      width: '38%',
      data: this.dataSource.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }
}
