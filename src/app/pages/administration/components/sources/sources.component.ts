import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalSourceComponent } from './modal-source/modal-source.component';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  @ViewChild('tbsource', { static: false }) tbSource: ElementRef;
  indexSelectedRow: number;
  editActive: boolean;
  displayedColumns: string[] = ['code', 'description', 'corrective', 'upgrade'];
  formSource: FormGroup;

  dataSource = new MatTableDataSource<any>([])

  constructor(private builder: FormBuilder, public dialog: MatDialog) {
    this.formSource = this.builder.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      corrective: [],
      upgrade: []
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbSource?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code: '07256',
        description: 'Hallazgos del Personal',
        corrective: true,
        upgrade: false
      },
      {
        code: '96113',
        description: 'Productos no conformes',
        corrective: false,
        upgrade: false
      },
      {
        code: '95145',
        description: 'Reclamos',
        corrective: false,
        upgrade: false
      },
      {
        code: '32081',
        description: 'Revisión por la dirección',
        corrective: false,
        upgrade: false
      },
      {
        code: '32116',
        description: 'Auditorias Internas',
        corrective: false,
        upgrade: false
      }
    ];
  }

  edit() {
    this.dataSource.data[this.indexSelectedRow] = this.formSource.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formSource.patchValue({
      code: element.code,
      description: element.description,
      corrective: element.corrective,
      upgrade: element.upgrade,
    });
  }

  add() {
    const dialogRef = this.dialog.open(ModalSourceComponent, {
      width: '500px',
      panelClass:'mdl-noPadding'
    });

    dialogRef.afterClosed().subscribe(source => {
      if (source) {
        this.formSource.patchValue({
          code: source.code,
          description: source.description,
          corrective: source.corrective,
          upgrade: source.upgrade,
        });
        this.dataSource.data.push(this.formSource.value);
        this.dataSource = new MatTableDataSource(this.dataSource.data)
      }
    });
  }
}
