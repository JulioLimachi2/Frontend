import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from 'src/app/core/services/personal.service';

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.scss']
})
export class ModalPersonalComponent implements OnInit {

  formPersonal: FormGroup;
  displayedColumns: string[] = ['code', 'date', 'situation','firstName','lastName','name','group'];
  dataSourcePersonal = new MatTableDataSource<any>([]);
  dataFilterPersonal = [];
  groups = [
    {
      id:1,
      name:'planilla de empleados'
    },
    {
      id:2,
      name:'administradores'
    }
  ];


  constructor(public dialogRef: MatDialogRef<ModalPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private builder: FormBuilder,
    private servicepersonal: PersonalService) {
      this.formPersonal = this.builder.group({
        code: [],
        firstName:[],
        lastName:[],
        name:[],
        group:[],
        situation:[]
      })
     }

  ngOnInit(): void {
    this.getPersonal();
  }

  clear(){
    this.formPersonal.reset();
  }

  search(){
    const resultFiltros = this.dataFilterPersonal.filter(personal => {
      const code = this.formPersonal.value.code ? personal.code === this.formPersonal.value.code : 1;
      const name = this.formPersonal.value.name ? personal.name.toLowerCase() === this.formPersonal.value.name.toLowerCase() : 1;
      const lastName = this.formPersonal.value.lastName ? personal.lastName.toLowerCase() === this.formPersonal.value.lastName.toLowerCase() : 1;
      const firstName = this.formPersonal.value.firstName ? personal.firstName.toLowerCase() === this.formPersonal.value.firstName.toLowerCase() : 1;
      const group = this.formPersonal.value.group ? personal.group.id === this.formPersonal.value.group : 1;
      const situation = this.formPersonal.value.situation === true || this.formPersonal.value.situation === false ? personal.situation === this.formPersonal.value.situation : 1;
      if(code === 1 && name === 1 && lastName === 1 && firstName === 1 && group === 1 && situation === 1){
        return false;
      }
      return  code && name && lastName && firstName && group && situation;
    });
    this.dataSourcePersonal.data = resultFiltros;
  }


  getPersonal(){
    this.servicepersonal.getAllPersonal().subscribe(personal=>{
      console.log('personal',personal);
      this.dataFilterPersonal = personal;
      this.dataSourcePersonal.data = personal;
    })
  }

  emptyData(data){
     if(data !== '' && data !== "" && data !== undefined && data !== null){
      return false
     }
     return true
  }

  selectedRow(row){
    this.dialogRef.close(row);
  }

}
