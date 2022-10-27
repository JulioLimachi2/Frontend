import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { DatanavService } from 'src/app/core/services/datanav.service';
import { OptionsService } from 'src/app/core/services/options.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';

const TREE_DATA = [
  {
    name: 'ISO 9001',
    children: [
      { name: 'Jerarquía ISO 9001', children: [{ id: 'iso9001-01', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }] },
      { name: 'Jerarquía ISO 9001', children: [{ id: 'iso9001-02', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }] }
    ],
  },
  {
    name: 'ISO 22301',
    children: [
      {
        name: 'Jerarquía ISO 22301',
        children: [{ id: 'iso22301-01', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
      {
        name: 'Jerarquía ISO 22301',
        children: [{ id: 'iso22301-02', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
    ],
  },
  {
    name: 'ISO 27001',
    children: [
      {
        name: 'Jerarquía ISO 27001',
        children: [{ id: 'iso27001-01', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
      {
        name: 'Jerarquía ISO 27001',
        children: [{ id: 'iso27001-02', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
    ],
  },
  {
    name: 'ISO 37001',
    children: [
      {
        name: 'Jerarquía ISO 37001',
        children: [{ id: 'iso37001-01', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
      {
        name: 'Jerarquía ISO 37001',
        children: [{ id: 'iso37001-02', name: 'Documento', autorization: true, url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
      },
    ],
  },
  {
    name: 'Documentos Generales',
    children: [
      {
        name: 'Jerarquía documentaria',
        children: [{ id: 'doc01', name: 'Documento General', autorization: true, urlrouting: '/generalDocuments', url: 'https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf' }],
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
  openedDrawner: boolean = true;
  showSubmenuLog: boolean;
  idTreeNode: String;

  datanav = [];

  constructor(public dialog: MatDialog,
    private router: Router,
    private navservice: DatanavService,
    private serviceoption: OptionsService) {
    this.dataSource.data = TREE_DATA;
    /*detecter movimiento del router y si se navega por options 
    ocultar el navegador izquierdo*/
    router.events.subscribe((val: any) => {
      const { url } = val;
      if (url) {
        if (url.startsWith("/options")) {
          this.openedDrawner = false;
        }
      }
    });
  }

  /* metodo del mat-tree-node que detecta si tiene data hijos*/
  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    /*si hay data del usuario en el localstorage setearla a la variable userLog*/
    if (localStorage.getItem('userlog')) {
      this.userLog = JSON.parse(localStorage.getItem('userlog'));
    }
    /*metodo de deteccion de opcion seleccionada*/
    this.detectSelectOption();
  }

  /*metodo para direccionar y mostrar documento de acorde a la url 
  que se le envia como parametro , de caso contrario de que no este logueado mostrar
  modal de alerta*/
  goToDocument(node) {
    if (this.userLog) {
      this.idTreeNode = node.id;
      this.router.navigate(['/generalDocuments', node.url]);
    } else {
      const dialogRef = this.dialog.open(ModalMsgComponent, {
        width: '550px',
        panelClass: 'mdl-msg',
        data: {
          message: 'PARA PODER VISUALIZAR EL DOCUMENTO INGRESE CON USUARIO Y CLAVE',
          type: 'warning'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  /*metodo para mostrar modal login y loguearse*/
  openLogin() {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      width: '400px',
      panelClass: 'mdl-login'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userLog = result;
        this.openedDrawner = false;
        this.router.navigateByUrl("/options");
      }
    });
  }

/* metodo que selecciona opcion mediante id,
 de pasarle el id realiza una funcion, llevando a la ventana home o trayendo data 
 del navegador*/
  SelectedOption(id) {
    if (id === '100') {
      this.openedDrawner = true;
      this.router.navigateByUrl("");
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
  }
/*metodo que detecta del servicio OptionsService
  si se le pasa a una opcion*/
  detectSelectOption() {
    this.serviceoption.getOption().subscribe(id => {
      console.log('idoption', id);
      this.SelectedOption(id);
    })
  }

  /*metodo que regresa al inicio de las opciones principales*/
  goInicio() {
    if (this.userLog) {
      this.router.navigateByUrl("/options");
      this.openedDrawner = false;
    } else {
      this.openedDrawner = true;
    }
  }

  /*metodo para desloguearse*/
  logout() {
    localStorage.removeItem('userlog');
    this.userLog = null;
    this.openedDrawner = true;
    this.datanav = [];
    this.router.navigateByUrl("");
  }
}
