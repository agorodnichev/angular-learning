import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crs-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string;
  description: string;
  date: string;
  duration: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  saveHandler() {
    console.log('save');
  }

  cancelHandler() {
    console.log('cancel');
  }

}
