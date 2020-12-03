import { TestBed } from '@angular/core/testing';
import { Course } from './course.model';
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

  it('should return item by id', ()=>{
    let firstElement = service.getList()[0];
    let item = service.getItemById(firstElement.id);
    expect(item).toEqual(firstElement);
  });
});
