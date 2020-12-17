import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user/user.model';
import {Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setAuthToTrue, setAuthToFalse } from '../stores/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<{isAuth: boolean}>,
    ) { 

    if (!!localStorage.getItem('logininfo')) {
      this.store.dispatch(setAuthToTrue())
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
        this.store.dispatch(setAuthToTrue());
        if (onSuccesCallback) onSuccesCallback();        
      })
    );
  }

  logout() {
    localStorage.removeItem('logininfo');
    this.store.dispatch(setAuthToFalse());
  }

  getUserInfo(): Observable<Omit<User, 'id'>> {
    return of(JSON.parse(localStorage.getItem('logininfo')));
  }
}
