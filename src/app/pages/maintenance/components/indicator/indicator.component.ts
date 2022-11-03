import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  formUser: FormGroup;
  @ViewChild('tbindicator', { static: false }) tbIndicator: ElementRef;
  displayedColumns: string[] = ['code', 'name', 'lastNames', 'user'];
  dataSource = new MatTableDataSource<any>([]);
  dataSourceIndicators = new MatTableDataSource<any>([]);
  indexSelectedRow: number = null;

  constructor(private builder: FormBuilder) {
    this.formUser = this.builder.group({
      code: [, Validators.required],
      name: [, Validators.required],
      lastNames: [, Validators.required]
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbIndicator?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
    }
  }

  ngOnInit(): void {
  }

  save() {
    this.dataSource.data.push(this.formUser.value);
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
    this.formUser.reset();
  }

  selectedRow(index: number) {
    this.indexSelectedRow = index;
  }

  add() {
    this.dataSourceIndicators.data.push(this.dataSource.data[this.indexSelectedRow]);
    this.dataSourceIndicators = new MatTableDataSource<any>(this.dataSourceIndicators.data);
    this.dataSource.data.splice(this.indexSelectedRow, 1);
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
    this.indexSelectedRow = null;
  }
}
