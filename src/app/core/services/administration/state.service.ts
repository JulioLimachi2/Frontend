import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  createState(requestState:object){
    return this.http.post(`api/master/estado/`,requestState, {responseType: 'text'});
  }

  getState(){
    return this.http.get(`api/master/estado`,{responseType: 'json'});
  }

  updateState(requestState: object,idstate: number){
    return this.http.put(`api/master/estado/${idstate}`,requestState, {responseType: 'text'});
  }

  deleteState(idstate: number){
    return this.http.delete(`api/master/estado/${idstate}`,{responseType: 'text'});
  }

  readState(idstate: number){
    return this.http.get(`api/master/estado/${idstate}`);
  }

}
