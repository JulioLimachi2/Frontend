import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TipoAccionService } from 'src/app/core/services/administration/tipo-accion.service';
import { ModalTypeComponent } from './modal-type/modal-type.component';

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
  displayedColumns: string[] = ['code', 'description','actions'];
  formType: FormGroup;

  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder, public dialog: MatDialog,
              private typeservice: TipoAccionService) {
    this.formType = this.builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      flagReqIso: ["false"],
      label: [""]
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
    this.getTipos();
  }

  edit() {
    const idtype = this.dataSource.data[this.indexSelectedRow].id;
    this.typeservice.updateTipo(this.formType.value,idtype).subscribe(res => {
      this.indexSelectedRow = null;
      this.editActive = false;
      this.getTipos();
    });
  }

  selectedRow(element, index: number) {
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formType.patchValue({
      code: element.code,
      name: element.name
    });
  }

  add() {
    const dialogRef = this.dialog.open(ModalTypeComponent, {
      width: '500px',
      panelClass: 'mdl-noPadding'
    });

    dialogRef.afterClosed().subscribe(type => {
      if (type) {
        this.formType.patchValue({
          code: type.code,
          name: type.name
        });
        this.typeservice.createTipo(this.formType.value).subscribe(res => {
          this.getTipos();
        })
      }
    });
  }

  getTipos(){
    this.typeservice.getTipo().subscribe(tipos => {
      this.dataSource.data = tipos as any
    })
  }

  delete(state){
    this.typeservice.deleteTipo(state.id).subscribe(res =>{
      this.getTipos();
    })
  }

}
