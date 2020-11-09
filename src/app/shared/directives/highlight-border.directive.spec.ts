import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightBorderDirective } from './highlight-border.directive';
import { By } from '@angular/platform-browser';

describe('BorderHighliterDirective', () => {

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightBorderDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should have green border', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.border1');
    expect(borderElement.style.borderColor).toContain('green');
  });

  it('should have blue border', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.border2');
    expect(borderElement.style.borderColor).toContain('blue');
  });

  it('should have no border color', ()=>{
    let borderElement: HTMLElement = fixture.nativeElement.querySelector('.border3');
    expect(borderElement.style.border).not.toBeUndefined();
  });


});

@Component({
  template: `
    <div [crsHighlightBorder]="greenDate" class="border1"><span>should be green</span></div>
    <div [crsHighlightBorder]="bluedate" class="border2"><span>should be blue</span></div>
    <div [crsHighlightBorder]="oldDate" class="border3"><span>shouldn't have blue nor green classes</span></div>
  `
})
class TestComponent {
  greenDate: Date = new Date((new Date()).getTime() - 13*24*3600*1000);
  bluedate: Date = new Date((new Date()).getTime() + 5*24*3600*1000);
  oldDate: Date = new Date(2010, 5, 5);
}
