import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCourseComponent } from './add-course.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CoursesService } from '../shared/courses.service';
import { of } from 'rxjs';
import { BreadcrumbService } from 'src/app/breadcrumb/services/breadcrumb.service';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  const getItemByIdFakeData =   {
    name: 'test', 
    description: 'test description', 
    date: new Date(), 
    length: 1, 
    id: 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent, DateComponentMock, DurationComponentMock ],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              data: {
                action: 'edit'
              },
              params: {
                id: 1
              }
            }
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('router.navigate')
          }
        },
        {
          provide: DatePipe,
          useValue: {
            transform: jasmine.createSpy('datePipe.transform').and.returnValue('01.01.2001')
          }
        },
        {
          provide: CoursesService,
          useValue: {
            getItemById: jasmine.createSpy('courseService.getItemById').and.returnValue(of(getItemByIdFakeData)),
            updateItem: jasmine.createSpy('courseService.updateItem'),
            createCourse: jasmine.createSpy('courseService.updateItem')
          }
        },
        {
          provide: BreadcrumbService,
          useValue: {
            emptyRoutes: jasmine.createSpy('breadcrumbService.emptyRoutes'),
            addRoute: jasmine.createSpy('breadcrumbService.addRoute')
          }
        }
      ]
    })
    .compileComponents();
  }));



  // this.coursesService.getItemById(activeCourseId).subscribe(
  //   activeCourseData => {
  //     this.name = activeCourseData.name;
  //     this.description = activeCourseData.description;
  //     this.date = this.datePipe.transform(activeCourseData.date, 'MM/dd/yyyy');
  //     this.length = activeCourseData.length;
  //     this.id = activeCourseData.id;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveHandler should be called on click', () => {
    const saveButton = fixture.debugElement.query(By.css('.save'));
    spyOn(component, 'saveHandler');
    saveButton.triggerEventHandler('click', null);
    expect(component.saveHandler).toHaveBeenCalled();
  });

  it('cancelHandler should be called on click', () => {
    const cancelButton = fixture.debugElement.query(By.css('.cancel'));
    spyOn(component, 'cancelHandler');
    cancelButton.triggerEventHandler('click', null);
    expect(component.cancelHandler).toHaveBeenCalled();
  });


});

@Component({
  selector: 'crs-date',
  template: `<div></div>`
})
class DateComponentMock {
  @Input() date: string;
}

@Component({
  selector: 'crs-duration',
  template: `<div></div>`
})
class DurationComponentMock {
}


