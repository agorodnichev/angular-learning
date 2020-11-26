import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DateComponent } from './date.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,],
      declarations: [ DateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change UI value on variable change', fakeAsync(() => {
    let inputField = fixture.debugElement.query(By.css('#date'));
    component.date = 500;
    fixture.detectChanges();
    tick();
    expect(inputField.nativeElement.value).toBe('500');
  }));

});
