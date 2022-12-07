import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoAccionService {

  constructor(private http: HttpClient) { }

  createTipo(requestTipo:object){
    return this.http.post(`api/master/tipo/`,requestTipo, {responseType: 'text'});
  }

  getTipo(){
    return this.http.get(`api/master/tipo/`,{responseType: 'json'});
  }

  updateTipo(requestTipo:object,idTipo: number){
    return this.http.put(`api/master/tipo/${idTipo}`,requestTipo, {responseType: 'text'});
  }

  deleteTipo(idTipo: number){
    return this.http.delete(`api/master/tipo/${idTipo}`,{responseType: 'text'});
  }

  readTipo(idTipo: number){
    return this.http.get(`api/master/tipo/${idTipo}`);
  }
}
