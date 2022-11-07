import { Injectable } from '@angular/core';
import { Subject, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionAuthorizationService {

  authorizationg$: Subject<any> = new ReplaySubject();

  constructor() { 
    this.authorizationg$.next('');
  }

  getAuthorizationg() {
    return this.authorizationg$.asObservable();
  }

  setAuthorizationg(id){
    this.authorizationg$.next(id);
  }
}
