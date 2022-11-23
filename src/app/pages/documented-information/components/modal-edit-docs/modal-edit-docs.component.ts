import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeSystemService } from 'src/app/core/services/tree-system.service';

@Component({
  selector: 'app-modal-edit-docs',
  templateUrl: './modal-edit-docs.component.html',
  styleUrls: ['./modal-edit-docs.component.scss']
})
export class ModalEditDocsComponent implements OnInit {

  trees = [];
  niveles = [];
  nivel: number = 1;
  newNode: boolean = false;
  parentNumber: number;

  constructor(public dialogRef: MatDialogRef<ModalEditDocsComponent>,
    @Inject(MAT_DIALOG_DATA) public docs: any,
    private treesystemservice: TreeSystemService) { }

  ngOnInit(): void {
    console.log('docs modal',this.docs);
    this.trees = this.docs;
    this.niveles.push(this.docs);
    this.parentNumber = this.docs[0]?.parent;
    console.log('niveles',this.niveles);
  }

  goSubnivel(tree){
    console.log(tree);
    if(tree?.children?.length){
      console.log('siguiente');
      this.newNode = false;
      this.parentNumber = tree.id;
      this.trees = tree.children;
      this.niveles.push(tree.children);
      this.nivel = this.niveles.length;
      console.log('niveles',this.niveles);
      console.log('nivel',this.nivel);
    }
  }

  back(){
    console.log('retroceso');
    this.newNode = false;
    const index = this.nivel - 2;
    this.trees = this.niveles[index];
    this.niveles.splice(this.nivel - 1,1);
    this.nivel = this.nivel - 1;
  }

  register(){
    this.newNode = true;
    setTimeout(() => {
      this.newNode && document.getElementById('inptnode').focus();
    }, 0);

  }

  save(){
    const nodeName = document.getElementById('inptnode') as HTMLInputElement;
    if(nodeName.value !== ''){
      const request = {
        "name": nodeName.value,
        "parent": this.parentNumber
      }
  
      console.log('request',request);

      this.treesystemservice.newTreeNode(request).subscribe(res =>{
       console.log('new node',res);
      });
    }
   
  }

  delete(nodeId: number){
    console.log('nodeId',nodeId);
    this.treesystemservice.deleteTreeNode(nodeId).subscribe(res =>{
      console.log('delete',res);
    });
  }
}
