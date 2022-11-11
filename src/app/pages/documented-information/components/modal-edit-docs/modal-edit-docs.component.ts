import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-docs',
  templateUrl: './modal-edit-docs.component.html',
  styleUrls: ['./modal-edit-docs.component.scss']
})
export class ModalEditDocsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalEditDocsComponent>,
    @Inject(MAT_DIALOG_DATA) public docs: any) { }

  ngOnInit(): void {
    console.log('docs modal',this.docs);
  }

}
