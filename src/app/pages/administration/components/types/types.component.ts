import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  @ViewChild('tbtypes', { static: false }) tbTypes: ElementRef;
  indexSelectedRow: number;
  editActive: boolean;
  indexSource: number;
  displayedColumns: string[] = ['code', 'description'];
  showForm: boolean;
  formType: FormGroup;

  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder) {
    this.formType = this.builder.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbTypes?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: '1',
        description: 'Correctiva'
      },
      {
        code: '2',
        description: 'Oportunidad de mejora'
      }
    ];
  }

  save() {
    this.dataSource.data.push(this.formType.value);
    this.showForm = false;
  }

  edit() {
    this.dataSource.data[this.indexSelectedRow] = this.formType.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formType.patchValue({
      code: element.code,
      description: element.description
    });
  }

}
