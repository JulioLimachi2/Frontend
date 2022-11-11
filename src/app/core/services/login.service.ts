import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logIn(dataUser): Observable<any> {
    return this.http.get('assets/data-mock/data-users.json').pipe(
      map((users: any) => users.filter((user: any) => user.user === dataUser.user && user.password === dataUser.password))
    )
  }

}
