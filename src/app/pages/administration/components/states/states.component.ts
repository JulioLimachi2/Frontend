import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  @ViewChild('tbstate', {static: false}) tbstate: ElementRef;

  displayedColumns: string[] = ['code', 'name'];
  indexSelectedRow: number;
  showForm: boolean;
  formState: FormGroup;
  editActive :boolean;
  dataSource =  new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder) { 
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
    this.dataSource.data = [
      {
        code:'01',
        name:'generado'
      },
      {
        code:'02',
        name:'autorizado'
      },
      {
        code:'03',
        name:'devuelto'
      },
      {
        code:'04',
        name:'pendiente'
      },
      {
        code:'05',
        name:'implementado'
      }
    ];
  }

  save(){
    this.dataSource.data.push(this.formState.value);
    this.showForm = false;
  }

  edit(){
    this.dataSource.data[this.indexSelectedRow] = this.formState.value;
    this.dataSource= new MatTableDataSource(this.dataSource.data)
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  selectedRow(row,index:number){
    this.indexSelectedRow = index;
    this.editActive = true;
    this.formState.patchValue({
      code: row.code,
      name: row.name
    });
  }
  

}
