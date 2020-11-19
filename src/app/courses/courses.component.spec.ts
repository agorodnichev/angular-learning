import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { Course } from './shared/course.model';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './shared/courses.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        {
          provide: CoursesService, 
          useValue: {
            courses: [
              {id: 1, topRated: true, title: 'Test title 1', creationDate: new Date(2020, 9, 30), duration: 148, description: 'Test1'},
              {id: 2, topRated: false, title: 'Test title 2', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'Test2'},
            ]
          }
      }
      ],
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

  it(`courses variable shouldn't be defined on component creation`, () => {
    // fixture.detectChanges();
    expect(component.courses).not.toBeDefined();
  });

  it(`courses variable should be defined on ngOnInit calling`, () => {
    fixture.detectChanges(); // ngOnInit calling
    expect(component.courses).toBeDefined();
  });

});


@Component({selector: 'crs-course-list', template: ''})
class CourseListStub {
  @Input() courses: Course[];
}