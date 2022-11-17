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
  displayedColumns: string[] = ['documentName','code','version','resolution','dateApproval','applicableSystems','actions'];
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
        id:'NTP-ISOIEC-1',
        documentName: 'PROCEDIMIENTO DE EVALUACIÓN DE LA IDENTIFICACIÓN VISUAL DE LAS OFICINAS',
        code: 'PR-001-UCII-ZRIX',
        version: '3',
        resolution: 'RES. JEF. N°509-2022-SUNARP-ZRN°IX/JEF',
        dateApproval: '01/08/2022',
        applicableSystems : 'SGC SGAS'
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
    const indexdoc = this.dataSource.data.findIndex((x: any) => x.id === this.editData.data.id);
    if(this.editData.changeId){
      this.dataSource.data.splice(indexdoc,1);
    }else{
      this.dataSource.data[indexdoc] = this.editData.data;
    }
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
