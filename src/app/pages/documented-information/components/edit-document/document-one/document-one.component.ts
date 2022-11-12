import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-document-one',
  templateUrl: './document-one.component.html',
  styleUrls: ['./document-one.component.scss']
})
export class DocumentOneComponent implements OnInit, OnChanges {

  @Input() newData;
  @Input() editData;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['code','name','date','responsible','seedoc','actions'];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.newData){
      this.setNewData(this.newData);
    }
    if(changes.editData){
      this.editData && this.refreshDocument();
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: 'NTP-ISOIEC 27001-2014',
        name: 'Técnicas de seguridad. Sistemas de gestión de seguridad de la información. Requisitos',
        date: 'Thu Nov 20 2014 16:42:49 GMT-0500 (hora estándar de Perú)',
        responsible: 'Coordinación Generales del Sistema Integrado de Gestión',
        seedoc: true
      }
    ]
  }

  setNewData(data){
    this.dataSource.data.push(data);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  edit(document){
    this.onEdit.emit({document: document, idDoc: 1});
  }

  refreshDocument(){
    const indexdoc = this.dataSource.data.findIndex((x: any) => x.code === this.editData.data.code);
    if(this.editData.changeId){
      this.dataSource.data.splice(indexdoc,1);
    }else{
      this.dataSource.data[indexdoc] = this.editData.data;
    }
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
