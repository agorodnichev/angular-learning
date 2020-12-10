import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly loaderService: LoaderService,
  ) {}

  getList(searchTextFragment?: string): Observable<Course[]> {
    return this.loaderService.showLoaderUntilCompleted(this.httpClient.get<Course[]>(`http://localhost:3004/courses?start=0&count=5&sort=date${!!searchTextFragment ? '&textFragment='+searchTextFragment : '' }`)
    .pipe(
      // delay(2000), // to check how loader works
      map( (courses: Course[]) => {
       return courses.map( course => { 
         course.date = new Date(course.date)
         return course;
        }) 
      })
    ))
  }

  createCourse(course: Course): Observable<any> {
    return this.loaderService.showLoaderUntilCompleted(this.httpClient.post('http://localhost:3004/courses', course));
    // let id = this.getLastId() + 1;
    // this.courses.push({id, ...course})
  }

  getItemById(id: number): Observable<Course> {
    return this.loaderService.showLoaderUntilCompleted(this.httpClient.get<Course>(`http://localhost:3004/courses/${id}`));
  }

  updateItem(id: number, item: Partial<Course>) {
    return this.loaderService.showLoaderUntilCompleted(this.httpClient.patch(`http://localhost:3004/courses/${id}`, item))
  }

  removeItem(id: number): Observable<any> {
    return this.loaderService.showLoaderUntilCompleted(this.httpClient.delete(`http://localhost:3004/courses/${id}`))
  }
}
