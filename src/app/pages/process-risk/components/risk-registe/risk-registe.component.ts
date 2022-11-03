import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-risk-registe',
  templateUrl: './risk-registe.component.html',
  styleUrls: ['./risk-registe.component.scss']
})
export class RiskRegisteComponent implements OnInit {

  displayedColumns: string[] = ['origin', 'subProcess', 'threatOpportunity', 'vulnerabilityStrength','riskCode','nameRisk'];
  dataSource = new MatTableDataSource([]);
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        origin: 'EJECUCION DE ACTIVIDADES',
        subProcess: 'Gestion de Planteamiento y Presupuesto',
        threatOpportunity: 'No cubrir la integridad de los gastos',
        vulnerabilityStrength: 'Presupuesto aprobado insuficiente',
        riskCode: 'R-UPPM-SGC-01',
        nameRisk: 'No cubrir la integridad de los gastos por presupuesto aprobado insuficiente'
      },
      {
        origin: 'EJECUCION DE ACTIVIDADES',
        subProcess: 'Gestion de Planteamiento y Presupuesto',
        threatOpportunity: 'Mejora en el registro de información para el seguimiento del POI y del presupuesto por centro de costos',
        vulnerabilityStrength: 'Coordinacion constante entre UA, URH y UPPMM para el seguimiento de la ejecucion a nivel de centro de costos',
        riskCode: 'O-UPPM-SGC-01',
        nameRisk: 'Mejora de registro de informacion'
      }
    ]
  }

}
