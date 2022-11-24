import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { TreeSystemService } from 'src/app/core/services/tree-system.service';
import { ModalEditDocsComponent } from '../modal-edit-docs/modal-edit-docs.component';

@Component({
  selector: 'app-documented',
  templateUrl: './documented.component.html',
  styleUrls: ['./documented.component.scss'],
  providers:[TreeSystemService],
})
export class DocumentedComponent implements OnInit {

  dataSource = new MatTreeNestedDataSource<any>();
  treeControl = new NestedTreeControl<any>(node => node.children);
  userLog;

  constructor(private treesystemservice: TreeSystemService,
              private router: Router,
              public dialog: MatDialog) { }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.userLog = JSON.parse(localStorage.getItem('userlog'));
    this.getTree();
  }

  getTree(){
    // this.treesystemservice.getTreeData().subscribe(tree =>{
    //   console.log('tree',tree);
    //   this.dataSource.data = tree as any;
    //   this.treeControl.expand(tree[1]);
    // });
    this.treesystemservice.getTreeNode().subscribe(node => {
      console.log('node',node);
      this.dataSource.data = node as any;
      this.treeControl.expand(node[0]);
    })
  }

  goToDocument(node){
    console.log('node',node);
    this.router.navigate(['documented-information/detail',199]);
  }

  see(node){
    console.log(node);
  }

  edit(){
    const dialogRef = this.dialog.open(ModalEditDocsComponent, {
      width: '38%',
      data: this.dataSource.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }

}
