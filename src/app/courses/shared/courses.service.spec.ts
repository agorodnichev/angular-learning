import { TestBed } from '@angular/core/testing';
import { Course } from './course.model';
import { CoursesService } from './courses.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoaderService } from 'src/app/shared/services/loader.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: LoaderService,
          useValue: {
            showLoaderUntilCompleted: (parameter: any) => parameter
          }
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
