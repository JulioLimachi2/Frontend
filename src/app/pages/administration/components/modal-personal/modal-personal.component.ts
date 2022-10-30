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

  stringRequest = [];

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
    this.stringRequest = [];
    let consulta;
    console.log('campos no vacios',this.getrequestFil(this.formPersonal));
    const filt = this.dataFilterPersonal.filter(personal => {
      const code = this.formPersonal.value.code ? (personal.code === this.formPersonal.value.code) : null;
      // for(let i = 0 ; i < this.stringRequest.length ; i++){
      //       if(this.stringRequest[i] == 'code'){
      //         consulta = personal.code === this.formPersonal.value.code
      //       }
      // }
      //this.formPersonal.value.code && 
      
      const name = this.formPersonal.value.name ? personal.name === this.formPersonal.value.name : null;
     // name && (name)
      const lastName = this.formPersonal.value.lastName ? personal.lastName === this.formPersonal.value.lastName : null;
      const firstName = this.formPersonal.value.firstName ? personal.firstName === this.formPersonal.value.firstName : null;
      const group = this.formPersonal.value.group ? personal.group.id === this.formPersonal.value.group : null;
      const situation = this.formPersonal.value.situation ? personal.situation === this.formPersonal.value.situation : null;
      //this.stringRequest.push(code,name);
      console.log('consulta', code);
      return  personal.code === this.formPersonal.value.code || personal.name === this.formPersonal.value.name;
    });

    console.log('filt',filt);
    //console.log('frormrm',this.getrequestFil(opserve,this.formPersonal))
    // for(let i = 0 ; i < Object.entries(this.formPersonal.value).length ; i++){
    //   //console.log('objeto',Object.entries(this.formPersonal.value)[i]);
    //   if(!this.emptyData(Object.entries(this.formPersonal.value)[i][1])){
    //     console.log('objeto',Object.entries(this.formPersonal.value)[i]);
    //     const name = Object.entries(this.formPersonal.value)[i][0];
    //     console.log(`personal.${name} === ${this.formPersonal.value[name]}`);
    //     this.stringRequest.push(`personal.${name} === ${this.formPersonal.value[name]}`);
    //   }
    // }
      
      console.log('stringRequest',this.stringRequest);
      console.log('stringRequest separado',this.stringRequest.toString().replace(/,/gi,` && `));
  }

  getrequestFil(formgroup: FormGroup){
    for(let i = 0 ; i < Object.entries(formgroup.value).length ; i++){
      //console.log('objeto',Object.entries(this.formPersonal.value)[i]);
      if(!this.emptyData(Object.entries(formgroup.value)[i][1])){
        console.log('objeto',Object.entries(formgroup.value)[i]);
        const name = Object.entries(formgroup.value)[i][0];
        console.log(`personal.${name} === ${formgroup.value[name]}`);
        this.stringRequest.push(name);
        
      }
    }
    return this.stringRequest;
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
