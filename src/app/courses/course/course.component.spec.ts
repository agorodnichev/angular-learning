import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform, Directive, Input, ElementRef } from '@angular/core';




describe('CourseComponent component', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, MinutesToHoursPipeStub, BorderHighliterDirectiveMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = {id: 1, topRated: true, title: 'Test1', creationDate: new Date(2020, 9, 17), duration: 1, description: 'test descr'}; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define title', () => {
    let h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('TEST1');
  });

  it('click on "edit" button calls handler', () => {
    let editButton: HTMLElement = fixture.nativeElement.querySelector('.edit-button');
    spyOn(component, 'editHandler')
    editButton.click();
    expect(component.editHandler).toHaveBeenCalled();
  });

  it('click on "delete" button calls handler', () => {
    let deleteButton: HTMLElement = fixture.nativeElement.querySelector('.delete-button');
    spyOn(component, 'deleteHandler')
    deleteButton.click();
    expect(component.deleteHandler).toHaveBeenCalled();
  });

  it('click on "delete" button trigger event with corresponding ID value', () => {
    let expectedId;
    let deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    component.delete.subscribe((id:number) => {expectedId = id});
    deleteButton.triggerEventHandler('click', null);
    expect(expectedId).toBe(component.course.id)
  });


});


// STUBs and MOCKs
@Pipe({
  name: 'minutesToHours'
})
class MinutesToHoursPipeStub implements PipeTransform {
  transform(value: number): string {
    return null
 }
}


@Directive({
  selector: '[crsBorderHighliter]'
})
export class BorderHighliterDirectiveMock {

  @Input('crsBorderHighliter') date: Date;

  constructor(private el: ElementRef) {}
}