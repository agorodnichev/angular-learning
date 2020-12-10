import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, AuthButtonStub, LogoStub ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            getUserInfo: jasmine.createSpy('authService.getUserInfo').and.returnValue(of({
              email: 'test@test.com',
              password: '123',
              token: 'asjfnj33j9o'              
            }))
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({selector: 'crs-auth-button', template: ''})
class AuthButtonStub{}

@Component({selector: 'crs-logo', template: ''})
class LogoStub{}
