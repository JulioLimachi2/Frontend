import { Component, HostListener, Inject, OnInit } from '@angular/core';
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
  indexSelected: number;
  title: string='Documentos';
  inputNode: HTMLInputElement;
  updateStatus: boolean;
  eventInputTraget;

  @HostListener('document:click',['$event'])
  clickOut(event){
    if(this.indexSelected >= 0){
      if(this.eventInputTraget !== event.target){
        this.trees[this.indexSelected]?.name ? this.inputNode.value = `${this.indexSelected}. ${this.trees[this.indexSelected].name}` : null;
        this.inputNode.onfocus;
        this.eventInputTraget = null;
        this.updateStatus = false; 
      }      
    }
    
  }

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

  clickInpt(event){
    if(this.indexSelected >=0){
      this.eventInputTraget = event.target;
    }
  }

  goSubnivel(tree){
    console.log(tree);
      this.title=tree.name;
      console.log('siguiente');
      this.newNode = false;
      this.parentNumber = tree.id;
      this.trees = tree.children ?? [];
      this.niveles.push(tree.children ?? []);
      this.nivel = this.niveles.length;
      console.log('niveles',this.niveles);
      console.log('nivel',this.nivel);
  }

  back(){
    console.log('retroceso');
    this.newNode = false;
    const index = this.nivel - 2;
    console.log( " this.trees",this.trees);
    this.trees = this.niveles[index];
    this.niveles.splice(this.nivel - 1,1);
    this.nivel = this.nivel - 1;
    const abuscar =  this.niveles[this.niveles.length - 2];
    if(abuscar){
      const nodoPadre = abuscar.filter(x => {
        return x.id === this.niveles[this.niveles.length - 1][0].parent;
      });
      this.title= nodoPadre[0].name;
    }else{
      this.title= 'Documentos';
    }
  }

  register(){
    this.newNode = true;
    setTimeout(() => {
      this.newNode && document.getElementById('inptnode').focus();
    }, 0);

  }

  save(){
    const nodeName = document.getElementById('inptnode') as HTMLInputElement;
    let request;
    if(nodeName.value !== ''){
      if(this.nivel === 1 && this.trees.length){
        request = {
          "name": nodeName.value
        }
      }else{
        request = {
          "name": nodeName.value,
          "parent": this.parentNumber
        }
      }
  
      console.log('request',request);

      this.treesystemservice.newTreeNode(request).subscribe(res =>{
       console.log('new node',res);
       this.refreshNode();
      });
    }
   
  }

  update(index: number){
    console.log("tree update",this.trees[index]);
    this.indexSelected >= 0 && this.resetFocusInput();
    setTimeout(() => {
      this.indexSelected = index;
      this.inputNode = document.getElementById(`node${index}`) as HTMLInputElement;
      this.inputNode.focus();
      this.inputNode.value = '';
      this.inputNode.value = this.trees[this.indexSelected].name;
      this.inputNode.readOnly = false;
      this.updateStatus = true;
    }, 0);
  }

  resetFocusInput(){
    if(this.indexSelected){
      this.inputNode.readOnly = true;
      this.trees[this.indexSelected]?.name ? this.inputNode.value = `${this.indexSelected}. ${this.trees[this.indexSelected].name}` : null;
    }
  }

  confirmUpdate(index : number){
    if(this.updateStatus){
      const idnode = this.trees[index].id;
      this.treesystemservice.updateTreeNode(idnode,this.inputNode.value).subscribe(res =>{
        console.log('res update',res);
        this.indexSelected = null;
        this.inputNode.readOnly = true;
        this.refreshNode();
        this.updateStatus = false;
      });
    }
  }

  delete(nodeId: number){
    this.treesystemservice.deleteTreeNode(nodeId).subscribe(res =>{
      console.log('delete',res);
      this.refreshNode();
    });
  }

  refreshNode(){
    this.niveles = [];
    this.treesystemservice.getTreeNode().subscribe(tree =>{
      this.trees = tree;
      this.niveles.push(tree);
      this.parentNumber = tree[0]?.parent;
      this.newNode = false;
      this.nivel = 1;
    });
  }
}
