import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TreeSystemService {

  constructor(private http: HttpClient) { }

  getTreeData(){
    return this.http.get("assets/data-mock/data-tree-system.json");
  }

  getDocbyId(id:string): Observable<any> {
    return this.http.get('assets/data-mock/data-doc-detail.json').pipe(
      map((items: any) => items.filter((item: any) => item.id === id))
    )
  }

  getTreeNode():any{
    return this.http.get('api/treenode/');
  }

  newTreeNode(requestNode){
    return this.http.post(`api/treenode/`,requestNode);
  }

  deleteTreeNode(idNode: number){
    return this.http.delete(`api/treenode/${idNode}`);
  }

}
