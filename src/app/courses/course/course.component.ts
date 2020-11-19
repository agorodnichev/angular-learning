import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from '../shared/course.model';


@Component({
  selector: 'crs-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Output() delete = new EventEmitter<number>();
  @Input() course: Course;

  constructor() {}

  ngOnInit(): void {
  }

  deleteHandler(event: number) {
    this.delete.emit(event);
  }

  editHandler() {
    console.log('edit handler pushed');
  }

}
