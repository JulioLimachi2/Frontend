import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-document-three',
  templateUrl: './document-three.component.html',
  styleUrls: ['./document-three.component.scss']
})
export class DocumentThreeComponent implements OnInit, OnChanges {

  @Input() newData;
  @Input() editData;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['documentName','numberResolution','date','archive','actions'];
  dataSource = new MatTableDataSource();

  constructor() { }

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
        id:'NTP-ISOIEC-3',
        documentName: 'Presupuesto inicial de apertura año fiscal 2022',
        numberResolution: 'Resolución N° 210-2021 - SUNARP/SN',
        date : 'Wed Dec 29 2021 12:29:32 GMT-0500 (hora estándar de Perú)',
        archive:[]
      }
    ]
  }

  setNewData(data){
    this.dataSource.data.push(data);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  edit(document){
    this.onEdit.emit({document: document});
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

  downloadArchive(){
    
  }

}
