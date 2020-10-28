import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {Course} from './shared/course.model';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent, CourseListStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it(`coursesMock variable shouldn't be defined on component creation`, () => {
    expect(component.coursesMock).not.toBeDefined();
  });

  it(`coursesMock variable should be defined on ngOnInit calling`, () => {
    fixture.detectChanges(); // ngOnInit calling
    expect(component.coursesMock).toBeDefined();
  });

});


@Component({selector: 'crs-course-list', template: ''})
class CourseListStub {
  @Input() courses: Course[];
}