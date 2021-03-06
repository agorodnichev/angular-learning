import { Component, Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';
import { CoursesService } from '../shared/courses.service';
import { of } from 'rxjs';


describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseStub, OrderByDatePipeMock ],
      providers: [
        {
          provide: CoursesService,
          useValue: {
            removeItem: jasmine.createSpy('coursesService.removeItem').and.returnValue(of(null)),
            getList: jasmine.createSpy('coursesService.getList').and.returnValue(of([]))
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run loadMoreHandler method on click on "load more" button', () => {
    const loadMoreButton = fixture.debugElement.query(By.css('.load-courses button'));
    spyOn(component, 'loadMoreHandler');
    loadMoreButton.triggerEventHandler('click', null);
    expect(component.loadMoreHandler).toHaveBeenCalled();
  });

});

@Component({selector: 'crs-course', template: ''})
class CourseStub {}

@Pipe({name: 'orderByDate'})
class OrderByDatePipeMock implements PipeTransform {
  transform(value: any): any {
    return null
  }
}