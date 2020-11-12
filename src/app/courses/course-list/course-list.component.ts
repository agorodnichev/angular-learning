import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'crs-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  @Input() courses: Course[];
  
  constructor(private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    // console.log(id)
    this.coursesService.removeItem(id);
  }

  loadMoreHandler() {
    console.log('load more');
  }

}
