import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StateService } from 'src/app/core/services/administration/state.service';
import { ModalStateComponent } from './modal-state/modal-state.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  @ViewChild('tbstate', {static: false}) tbstate: ElementRef;

  displayedColumns: string[] = ['code', 'name','actions'];
  indexSelectedRow: number;
  formState: FormGroup;
  editActive :boolean;
  dataSource =  new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder, public dialog: MatDialog,
              private servicestate: StateService) { 
    this.formState = this.builder.group({
      code: ['',Validators.required],
      name:['',Validators.required]
    })
  }

  @HostListener('document:click',['$event'])
  clickout(event){
    if(!this.tbstate?.nativeElement?.contains(event.target)){
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.getState();
  }

  edit(){
    const idstate = this.dataSource.data[this.indexSelectedRow].id;
    this.servicestate.updateState(this.formState.value,idstate).subscribe(res => {
      this.indexSelectedRow = null;
      this.editActive = false;
      this.getState();
    }); 
  }

  selectedRow(row,index:number){
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formState.patchValue({
      code: row.code,
      name: row.name
    });
  }

  add(){
    const dialogRef = this.dialog.open(ModalStateComponent, {
      width: '500px',
      panelClass:'mdl-noPadding'
    });

    dialogRef.afterClosed().subscribe(state => {
      if(state){
        this.formState.patchValue({
          code: state.code,
          name: state.name,
        });
        this.servicestate.createState(this.formState.value).subscribe(res => {
          this.getState();
        });
      }
    });
  }

  getState(){
    this.servicestate.getState().subscribe(state =>{
      this.dataSource.data = state as any;
    })
  }
  
  delete(state){
    this.servicestate.deleteState(state.id).subscribe(res =>{
      this.getState();
    })
  }

}
