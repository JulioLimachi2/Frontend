import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formUser: FormGroup;
  displayedColumns: string[] = ['code', 'name', 'lastNames','user'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private builder: FormBuilder) {
    this.formUser = this.builder.group({
       code:[,Validators.required],
       name:[,Validators.required],
       lastNames:[,Validators.required]
    });
   }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        code:'0001',
        name:'miguel',
        lastNames: 'armas',
        user: 'MGA78'
      },
      {
        code:'0002',
        name:'ana',
        lastNames: 'lopez',
        user: 'AN48'
      },
      {
        code:'0003',
        name:'juan',
        lastNames: 'flores',
        user: 'JUA4587'
      },
      {
        code:'0004',
        name:'alberto',
        lastNames: 'torres',
        user: 'ALB48'
      },
      {
        code:'0005',
        name:'pablo',
        lastNames: 'rodriguez',
        user: 'PAB487'
      }
    ];
  }

  save(){
     this.dataSource.data.push(this.formUser.value);
     this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
     this.formUser.reset();
  }
}
