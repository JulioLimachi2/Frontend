import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-asset-inventory',
  templateUrl: './asset-inventory.component.html',
  styleUrls: ['./asset-inventory.component.scss']
})
export class AssetInventoryComponent implements OnInit {

  displayedColumns: string[] = ['subProcess', 'codeAsset', 'nameAsset', 'descriptionAsset', 'typeAsset1', 'typeAsset2', 'typeAsset3', 'typeAsset4', 'specificLocation', 'assetValuation'];
  dataSource = new MatTableDataSource([]);
  indexSelectedRow: number = null;
  editActive: boolean;
  formAssetInventory: FormGroup;
  @ViewChild('tbassetInventory', { static: false }) tbAssetInventory: ElementRef;

  constructor(private builder: FormBuilder) {
    this.formAssetInventory = this.builder.group({
      subProcess: [],
      codeAsset: [],
      nameAsset: [],
      descriptionAsset: [],
      typeAsset1: [],
      typeAsset2: [],
      typeAsset3: [],
      typeAsset4: [],
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

  selectedRow(index: number) {
    this.indexSelectedRow = index;
    this.formAssetInventory.patchValue({
      subProcess: this.dataSource.data[index].subProcess,
      codeAsset: this.dataSource.data[index].codeAsset,
      nameAsset: this.dataSource.data[index].nameAsset,
      descriptionAsset: this.dataSource.data[index].descriptionAsset,
      typeAsset1: this.dataSource.data[index].typeAsset1,
      typeAsset2: this.dataSource.data[index].typeAsset2,
      typeAsset3: this.dataSource.data[index].typeAsset3,
      typeAsset4: this.dataSource.data[index].typeAsset4,
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
}
