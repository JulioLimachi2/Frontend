import { Component, Input, OnInit } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { TableColumn } from 'src/app/core/models/TableColumn';
@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent implements OnInit {


  public _dataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @Input() columns: TableColumn[];


  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }


  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
    console.log( " this.displayedColumns ",this.displayedColumns );
    
  }


  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
  }
}