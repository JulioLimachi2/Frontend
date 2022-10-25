import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { DatanavService } from 'src/app/core/services/datanav.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';

const TREE_DATA = [
  {
    name: 'ISO 9001',
    children: [
      { name: 'Jerarquía ISO 9001', children: [{ name: 'Documento' }] },
      { name: 'Jerarquía ISO 9001', children: [{ name: 'Documento', url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }] }
    ],
  },
  {
    name: 'ISO 22301',
    children: [
      {
        name: 'Jerarquía ISO 22301',
        children: [{ name: 'Documento' }],
      },
      {
        name: 'Jerarquía ISO 22301',
        children: [{ name: 'Documento' }],
      },
    ],
  },
  {
    name: 'ISO 27001',
    children: [
      {
        name: 'Jerarquía ISO 27001',
        children: [{ name: 'Documento' }],
      },
      {
        name: 'Jerarquía ISO 27001',
        children: [{ name: 'Documento' }],
      },
    ],
  },
  {
    name: 'ISO 37001',
    children: [
      {
        name: 'Jerarquía ISO 37001',
        children: [{ name: 'Documento' }],
      },
      {
        name: 'Jerarquía ISO 37001',
        children: [{ name: 'Documento' }],
      },
    ],
  },
  {
    name: 'Documentos Generales',
    children: [
      {
        name: 'Jerarquía documentaria',
        children: [{ name: 'Documento General', autorization: true, urlrouting: '/generalDocuments' }],
      }
    ],
  },
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showFiller = true;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  userLog;
  showOptions: boolean;
  openedDrawner: boolean = true;
  showSubmenuLog: boolean;

  datanav = [];

  constructor(public dialog: MatDialog,
    private router: Router,
    private navservice: DatanavService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    if (localStorage.getItem('userlog')) {
      this.userLog = JSON.parse(localStorage.getItem('userlog'));
      this.openedDrawner = false;
      this.showOptions = true;
      console.log('local user', JSON.parse(localStorage.getItem('userlog')));
    }
  }

  callModal() {
    if (this.userLog) {
      this.router.navigateByUrl("/generalDocuments");
    } else {
      const dialogRef = this.dialog.open(ModalMsgComponent, {
        width: '550px',
        panelClass: 'mdl-msg',
        data: { message: '' },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  openLogin() {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      width: '400px',
      panelClass: 'mdl-login'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userLog = result;
        this.openedDrawner = false;
        this.showOptions = true;
      }
    });
  }

  home() {
    console.log('ohh');
  }

  SelectedOption(id) {
    if (id === 1) {
      this.openedDrawner = true;
      this.datanav = [];
    }
    if (id === '1001') {
      this.openedDrawner = true;
      this.router.navigateByUrl("");
      this.navservice.getNav().subscribe((nav: any) => {
        console.log('nav', nav);
        const navs = nav.filter(x => {
          return x.id === id
        });
        navs.length && (this.datanav = navs[0].data);
      });
    }
    this.showOptions = false;
  }

  goInicio() {
    if(this.userLog){
      this.router.navigateByUrl("");
      this.openedDrawner = false;
      this.showOptions = true;
    }else{
      this.openedDrawner = true;
    }
  }

  logout(){
    localStorage.removeItem('userlog');
    this.userLog = null;
    this.showOptions = false;
    this.openedDrawner = true;
    this.datanav = [];
    this.router.navigateByUrl("");
  }
}
