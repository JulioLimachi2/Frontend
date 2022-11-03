import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalMsgComponent } from 'src/app/shared/components/modal-msg/modal-msg.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  displayedColumns: string[] = ['period', 'officeIndicator', 'areaIndicator','name','valorIndicator','metaIndicator','bossUO','cca'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        period:'Enero 2018',
        officeIndicator: 'San Borja',
        areaIndicator: 'Tesoreria',
        name: '% de productos no conformes del servicio de Copia informativa ISO de Partida Registral',
        valorIndicator: '0.17',
        metaIndicator: '<=1%',
        bossUO: true,
        cca: false
      }
    ]
  }

  approved(event){
    if(event.checked){
      const dialogRef = this.dialog.open(ModalMsgComponent, {
        width: '550px',
        height: '90px',
        panelClass: 'mdl-msg',
        data: {
          message: 'Se Aprobo el Indicador Satisfactoriamente',
          type: 'success'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  }

}
