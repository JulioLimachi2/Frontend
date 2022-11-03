import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-asset-inventory',
  templateUrl: './asset-inventory.component.html',
  styleUrls: ['./asset-inventory.component.scss']
})
export class AssetInventoryComponent implements OnInit {

  displayedColumns: string[] = ['subProcess','codeAsset', 'nameAsset', 'descriptionAsset','typeAsset1','typeAsset2','typeAsset3','typeAsset4','specificLocation','assetValuation'];
  dataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        subProcess: 'EJECUCION DE ACTIVIDADES',
        codeAsset: 'Gestion de Planeamiento y Presupuesto',
        nameAsset: 'No cubrir la integridad de los gastos',
        descriptionAsset: 'Documentación publica proporcionada por oficial y que se presenta a través del sistema',
        typeAsset1: 'Información',
        typeAsset2: 'Electrónica e empresa',
        typeAsset3: 'Jefe de Unidad Registral',
        typeAsset4: 'Confidencial',
        specificLocation: 'Electrónica SIP Sistema de Consulta, Impresa: Escritorio del Asistente Escritorio del Registrador',
        assetValuation: 'Ate'
      },
      {
        subProcess: '',
        codeAsset: '',
        nameAsset: '',
        descriptionAsset: '',
        typeAsset1: '',
        typeAsset2: '',
        typeAsset3: '',
        typeAsset4: '',
        specificLocation: '',
        assetValuation: ''
      }
    ];
  }

}
