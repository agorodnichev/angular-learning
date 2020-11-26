import { Component, OnInit } from '@angular/core';
import {Course} from './shared/course.model';
import { FilterByTextPipe } from '../shared/pipes/filter-by-text.pipe';
import { CoursesService } from './shared/courses.service';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [ FilterByTextPipe ]
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  inputValue: string;
  filterList: Course[];
  
  constructor(
    private readonly filterByTextPipe: FilterByTextPipe,
    private readonly coursesService: CoursesService,
    ) {}

  searchHandler() {
    this.filterList = this.filterByTextPipe.transform(this.courses, this.inputValue);
  }

  get isCourseListEmpty(): boolean {
    return Array.isArray(this.courses) && !this.courses.length;
  }
  
  // ngOnChanges() {console.log('ngOnChanges');}
  ngDoCheck() {
    if(this.filterList.length !== this.courses.length) {
      this.filterList = [...this.courses];
    }
  }
  // ngAfterContentInit() {console.log('ngAfterContentInit');}
  // ngAfterContentChecked() {console.log('ngAfterContentChecked');}
  // ngAfterViewInit() {console.log('ngAfterViewInit');}
  // ngAfterViewChecked() {console.log('ngAfterViewChecked');}
  // ngOnDestroy() {console.log('ngOnDestroy');}

  

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.filterList = [...this.courses];
  }

}
