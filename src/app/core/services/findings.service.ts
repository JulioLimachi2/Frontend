import { Injectable } from '@angular/core';
import { Subject, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindingsService {

  finding$: Subject<any> = new ReplaySubject();

  constructor() { 
    this.finding$.next('');
  }

  getFinding() {
    return this.finding$.asObservable();
  }

  setFinding(id){
    this.finding$.next(id);
  }
}
