import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(private readonly httpClient: HttpClient) { 

    if (this.getUserInfo()) {
      this.isAuthenticated = true;
    }
  }

  login(user: Omit<User, 'id'>, onSuccesCallback?: ()=>void) {
    this.httpClient.post('http://localhost:3004/auth/login', {
      login: user.email,
      password: user.password
    }).subscribe(
      token => {
        localStorage.setItem('logininfo', JSON.stringify({
          token: token['token'], 
          userInfo: user
        }));
        this.isAuthenticated = true;
        if (onSuccesCallback) onSuccesCallback();
      }
    );
  }

  logout() {
    localStorage.removeItem('logininfo');
    this.isAuthenticated = false;
  }

  getUserInfo(): Omit<User, 'id'> {
    return JSON.parse(localStorage.getItem('logininfo'));
  }
}
