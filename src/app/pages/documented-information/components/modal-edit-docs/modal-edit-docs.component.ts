import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-docs',
  templateUrl: './modal-edit-docs.component.html',
  styleUrls: ['./modal-edit-docs.component.scss']
})
export class ModalEditDocsComponent implements OnInit {

  trees = [];
  niveles = [];
  nivel: number = 1;
  constructor(public dialogRef: MatDialogRef<ModalEditDocsComponent>,
    @Inject(MAT_DIALOG_DATA) public docs: any) { }

  ngOnInit(): void {
    console.log('docs modal',this.docs);
    this.trees = this.docs;
    this.niveles.push(this.docs);
    console.log('niveles',this.niveles);
  }

  goSubnivel(tree){
    console.log(tree);
    if(tree?.children?.length){
      console.log('siguiente');
      this.trees = tree.children;
      this.niveles.push(tree.children);
      this.nivel = this.niveles.length;
      console.log('niveles',this.niveles);
      console.log('nivel',this.nivel);
    }
  }

  back(){
    console.log('retroceso');
    const index = this.nivel - 2;
    this.trees = this.niveles[index];
    this.niveles.splice(this.nivel - 1,1);
    this.nivel = this.nivel - 1;
  }

}
