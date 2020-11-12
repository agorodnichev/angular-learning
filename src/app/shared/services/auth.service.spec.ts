import { NgIf } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {

    let store = {}
    const localStorageMock = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      }
    }

    spyOn(localStorage, 'getItem')
      .and.callFake(localStorageMock.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(localStorageMock.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(localStorageMock.removeItem);


    TestBed.configureTestingModule({
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store User in localstorage', () => {
    let user = {email: 'test@test.com', password: '12345678'};
    service.login(user);
    expect(JSON.parse(localStorage.getItem('logininfo')).userInfo).toEqual(user);
  });

  it('should switch isAuthenticated to true', () => {
    let user = {email: 'test@test.com', password: '12345678'};
    expect(service.isAuthenticated).toBe(false);
    service.login(user);
    expect(service.isAuthenticated).toBe(true);
  });

  it('should logout by deleting userinfo from localstorage', () => {
    let user = {email: 'test@test.com', password: '12345678'};
    service.login(user);
    expect(service.isAuthenticated).toBe(true);
    expect(localStorage.getItem('logininfo')).not.toEqual(null);
    service.logout();
    expect(service.isAuthenticated).toBe(false);
    expect(localStorage.getItem('logininfo')).toEqual(null);
  });

  it('should get user info', () => {
    let user = {email: 'test@test.com', password: '12345678'};
    service.login(user);
    let info = service.getUserInfo();
    expect(info).toEqual(user);
  })

});
