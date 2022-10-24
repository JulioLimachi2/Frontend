import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatanavService {

  constructor(private http: HttpClient) { }

  getNav(){
    return this.http.get("assets/data-mock/navs-data.json");
  }
}
