import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { Course } from './shared/course.model';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './shared/courses.service';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {FilterByTextPipe} from '../shared/pipes/filter-by-text.pipe';
import { of } from 'rxjs';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
//   export interface Course {
//     id: number;
//     isTopRated?: boolean,
//     name: string;
//     date: Date;
//     length: number;
//     description: string;
//     authors?: Array<{id: number, name: string, lastName: string}>
// };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule],
      providers: [
        {
          provide: CoursesService, 
          useValue: {
            getList: jasmine.createSpy('coursesService.getList').and.returnValue(
              of([
                {id: 1,isTopRated: true, title: 'Test title 1', creationDate: new Date(2020, 9, 30), length: 148, description: 'Test1'},
                {id: 2,isTopRated: false, title: 'Test title 2', creationDate: new Date(2020, 9, 25), length: 2000, description: 'Test2'},
              ])
            )
          }
      },
      {
        provide: FilterByTextPipe,
        useValue: new FilterByTextPipeMock()
      },
      {
        provide: Router,
        useValue: {}
      },
      {
        provide: ActivatedRoute,
        useValue: {}
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

  it(`courses variable should be defined on ngOnInit calling`, () => {
    fixture.detectChanges(); // ngOnInit calling
    expect(component.courses).toBeDefined();
  });

});


@Component({selector: 'crs-course-list', template: ''})
class CourseListStub {
  @Input() courses: Course[];
}

@Pipe({name: 'filterByText'})
class FilterByTextPipeMock implements PipeTransform {
  transform(value: any): any {
    return null
  }
}