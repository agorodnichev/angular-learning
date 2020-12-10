import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user/user.model';
import {Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
// import {} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(private readonly httpClient: HttpClient) { 

    if (!!localStorage.getItem('logininfo')) {
      this.isAuthenticated = true;
    }
  }

  login(user: Omit<User, 'id' | 'token'>, onSuccesCallback?: ()=>void): Observable<any> {
    return this.httpClient.post('http://localhost:3004/auth/login', {
      login: user.email,
      password: user.password
    }).pipe(
      tap( (token) => {
        localStorage.setItem('logininfo', JSON.stringify({
          token: token['token'], 
          userInfo: user
        }));
        this.isAuthenticated = true;
        if (onSuccesCallback) onSuccesCallback();        
      })
    );
  }

  logout() {
    localStorage.removeItem('logininfo');
    this.isAuthenticated = false;
  }

  getUserInfo(): Observable<Omit<User, 'id'>> {
    return of(JSON.parse(localStorage.getItem('logininfo')));
  }
}
