import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderStub,
        BreadcrumbStub,
        SearchStub,
        FooterStub,
        RouterOutletStub,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

@Component({selector: 'crs-header', template: ''}) class HeaderStub{};
@Component({selector: 'crs-breadcrumb', template: ''}) class BreadcrumbStub{};
@Component({selector: 'crs-search', template: ''}) class SearchStub{};
@Component({selector: 'crs-footer', template: ''}) class FooterStub{};
@Component({selector: 'router-outlet', template: ''}) class RouterOutletStub{};