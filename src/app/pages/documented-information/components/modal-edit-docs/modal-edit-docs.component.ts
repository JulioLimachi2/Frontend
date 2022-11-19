import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-docs',
  templateUrl: './modal-edit-docs.component.html',
  styleUrls: ['./modal-edit-docs.component.scss']
})
export class ModalEditDocsComponent implements OnInit {

  trees = [];
  constructor(public dialogRef: MatDialogRef<ModalEditDocsComponent>,
    @Inject(MAT_DIALOG_DATA) public docs: any) { }

  ngOnInit(): void {
    console.log('docs modal',this.docs);
    this.trees = this.docs;
  }

  goSubnivel(tree){
    console.log(tree);
    if(tree?.children?.length){
      console.log('siguiente');
      this.trees = tree.children;
    }
  }

}
