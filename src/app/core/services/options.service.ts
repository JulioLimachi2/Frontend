import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  option$: Subject<string> = new ReplaySubject();

  constructor() { 
    this.option$.next('');
  }

  getOption() {
    return this.option$.asObservable();
  }

  setOption(id){
    this.option$.next(id);
  }

}
