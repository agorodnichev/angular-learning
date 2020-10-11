import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'crs-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, Course {

  @Input() id: number;
  @Input() title: string;
  @Input() creationDate: Date;
  @Input() duration: number;
  @Input() description: string;

  constructor() {}


  ngOnInit(): void {
  }

}
