import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'crs-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  @Input() courses: Course[];
  
  constructor() { }

  ngOnInit(): void {
  }

  printInformation(id: number) {
    console.log(id)
  }

  loadMoreHandler() {
    console.log('load more');
  }

}
