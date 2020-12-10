import { Component } from '@angular/core';
import {Course} from './shared/course.model';
import { CoursesService } from './shared/courses.service';
import { Observable, Subject, concat } from 'rxjs';
import { debounceTime, filter, first, switchMap } from 'rxjs/operators';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  subject = new Subject<string>();
  courses: Observable<Course[]>;
  inputValue: string;
  
  constructor(
    private readonly coursesService: CoursesService,
    ) {
      this.courses = 
      
      concat(
      this.coursesService.getList().pipe(first()),
      this.subject.pipe(
        filter(searchText => searchText.length >= 3),
        debounceTime(250),
        switchMap((searchText: string) => this.coursesService.getList(searchText))
      ));

    }

  handleTyping(event: any) {
    this.subject.next(event.target.value);
  }

  isCourseListEmpty(courses: Course[]) {
    return courses.length === 0;
  }
}
