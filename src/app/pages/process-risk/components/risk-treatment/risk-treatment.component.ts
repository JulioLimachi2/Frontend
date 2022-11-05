import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalRiskTreatmentComponent } from './modal-risk-treatment/modal-risk-treatment.component';

@Component({
  selector: 'app-risk-treatment',
  templateUrl: './risk-treatment.component.html',
  styleUrls: ['./risk-treatment.component.scss']
})
export class RiskTreatmentComponent implements OnInit {

  displayedColumns: string[] = ['subProcess', 'type', 'riskCode', 'riskName', 'riskValue',
    'residualRiskBefore', 'assetName', 'referenceControlISO', 'proposedControls',
    'responsible', 'startDate', 'endDate', 'followUp', 'controlImplementationStatus',
    'determinationDefinitionResponsibleParty', 'frequencyExecution', 'documentacionEvidencia',
    'preventiveNature', 'controlApplication', 'effectivenessProposedControl', 'valueResidualRisk',
    'residualRiskAfter', 'comment'];
  formRiskTreatment: FormGroup;
  dataSource = new MatTableDataSource([]);
  indexSelectedRow: number = null;
  editActive: boolean;
  @ViewChild('tbriskTreatment', { static: false }) tbRiskTreatment: ElementRef;
  
  constructor(private builder: FormBuilder,
    public dialog: MatDialog) {
    this.formRiskTreatment = this.builder.group({
      subProcess: [],
      type: [],
      riskCode: [],
      riskName: [],
      riskValue: [],
      residualRiskBefore: [],
      assetName: [],
      referenceControlISO: [],
      proposedControls: [],
      responsible: [],
      startDate: [],
      endDate: [],
      followUp: [],
      controlImplementationStatus: [],
      determinationDefinitionResponsibleParty: [],
      frequencyExecution: [],
      documentacionEvidencia: [],
      preventiveNature: [],
      controlApplication: [],
      effectivenessProposedControl: [],
      valueResidualRisk: [],
      residualRiskAfter: [],
      comment: [],
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbRiskTreatment?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        subProcess: 'Gestión de Planeamiento y Presupuesto',
        type: 'OPORTUNIDAD',
        riskCode: 'O-UPPM-SGC-01',
        riskName: 'Mejora en el registro de información para el seguimiento del POI y del Presupuesto por centro de costos mediante la coordinación constante entre UA, URH y UPPM para el seguimiento de la ejecución',
        riskValue: '16',
        residualRiskBefore: false,
        assetName: '',
        referenceControlISO: '',
        proposedControls: '',
        responsible: '',
        startDate: '',
        endDate: '',
        followUp: '',
        controlImplementationStatus: '',
        determinationDefinitionResponsibleParty: '',
        frequencyExecution: '',
        documentacionEvidencia: '',
        preventiveNature: '',
        controlApplication: '',
        effectivenessProposedControl: '',
        valueResidualRisk: '',
        residualRiskAfter: '',
        comment: ''
      }
    ];
  }

  selectedRow(index: number) {
    this.indexSelectedRow = index;
    this.formRiskTreatment.patchValue({
      subProcess: this.dataSource.data[index].subProcess,
      type: this.dataSource.data[index].type,
      riskCode: this.dataSource.data[index].riskCode,
      riskName: this.dataSource.data[index].riskName,
      riskValue: this.dataSource.data[index].riskValue,
      residualRiskBefore: this.dataSource.data[index].residualRiskBefore,
      assetName: this.dataSource.data[index].assetName,
      referenceControlISO: this.dataSource.data[index].referenceControlISO,
      proposedControls: this.dataSource.data[index].proposedControls,
      responsible: this.dataSource.data[index].responsible,
      startDate: this.dataSource.data[index].startDate,
      endDate: this.dataSource.data[index].endDate,
      followUp: this.dataSource.data[index].followUp,
      controlImplementationStatus: this.dataSource.data[index].controlImplementationStatus,
      determinationDefinitionResponsibleParty: this.dataSource.data[index].determinationDefinitionResponsibleParty,
      frequencyExecution: this.dataSource.data[index].frequencyExecution,
      documentacionEvidencia: this.dataSource.data[index].documentacionEvidencia,
      preventiveNature: this.dataSource.data[index].preventiveNature,
      controlApplication: this.dataSource.data[index].controlApplication,
      effectivenessProposedControl: this.dataSource.data[index].effectivenessProposedControl,
      valueResidualRisk: this.dataSource.data[index].valueResidualRisk,
      residualRiskAfter: this.dataSource.data[index].residualRiskAfter,
      comment: this.dataSource.data[index].comment
    });
  }


  openModalTreatment(index?: number): void {
    index !==null && (this.indexSelectedRow = index);
    const data = index !==null && this.dataSource.data[index];
    const dialogRef = this.dialog.open(ModalRiskTreatmentComponent, {
      width: '1000px',
      panelClass:'mdl-noPadding',
      data: {treatment:data,index:this.indexSelectedRow}
    });

    dialogRef.afterClosed().subscribe(riskTreatment => {
      if(riskTreatment?.new){
        this.dataSource.data.push(riskTreatment.new);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
      if(riskTreatment?.edit){
        this.dataSource.data[riskTreatment.index] = riskTreatment.edit;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.indexSelectedRow = null;
      }
    });
  }

}
