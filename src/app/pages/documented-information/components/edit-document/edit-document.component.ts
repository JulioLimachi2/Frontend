import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog,
    private treesystemservice: TreeSystemService,
    private _location: Location) { }

  ngOnInit(): void {
    console.log(new Date());
    const lista= this.treesystemservice.getTreeNodeList(9).subscribe( (res)=>{
      console.log("lista",JSON.parse(res));
      this.listDoc = JSON.parse(res);
      this.datasourceGE = this.filterTipoDoc(JSON.parse(res),'GE');
     });
  }


  selectedRow(index: number) {

  }


  ModalDoc(datadoc?) {
    const dialogRef = this.dialog.open(ModalDocumentComponent, {
      width: '38%',
      height: '638px',
      panelClass: 'mdl-doc',
      data: {dataForm:datadoc, tab: this.indexTab}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.documentEdit) {
          if (result.currentIdDoc === result.newIdDoc) {
            result.currentIdDoc === 1 && (this.dataEditDoc1 = { data: result.documentEdit, changeId: false });
            result.currentIdDoc === 2 && (this.dataEditDoc2 = { data: result.documentEdit, changeId: false });
            result.currentIdDoc === 3 && (this.dataEditDoc3 = { data: result.documentEdit, changeId: false });
            result.currentIdDoc === 4 && (this.dataEditActa = { data: result.documentEdit, changeId: false });
          } else {
            result.currentIdDoc === 1 && (this.dataEditDoc1 = { data: result.beforeData.document, changeId: true });
            result.currentIdDoc === 2 && (this.dataEditDoc2 = { data: result.beforeData.document, changeId: true });
            result.currentIdDoc === 3 && (this.dataEditDoc3 = { data: result.beforeData.document, changeId: true });
            result.currentIdDoc === 4 && (this.dataEditActa = { data: result.beforeData.document, changeId: true });

            result.newIdDoc === 1 && (this.dataDoc1 = result.documentEdit);
            result.newIdDoc === 2 && (this.dataDoc2 = result.documentEdit);
            result.newIdDoc === 3 && (this.dataDoc3 = result.documentEdit);
            result.newIdDoc === 4 && (this.dataActa = result.documentEdit);
            this.indexTab = result.newIdDoc - 1;
          }
        }
        if (result.document) {
          this.indexTab = result.idDoc - 1;
          result.idDoc === 1 && (this.dataDoc1 = result.document);
          result.idDoc === 2 && (this.dataDoc2 = result.document);
          result.idDoc === 3 && (this.dataDoc3 = result.document);
          result.idDoc === 4 && (this.dataActa = result.document);
        }

      }
    });
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
    if(event.index === 0){
      this.datasourceGE = this.filterTipoDoc(this.listDoc,'GE');
    }
    if(event.index === 1 || event.index === 2){
      this.datasourceIE = this.filterTipoDoc(this.listDoc,'IE');
    }
    if(event.index === 3){
      this.datasourceAC = this.filterTipoDoc(this.listDoc,'AC');
    }
  }
}
