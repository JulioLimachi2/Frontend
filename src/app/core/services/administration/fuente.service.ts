import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuenteService {

  constructor(private http: HttpClient) { }

  createFuente(requestFuente:object){
    return this.http.post(`api/master/fuente/`,requestFuente, {responseType: 'text'});
  }

  getFuente(){
    return this.http.get(`api/master/fuente/`);
  }

  updateFuente(requestFuente:object,idFuente: number){
    return this.http.put(`api/master/fuente/${idFuente}`,requestFuente, {responseType: 'text'});
  }

  deleteFuente(idFuente: number){
    return this.http.delete(`api/master/fuente/${idFuente}`,{responseType: 'text'});
  }

  readFuente(idFuente: number){
    return this.http.get(`api/master/fuente/${idFuente}`);
  }
}
