import { Component } from '@angular/core';
import {Course} from './shared/course.model';
import { CoursesService } from './shared/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Observable<Course[]>;
  inputValue: string;
  
  constructor(
    private readonly coursesService: CoursesService,
    ) {
      this.courses = this.coursesService.getList()
    }

  searchHandler() {
    this.courses = this.coursesService.getList(this.inputValue);
  }

  isCourseListEmpty(courses: Course[]) {
    return courses.length === 0;
  }
}
