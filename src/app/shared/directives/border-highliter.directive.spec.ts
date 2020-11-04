import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderHighliterDirective } from './border-highliter.directive';
import { By } from '@angular/platform-browser';

describe('BorderHighliterDirective', () => {

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ BorderHighliterDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should have green border', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.green');
    expect(borderElement.style.borderColor).toBe('green');
  });

  it('should have blue border', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.blue');
    expect(borderElement.style.borderColor).toBe('blue');
  });

  it('should have no border color', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.noborder');
    expect(borderElement.style.borderColor).toBe('');
  });


});

@Component({
  template: `
    <div [crsBorderHighliter]="greenDate" class="green"><span>should be green</span></div>
    <div [crsBorderHighliter]="bluedate" class="blue"><span>should be blue</span></div>
    <div [crsBorderHighliter]="oldDate" class="noborder"><span>shouldn't have border</span></div>
  `
})
class TestComponent {
  greenDate: Date = new Date((new Date()).getTime() - 13*24*3600*1000);
  bluedate: Date = new Date((new Date()).getTime() + 5*24*3600*1000);
  oldDate: Date = new Date(2010, 5, 5);
}
