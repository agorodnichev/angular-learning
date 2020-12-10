import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../shared/course.model';
import { CoursesService } from '../shared/courses.service';
import { Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'crs-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  
  subscriptions: Subscription = new Subscription();

  @Input() courses: Course[];
  
  constructor(private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  deleteCourse(id: number) {
    this.subscriptions.add(
      this.coursesService.removeItem(id)
      .pipe(
        switchMap( () => this.coursesService.getList()),
        tap( (data) => {
          this.courses = data
        })  
      ).subscribe()
    );
  }

  loadMoreHandler() {
    console.log('load more');
  }

}
