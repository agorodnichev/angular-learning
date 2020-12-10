import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  getList(searchTextFragment?: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`http://localhost:3004/courses?start=0&count=5&sort=date${!!searchTextFragment ? '&textFragment='+searchTextFragment : '' }`)
    .pipe(
      map( (courses: Course[]) => {
       return courses.map( course => { 
         course.date = new Date(course.date)
         return course;
        }) 
      })
    );
  }

  createCourse(course: Course): Observable<any> {
    return this.httpClient.post('http://localhost:3004/courses', course);
    // let id = this.getLastId() + 1;
    // this.courses.push({id, ...course})
  }

  getItemById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`http://localhost:3004/courses/${id}`);
    // return 
    // return this.courses.find(el => el.id === id);
  }

  updateItem(id: number, item: Partial<Course>) {
    return this.httpClient.patch(`http://localhost:3004/courses/${id}`, item)
    // let idx = this.getItemIndexById(id);
    // const copyElement = {...this.courses[idx], ...item}
    // this.courses.splice(idx, 1, copyElement);
  }

  removeItem(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3004/courses/${id}`)
    // let idx = this.getItemIndexById(id);
    // let yes = window.confirm('Do you really want to delete this course?');
    // if (yes) {
    //   this.courses.splice(idx, 1);
    // }
  }

  // private getItemIndexById(id: number) {
  //   return this.courses.findIndex(el => el.id === id);
  // }

  // private getLastId(): number {
  //   return this.courses.length;
  // }

}
