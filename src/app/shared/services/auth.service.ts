import { Injectable } from '@angular/core';
import {User} from '../../user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor() { }

  login(user: Omit<User, 'id'>) {
    let token: string = Math.random().toString(36).substr(2);
    localStorage.setItem('logininfo', JSON.stringify({
      token, 
      userInfo: user
    }));

    this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem('logininfo');
    this.isAuthenticated = false;
  }

  getUserInfo(): Omit<User, 'id'> {
    return JSON.parse(localStorage.getItem('logininfo')).userInfo;
  }
}
