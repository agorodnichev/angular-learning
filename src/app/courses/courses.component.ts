import { Component } from '@angular/core';
import {Course} from './shared/course.model';
import { CoursesService } from './shared/courses.service';
import { Observable, Subject, concat } from 'rxjs';
import { debounceTime, filter, first, switchMap } from 'rxjs/operators';
import { setNewCoursesList } from './shared/stores/courses-list/courses-list.actions';
import { Store } from '@ngrx/store';

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
    private readonly store: Store<{coursesList: Course[]}>,
    ) {
      this.courses = this.store.select('coursesList');
      concat(
      this.coursesService.getList().pipe(first()),
      this.subject.pipe(
        filter(searchText => searchText.length >= 3),
        debounceTime(250),
        switchMap((searchText: string) => this.coursesService.getList(searchText))
      )).subscribe(
        data => {
          this.store.dispatch(setNewCoursesList({Course: data}))
        }
      )
    }

  handleTyping(event: any) {

    this.subject.next(event.target.value);
  }

  isCourseListEmpty(courses: Course[]) {
    return courses.length === 0;
  }
}
