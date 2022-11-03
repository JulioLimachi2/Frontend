import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  displayedColumns: string[] = ['codeZone','codeOffice','storeCode', 'name'];
  dataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        codeZone: '10',
        codeOffice: '15',
        storeCode: '25',
        name: 'Oficina 1'
      },
      {
        codeZone: '25',
        codeOffice: '65',
        storeCode: '89',
        name: 'Oficina 2'
      },
      {
        codeZone: '98',
        codeOffice: '54',
        storeCode: '23',
        name: 'Oficina 2'
      },
      {
        codeZone: '6',
        codeOffice: '47',
        storeCode: '4',
        name: 'Oficina 3'
      },
      {
        codeZone: '47',
        codeOffice: '4',
        storeCode: '7',
        name: 'Oficina 4'
      },
      {
        codeZone: '6',
        codeOffice: '8',
        storeCode: '47',
        name: 'Oficina 5'
      },
      {
        codeZone: '2',
        codeOffice: '56',
        storeCode: '75',
        name: 'Oficina 6'
      }
    ]
  }

}
