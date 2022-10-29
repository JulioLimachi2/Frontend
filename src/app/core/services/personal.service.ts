import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  getAllPersonal():Observable<any>{
    return this.http.get("assets/data-mock/data-personal.json");
  }
}
