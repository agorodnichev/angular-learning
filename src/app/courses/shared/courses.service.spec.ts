import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add one item to courses list', () => {
    let coursesCount = service.getList().length;
    service.createCourse({
      topRated: true, 
      title: 'title', 
      creationDate: new Date(), 
      duration: 100, 
      description: 'test description'
    });
    expect(service.getList().length).toEqual(coursesCount + 1);
  });

  it('should delete one items from courses list', ()=>{
    spyOn(window, 'confirm').and.returnValue(true);
    let coursesCount = service.getList().length;
    let firstElementId = service.getList()[0].id;
    service.removeItem(firstElementId);
    expect(service.getList().length).toEqual(coursesCount - 1);
  });

  it('should return item by id', ()=>{
    let firstElement = service.getList()[0];
    let item = service.getItemById(firstElement.id);
    expect(item).toEqual(firstElement);
  });
});
