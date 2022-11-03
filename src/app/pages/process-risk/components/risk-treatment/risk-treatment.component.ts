import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-risk-treatment',
  templateUrl: './risk-treatment.component.html',
  styleUrls: ['./risk-treatment.component.scss']
})
export class RiskTreatmentComponent implements OnInit {

  displayedColumns: string[] = ['subProcess','type','riskCode', 'riskName', 'riskValue','residualRisk'];
  dataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        subProcess: 'Gestión de Planeamiento y Presupuesto',
        type: 'OPORTUNIDAD',
        riskCode: 'O-UPPM-SGC-01',
        riskName: 'Mejora en el registro de información para el seguimiento del POI y del Presupuesto por centro de costos mediante la coordinación constante entre UA, URH y UPPM para el seguimiento de la ejecución',
        riskValue: '16',
        residualRisk: false
      }
    ];
  }

}
