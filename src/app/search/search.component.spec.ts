import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on "Search" button should call "searchHandler" handler', () => {
    const searchButton = fixture.debugElement.query(By.css('.search button'));
    spyOn(component, 'searchHandler');
    searchButton.triggerEventHandler('click', null);
    expect(component.searchHandler).toHaveBeenCalled();
  });

  it('user input should change class variable', fakeAsync(()=> {
    const de = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    el.value = "test value";
    el.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    expect(component.inputValue).toEqual('test value');
  }));
});
