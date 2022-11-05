import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-asset-inventory',
  templateUrl: './modal-asset-inventory.component.html',
  styleUrls: ['./modal-asset-inventory.component.scss']
})
export class ModalAssetInventoryComponent implements OnInit {

  formAssetInventory: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModalAssetInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
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

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.formAssetInventory.value);
  }
}
