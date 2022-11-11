import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { TreeSystemService } from 'src/app/core/services/tree-system.service';

@Component({
  selector: 'app-documented',
  templateUrl: './documented.component.html',
  styleUrls: ['./documented.component.scss']
})
export class DocumentedComponent implements OnInit {

  dataSource = new MatTreeNestedDataSource<any>();
  treeControl = new NestedTreeControl<any>(node => node.children);
  userLog;

  constructor(private treesystemservice: TreeSystemService,
              private router: Router) { }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.userLog = localStorage.getItem('userlog');
    this.getTree();
  }

  getTree(){
    this.treesystemservice.getTreeData().subscribe(tree =>{
      console.log('tree',tree);
      this.dataSource.data = tree as any;
      this.treeControl.expand(tree[1]);
    });
  }

  goToDocument(node){
    this.router.navigate(['documented-information/detail',node.docId]);
  }

  see(node){
    console.log(node);
  }
}
