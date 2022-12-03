import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TreeFileService } from 'src/app/core/services/tree-file.service';
import { TreeSystemService } from 'src/app/core/services/tree-system.service';
import { ModalDocumentComponent } from '../modal-document/modal-document.component';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {


  indexTab: number = 0;
  dataDoc1;
  dataDoc2;
  dataDoc3;
  dataActa;
  dataEditDoc1;
  dataEditDoc2;
  dataEditDoc3;
  dataEditActa;
  listDoc = [];
  datasourceGE = [];
  datasourceIE = [];
  datasourceAC = [];
  idNodo: string;

  constructor(public dialog: MatDialog,
    private treesystemservice: TreeSystemService,
    private _location: Location,
    private router: ActivatedRoute,
    private servicetreeFile: TreeFileService) { }

  ngOnInit(): void {
    console.log(new Date());
    this.idNodo = this.router.snapshot.paramMap.get('idnodo');
    console.log('idNodo edit doc',this.idNodo);
    this.getListNode(parseInt(this.idNodo));
  }


  selectedRow(index: number) {

  }

  getListNode(idNodo:number){
    this.treesystemservice.getTreeNodeList(idNodo).subscribe( (res)=>{
      console.log("lista",JSON.parse(res));
      this.listDoc = JSON.parse(res);
      this.onIndexChange(this.indexTab);
    });
  }


  ModalDoc(datadoc?) {
    console.log('datadoc',datadoc);
    const dialogRef = this.dialog.open(ModalDocumentComponent, {
      width: '38%',
      height: '638px',
      panelClass: 'mdl-doc',
      data: {dataForm:datadoc, tab: this.indexTab}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.documentEdit) {
          console.log('editar doc',result);
          // if (result.currentIdDoc === result.newIdDoc) {
          //   result.currentIdDoc === 1 && (this.dataEditDoc1 = { data: result.documentEdit, changeId: false });
          //   result.currentIdDoc === 2 && (this.dataEditDoc2 = { data: result.documentEdit, changeId: false });
          //   result.currentIdDoc === 3 && (this.dataEditDoc3 = { data: result.documentEdit, changeId: false });
          //   result.currentIdDoc === 4 && (this.dataEditActa = { data: result.documentEdit, changeId: false });
          // } else {
          //   result.currentIdDoc === 1 && (this.dataEditDoc1 = { data: result.beforeData.document, changeId: true });
          //   result.currentIdDoc === 2 && (this.dataEditDoc2 = { data: result.beforeData.document, changeId: true });
          //   result.currentIdDoc === 3 && (this.dataEditDoc3 = { data: result.beforeData.document, changeId: true });
          //   result.currentIdDoc === 4 && (this.dataEditActa = { data: result.beforeData.document, changeId: true });

          //   result.newIdDoc === 1 && (this.dataDoc1 = result.documentEdit);
          //   result.newIdDoc === 2 && (this.dataDoc2 = result.documentEdit);
          //   result.newIdDoc === 3 && (this.dataDoc3 = result.documentEdit);
          //   result.newIdDoc === 4 && (this.dataActa = result.documentEdit);
          //   this.indexTab = result.newIdDoc - 1;
          // }
        }
        if (result.document) {
          console.log('result guardar',result);      
          this.indexTab = result.idDoc - 1;
          result.idDoc === 1 && this.setCreateEspe(result.document,this.idNodo);
          // result.idDoc === 2 && (this.dataDoc2 = result.document);
          result.idDoc === 3 && this.setCreateExte(result.document,this.idNodo);
          result.idDoc === 4 && this.setCreateActa(result.document,this.idNodo);//(this.dataActa = result.document);
        }

      }
    });
  }


  setCreateActa(request:object,idNodo:string){
    this.servicetreeFile.createActa(request,idNodo).subscribe(resp => {
      console.log('resul', resp);
      this.getListNode(parseInt(this.idNodo));
    })
  }

  setCreateExte(request:object,idNodo:string){
    this.servicetreeFile.createExte(request,idNodo).subscribe(resp => {
      console.log('resul', resp);
      this.getListNode(parseInt(this.idNodo));
    })
  }

  setCreateEspe(request:object,idNodo:string){
    this.servicetreeFile.createEspe(request,idNodo).subscribe(resp => {
      console.log('resul', resp);
      this.getListNode(parseInt(this.idNodo));
    })
  }

  back() {
    this._location.back();
  }

  filterTipoDoc(lista:Array<[]>,type){
    const fil = lista.filter((list: any) => {
      return list.tipo == type;
    });
    console.log('fil',fil);
    return fil
  }

  onChangeTab(event){
    this.onIndexChange(event.index);
  }

  onIndexChange(index: number){
    if(index === 0){
      this.datasourceGE = this.filterTipoDoc(this.listDoc,'GE');
    }
    if(/*index === 1 ||*/ index === 2){
      this.datasourceIE = this.filterTipoDoc(this.listDoc,'IE');
    }
    if(index === 3){
      this.datasourceAC = this.filterTipoDoc(this.listDoc,'AC');
    }
  }
}
