import { Injectable } from '@angular/core';
import { Subject, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  share$: Subject<any> = new ReplaySubject();

  constructor() { 
    this.share$.next('');
  }

  getShare() {
    return this.share$.asObservable();
  }

  setShare(id){
    this.share$.next(id);
  }
}
