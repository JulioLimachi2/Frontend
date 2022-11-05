import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalAssetInventoryComponent } from './modal-asset-inventory/modal-asset-inventory.component';

@Component({
  selector: 'app-asset-inventory',
  templateUrl: './asset-inventory.component.html',
  styleUrls: ['./asset-inventory.component.scss']
})
export class AssetInventoryComponent implements OnInit {

  displayedColumns: string[] = ['subProcess', 'codeAsset', 'nameAsset', 'descriptionAsset', 'typeAsset', 'assetClass', 'ownerAsset', 'classificationInformation', 'specificLocation', 'assetValuation'];
  dataSource = new MatTableDataSource([]);
  indexSelectedRow: number = null;
  editActive: boolean;
  formAssetInventory: FormGroup;
  @ViewChild('tbassetInventory', { static: false }) tbAssetInventory: ElementRef;

  constructor(private builder: FormBuilder,
    public dialog: MatDialog) {
    this.formAssetInventory = this.builder.group({
      subProcess: [],
      codeAsset: [],
      nameAsset: [],
      descriptionAsset: [],
      typeAsset: [],
      assetClass: [],
      ownerAsset: [],
      classificationInformation: [],
      specificLocation: [],
      assetValuation: [],
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.tbAssetInventory?.nativeElement?.contains(event.target)) {
      this.indexSelectedRow = null;
      this.editActive = false;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        subProcess: 'EJECUCION DE ACTIVIDADES',
        codeAsset: 'Gestion de Planeamiento y Presupuesto',
        nameAsset: 'No cubrir la integridad de los gastos',
        descriptionAsset: 'Documentación publica proporcionada por oficial y que se presenta a través del sistema',
        typeAsset: 'Información',
        assetClass: 'Electrónica e Impresa',
        ownerAsset: 'Jefe de Unidad Registral',
        classificationInformation: 'Confidencial',
        specificLocation: 'Electrónica SIP Sistema de Consulta, Impresa: Escritorio del Asistente Escritorio del Registrador',
        assetValuation: 'Ate'
      },
      {
        subProcess: '',
        codeAsset: '',
        nameAsset: '',
        descriptionAsset: '',
        typeAsset: '',
        assetClass: '',
        ownerAsset: '',
        classificationInformation: '',
        specificLocation: '',
        assetValuation: ''
      }
    ];
  }

  selectedRow(index: number) {
    this.indexSelectedRow = index;
    this.formAssetInventory.patchValue({
      subProcess: this.dataSource.data[index].subProcess,
      codeAsset: this.dataSource.data[index].codeAsset,
      nameAsset: this.dataSource.data[index].nameAsset,
      descriptionAsset: this.dataSource.data[index].descriptionAsset,
      typeAsset: this.dataSource.data[index].typeAsset,
      assetClass: this.dataSource.data[index].assetClass,
      ownerAsset: this.dataSource.data[index].ownerAsset,
      classificationInformation: this.dataSource.data[index].classificationInformation,
      specificLocation: this.dataSource.data[index].specificLocation,
      assetValuation: this.dataSource.data[index].assetValuation
    })
    this.editActive = true;
  }

  edit() {
    this.dataSource.data[this.indexSelectedRow] = this.formAssetInventory.value;
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.indexSelectedRow = null;
    this.editActive = false;
  }

  add(): void {
    const dialogRef = this.dialog.open(ModalAssetInventoryComponent, {
      width: '800px',
      panelClass:'mdl-noPadding',
    });

    dialogRef.afterClosed().subscribe(assetInventory => {
      if(assetInventory){
        this.dataSource.data.push(assetInventory);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
    });
  }
}
