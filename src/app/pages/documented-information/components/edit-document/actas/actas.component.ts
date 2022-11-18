import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit, OnChanges {

  @Input() newData;
  @Input() editData;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['managementSystem','typeMeeting','actaNumber','seeDoc','actions'];
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
        id: 'act-01',
        managementSystem:'SGC-SGAS',
        typeMeeting: 'Cómite de sig',
        actaNumber: '1',
        archive: []
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

  downloadArchive(){

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
