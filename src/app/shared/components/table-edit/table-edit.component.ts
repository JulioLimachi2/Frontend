import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { TableColumn } from 'src/app/core/models/TableColumn';
@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit,OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.reset){
      this.setDataSource(this.dataSource);
    }
  }


  public _dataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  indexSelectedRow: number;
  @Input() state: boolean; 
  @Input() reset: number = 0;
  @Input() columns: TableColumn[];
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter();
  @Input() dataSource = [];
  @ViewChild('tbedit', { static: false }) tbEdit: ElementRef;

  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbEdit?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.onSelectRow.emit(null);
    }
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
    this.state && this.displayedColumns.splice(0, 0, 'state');
    this.setDataSource(this.dataSource);
    console.log( " this.displayedColumns ",this.displayedColumns);
  }


  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
  }

  selectedRow(index: number){
    this.indexSelectedRow = index;
    this.onSelectRow.emit(index);
  }
}