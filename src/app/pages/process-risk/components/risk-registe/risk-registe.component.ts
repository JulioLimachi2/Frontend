import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-risk-registe',
  templateUrl: './risk-registe.component.html',
  styleUrls: ['./risk-registe.component.scss']
})
export class RiskRegisteComponent implements OnInit {

  displayedColumns: string[] = ['origin', 'subProcess', 'asset', 'threatOpportunity', 'vulnerabilityStrength',
    'riskCode', 'nameRisk', 'effect', 'probability', 'activeInformationC', 'activeInformationI',
    'activeInformationD', 'valueCid', 'impact', 'riskValue', 'levelRisk', 'existingControls',
    'responsibleDetermination', 'frequencyExecution', 'documentationOrEvidence', 'preventiveCharacter',
    'applicationControl', 'controlEffectiveness', 'residualRiskValue', 'residualrisk', 'treatmentOption'];
  indexSelectedRow: number = null;
  formRiskRegister: FormGroup;
  dataSource = new MatTableDataSource([]);
  editActive: boolean;
  @ViewChild('tbriskRegister', { static: false }) tbRiskRegister: ElementRef;

  constructor(private builder: FormBuilder) {
    this.formRiskRegister = this.builder.group({
      origin: [],
      subProcess: [],
      asset: [],
      threatOpportunity: [],
      vulnerabilityStrength: [],
      riskCode: [],
      nameRisk: [],
      effect: [],
      probability: [],
      activeInformationC: [],
      activeInformationI: [],
      activeInformationD: [],
      valueCid: [],
      impact: [],
      riskValue: [],
      levelRisk: [],
      existingControls: [],
      responsibleDetermination: [],
      frequencyExecution: [],
      documentationOrEvidence: [],
      preventiveCharacter: [],
      applicationControl: [],
      controlEffectiveness: [],
      residualRiskValue: [],
      residualrisk: [],
      treatmentOption: [],
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbRiskRegister?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        origin: 'EJECUCION DE ACTIVIDADES',
        subProcess: 'Gestion de Planteamiento y Presupuesto',
        asset: 'Certificado',
        threatOpportunity: 'No cubrir la integridad de los gastos',
        vulnerabilityStrength: 'Presupuesto aprobado insuficiente',
        riskCode: 'R-UPPM-SGC-01',
        nameRisk: 'No cubrir la integridad de los gastos por presupuesto aprobado insuficiente',
        effect: 'Negativo',
        probability: '4',
        activeInformationC: '1',
        activeInformationI: '1',
        activeInformationD: '3',
        valueCid: 'Mayor',
        impact: '4',
        riskValue: '16',
        levelRisk: 'Alto',
        existingControls: '-Aplicativo de solicitud para renovacion de cert. Digital',
        responsibleDetermination: '3',
        frequencyExecution: '3',
        documentationOrEvidence: '3',
        preventiveCharacter: '2',
        applicationControl: '2',
        controlEffectiveness: '13',
        residualRiskValue: '3',
        residualrisk: 'Ligero',
        treatmentOption: 'Aceptar'
      },
      {
        origin: 'EJECUCION DE ACTIVIDADES',
        subProcess: 'Gestion de Planteamiento y Presupuesto',
        asset: 'Certificado',
        threatOpportunity: 'Mejora en el registro de información para el seguimiento del POI y del presupuesto por centro de costos',
        vulnerabilityStrength: 'Coordinacion constante entre UA, URH y UPPMM para el seguimiento de la ejecucion a nivel de centro de costos',
        riskCode: 'O-UPPM-SGC-01',
        nameRisk: 'Mejora de registro de informacion',
        effect: 'Negativo',
        probability: '4',
        activeInformationC: '1',
        activeInformationI: '1',
        activeInformationD: '3',
        valueCid: 'Mayor',
        impact: '4',
        riskValue: '16',
        levelRisk: 'Alto',
        existingControls: '-Aplicativo de solicitud para renovacion de cert. Digital',
        responsibleDetermination: '3',
        frequencyExecution: '3',
        documentationOrEvidence: '3',
        preventiveCharacter: '2',
        applicationControl: '2',
        controlEffectiveness: '13',
        residualRiskValue: '3',
        residualrisk: 'Ligero',
        treatmentOption: 'Aceptar'
      }
    ]
  }

  selectedRow(index: number) {
    this.indexSelectedRow = index;
    this.formRiskRegister.patchValue({
      origin: this.dataSource.data[index].origin,
      subProcess: this.dataSource.data[index].subProcess,
      asset: this.dataSource.data[index].asset,
      threatOpportunity: this.dataSource.data[index].threatOpportunity,
      vulnerabilityStrength: this.dataSource.data[index].vulnerabilityStrength,
      riskCode: this.dataSource.data[index].riskCode,
      nameRisk: this.dataSource.data[index].nameRisk,
      effect: this.dataSource.data[index].effect,
      probability: this.dataSource.data[index].probability,
      activeInformationC: this.dataSource.data[index].activeInformationC,
      activeInformationI: this.dataSource.data[index].activeInformationI,
      activeInformationD: this.dataSource.data[index].activeInformationD,
      valueCid: this.dataSource.data[index].valueCid,
      impact: this.dataSource.data[index].impact,
      riskValue: this.dataSource.data[index].riskValue,
      levelRisk: this.dataSource.data[index].levelRisk,
      existingControls: this.dataSource.data[index].existingControls,
      responsibleDetermination: this.dataSource.data[index].responsibleDetermination,
      frequencyExecution: this.dataSource.data[index].frequencyExecution,
      documentationOrEvidence: this.dataSource.data[index].documentationOrEvidence,
      preventiveCharacter: this.dataSource.data[index].preventiveCharacter,
      applicationControl: this.dataSource.data[index].applicationControl,
      controlEffectiveness: this.dataSource.data[index].controlEffectiveness,
      residualRiskValue: this.dataSource.data[index].residualRiskValue,
      residualrisk: this.dataSource.data[index].residualrisk,
      treatmentOption: this.dataSource.data[index].treatmentOption,
    });
    this.editActive = true;
  }

  edit() {
    this.dataSource.data[this.indexSelectedRow] = this.formRiskRegister.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.indexSelectedRow = null;
    this.editActive = false;
  }

}
