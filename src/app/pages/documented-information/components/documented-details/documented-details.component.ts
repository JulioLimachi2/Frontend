import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeSystemService } from 'src/app/core/services/tree-system.service';

@Component({
  selector: 'app-documented-details',
  templateUrl: './documented-details.component.html',
  styleUrls: ['./documented-details.component.scss']
})
export class DocumentedDetailsComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['generalProcedures','download'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  document;
  userLog;
  idNodo: string;
  docIdselected: number;

  constructor(private treesystemservice: TreeSystemService,
              private router: ActivatedRoute,
              private route: Router,
              private _location: Location) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.itemsPerPageLabel="Elementos por página";
    this.paginator._intl.getRangeLabel = this.getRangeLabel;
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  ngOnInit(): void {
    this.idNodo = this.router.snapshot.paramMap.get('idnodo');
    this.userLog = JSON.parse(localStorage.getItem('userlog'));
    this.getListNode(parseInt(this.idNodo));
   
    this.dataSource.data = [
      // {
      //   "title": "PROCED. GEST. DE DOCUMENTOS DE SOPORTE A LOS PROCESOS.PDF",
      //   "details": {
      //     "code": "PR-003-UPMM-ZRIX",
      //     "version": "04",
      //     "approved": "RES. JEF. N°702-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "11/10/2022",
      //     "pageNumber": "29"
      //   }
      // },
      // {
      //   "title": "PROC. PARA EL CONTROL DE SALIDAS NO CONFORMES Y RETROCESOS DEL SGC.PDF",
      //   "details": {
      //     "code": "PR-02-JEF-ZRIX",
      //     "version": "11",
      //     "approved": "RESOLUCION JEFATURAL N°440-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "26/06/2022",
      //     "pageNumber": "55"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // },
      // {
      //   "title": "INST. DE EVAL. Y TRATA. DE RIESGOS Y OPORTUNIDADES DEL SGC.PDF",
      //   "details": {
      //     "code": "IN-005-JEF-ZRIX",
      //     "version": "01",
      //     "approved": "RES. JEF. N°166-2022-SUNARP-ZRN°IX/JEF",
      //     "date": "15/03/2022",
      //     "pageNumber": "15"
      //   }
      // }
    ]
  }

  getListNode(idNodo:number){
    this.treesystemservice.getTreeNodeList(idNodo).subscribe( (res)=>{
      console.log("lista",JSON.parse(res));
      this.dataSource.data = JSON.parse(res);
    });
  }

  download(doc){
    console.log('doc',doc);
    this.docIdselected = doc.id;
    this.treesystemservice.getdetailTree(doc.id).subscribe(res=>{      
      const blob = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = fileURL;
      downloadLink.setAttribute('download', `${doc.nombreArchivo}.pdf`);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      this.docIdselected = null;
    },(e: any) => {
      console.error(e);
    });
  }

  getDocData(id: number){
    this.treesystemservice.getDocbyId(id).subscribe(doc => {
      console.log('doc',doc);
      this.document = doc[0];
    });
  }

  goEdit(){
    this.route.navigateByUrl("documented-information/edit");
    this.route.navigate(['documented-information/edit',this.idNodo]);
  }

  back(){
    this._location.back();
  }

}
