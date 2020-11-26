import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:[
        {
          provide: AuthService, 
          useValue: {
            isAuthenticated: false
          }
      }
      ],
      declarations: [
        AppComponent,
        HeaderStub,
        BreadcrumbStub,
        SearchStub,
        FooterStub,
        RouterOutletStub,
        UserStub,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should activate login page when not authenticated', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.authService.isAuthenticated = false;
    fixture.detectChanges();
    const userDiv = fixture.nativeElement.querySelector('#user-test');
    expect(userDiv.textContent).toContain('test_user');
  });
});

@Component({selector: 'crs-header', template: ''}) class HeaderStub{};
@Component({selector: 'crs-breadcrumb', template: ''}) class BreadcrumbStub{};
@Component({selector: 'crs-search', template: ''}) class SearchStub{};
@Component({selector: 'crs-footer', template: ''}) class FooterStub{};
@Component({selector: 'router-outlet', template: ''}) class RouterOutletStub{};
@Component({selector: 'crs-user', template: '<div id="user-test">test_user</div>'}) class UserStub{};