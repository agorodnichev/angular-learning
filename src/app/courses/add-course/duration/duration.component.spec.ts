import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {Pipe, PipeTransform} from '@angular/core';
import { DurationComponent } from './duration.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,],
      declarations: [ DurationComponent, MinutesToHoursPipeMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change UI value on variable change', fakeAsync(() => {
    let inputField = fixture.debugElement.query(By.css('#duration'));
    component.duration = 333;
    fixture.detectChanges();
    tick();
    expect(inputField.nativeElement.value).toBe('333');
  }));

});


@Pipe({name: 'minutesToHours'})
class MinutesToHoursPipeMock implements PipeTransform {
  transform(value: any): any {
    return null
  }
}