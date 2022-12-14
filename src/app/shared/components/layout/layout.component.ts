import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { DatanavService } from 'src/app/core/services/datanav.service';
import { OptionsService } from 'src/app/core/services/options.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';


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
  currentUrl: string;

  datanav = [];

  constructor(public dialog: MatDialog,
    private router: Router,
    private navservice: DatanavService,
    private serviceoption: OptionsService) {
    /*detecter movimiento del router y si se navega por options 
    ocultar el navegador izquierdo*/
    router.events.subscribe((val: any) => {
      const { url } = val;
      this.currentUrl = url;
      if (url) {
        if (url.startsWith("/options")) {
          this.openedDrawner = false;
        }
        if (url.startsWith("/documented-information")) {
          this.openedDrawner = false;
        }
        //else{
        //   this.openedDrawner = true;
        // }
      }
    });
  }

  /* metodo del mat-tree-node que detecta si tiene data hijos*/
  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    /*si hay data del usuario en el localstorage setearla a la variable userLog*/
    if (localStorage.getItem('userlog')) {
      this.userLog = JSON.parse(localStorage.getItem('userlog'));
      this.datanav = JSON.parse(localStorage.getItem('navuser'));
    }
    /*metodo de deteccion de opcion seleccionada*/
    this.detectSelectOption();
  }

  /*metodo para direccionar y mostrar documento de acorde a la url 
  que se le envia como parametro , de caso contrario de que no este logueado mostrar
  modal de alerta*/
  goToDocument(node) {
    if (node.autorization) {
      if(this.userLog){
        this.idTreeNode = node.id;
        this.router.navigate(['/generalDocuments', node.url]);
      }else{
        const dialogRef = this.dialog.open(ModalMsgComponent, {
          width: '550px',
          height: '90px',
          panelClass: 'mdl-msg',
          data: {
            message: 'PARA PODER VISUALIZAR EL DOCUMENTO INGRESE CON USUARIO Y CLAVE',
            type: 'success'
          }
        });
  
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/']);
        });
      }
     
    } else {
      this.idTreeNode = node.id;
      this.router.navigate(['/generalDocuments', node.url]);
    }
  }

  /*metodo para mostrar modal login y loguearse*/
  openLogin() {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      width: '490px',
      height: '500px',
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
      this.openedDrawner = false;
      this.router.navigateByUrl("/documented-information");
      this.datanav = [];
    }
    if (parseInt(id) > 1000) {
      this.openedDrawner = true;
      this.router.navigateByUrl("");
      this.navservice.getNav().subscribe((nav: any) => {
        console.log('nav', nav);
        const navs = nav.filter(x => {
          return x.id === id
        });
        localStorage.setItem('navuser',JSON.stringify(navs[0].data));
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
    }
  }

  /*metodo para desloguearse*/
  logout() {
    localStorage.removeItem('userlog');
    localStorage.removeItem('navuser');
    this.userLog = null;
    this.openedDrawner = false;
    this.datanav = [];
    if(this.currentUrl !== '/documented-information/edit'){
      window.location.reload();
      this.router.navigateByUrl("/documented-information");
    }else{
      this.router.navigateByUrl("/documented-information");
    }
  }
}
