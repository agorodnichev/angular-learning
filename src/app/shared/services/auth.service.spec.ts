import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { switchMap } from 'rxjs/operators';


describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

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
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store User in localstorage', () => {
    let user = { email: 'test@test.com', password: '12345678' };
    service.login(user).subscribe(
      data => {
        expect(JSON.parse(localStorage.getItem('logininfo')).userInfo).toEqual(user);
      }
    );
    
    const req = httpTestingController.expectOne('http://localhost:3004/auth/login');
    expect(req.request.method).toEqual('POST');

    req.flush(user);

  });

  it('should switch isAuthenticated to true', () => {
    let user = { email: 'test@test.com', password: '12345678' };
    expect(service.isAuthenticated).toBe(false);
    service.login(user).subscribe(
      data => {
        expect(service.isAuthenticated).toBe(true);
      }
    );
    const req = httpTestingController.expectOne('http://localhost:3004/auth/login');
    req.flush(user);
  });

  // it('should logout by deleting userinfo from localstorage', () => {
  //   let user = { email: 'test@test.com', password: '12345678' };
  //   service.login(user);
  //   expect(service.isAuthenticated).toBe(true);
  //   expect(localStorage.getItem('logininfo')).not.toEqual(null);
  //   service.logout();
  //   expect(service.isAuthenticated).toBe(false);
  //   expect(localStorage.getItem('logininfo')).toEqual(null);
  // });

  // it('should get user info', () => {
  //   let user = { email: 'test@test.com', password: '12345678'};
  //   service.login(user).pipe(
  //     switchMap( () => service.getUserInfo())
  //   ).subscribe(
  //     data => {
  //       expect(data).toEqual({token: '123', password: user.password, email: 'test@test.com'})
  //     }
  //   )
  //   const req = httpTestingController.expectOne('http://localhost:3004/auth/login');
  //   req.flush({token: '123'});
  // });

});
