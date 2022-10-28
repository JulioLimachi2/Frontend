import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-facilitators',
  templateUrl: './facilitators.component.html',
  styleUrls: ['./facilitators.component.scss']
})
export class FacilitatorsComponent implements OnInit {

  @ViewChild('tbfacilitator', { static: false }) tbFacilitator: ElementRef;
  indexSelectedRow: number;
  editActive: boolean;
  indexSource: number;
  displayedColumns: string[] = ['code', 'name', 'state'];
  showForm: boolean;
  formFacilitador: FormGroup;

  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder) {
    this.formFacilitador = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: []
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbFacilitator?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: '07256',
        name: 'Borja Espinoza Tula Maria',
        state: true
      },
      {
        code: '96113',
        name: 'Abarca Cajigas Patricia Ivonne',
        state: false
      },
      {
        code: '95145',
        name: 'Chavez Solano Enrique Obed',
        state: false
      },
      {
        code: '32081',
        name: 'Gutierrez Enriquez Maria Tatiana',
        state: false
      },
      {
        code: '32116',
        name: 'Li Loo Francisco Fernando',
        state: false
      }
    ];
  }

  save() {
    this.dataSource.data.push(this.formFacilitador.value);
    this.showForm = false;
  }

  edit() {
    this.dataSource.data[this.indexSelectedRow] = this.formFacilitador.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formFacilitador.patchValue({
      code: element.code,
      name: element.name,
      state: element.state,
    });
  }
}
