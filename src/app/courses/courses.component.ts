import { Component, OnInit } from '@angular/core';
import {Course} from './shared/course.model';
import { FilterByTextPipe } from '../shared/pipes/filter-by-text.pipe';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [ FilterByTextPipe ]
})
export class CoursesComponent implements OnInit {

  coursesMock: Course[];
  inputValue: string;
  filterList: Course[];
  
  constructor(private readonly filterByTextPipe: FilterByTextPipe) {}

  searchHandler() {
    this.filterList = this.filterByTextPipe.transform(this.coursesMock, this.inputValue);
  }

  get isCourseListEmpty(): boolean {
    return !this.coursesMock.length;
  }
  
  // ngOnChanges() {console.log('ngOnChanges');}
  // ngDoCheck() {console.log('ngDoCheck');}
  // ngAfterContentInit() {console.log('ngAfterContentInit');}
  // ngAfterContentChecked() {console.log('ngAfterContentChecked');}
  // ngAfterViewInit() {console.log('ngAfterViewInit');}
  // ngAfterViewChecked() {console.log('ngAfterViewChecked');}
  // ngOnDestroy() {console.log('ngOnDestroy');}


  ngOnInit(): void {
    this.coursesMock = [
      {id: 1, topRated: true, title: 'Angular development', creationDate: new Date(2020, 9, 30), duration: 148, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 2, topRated: false, title: 'ReactJs development', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 3, topRated: false, title: 'VueJS development', creationDate: new Date(2020, 10, 19), duration: 3000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 4, topRated: true, title: 'Java development', creationDate: new Date(2020, 11, 20), duration: 4000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 5, topRated: false, title: 'Go development', creationDate: new Date(2020, 8, 1), duration: 50, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    ];
    this.filterList = [...this.coursesMock];

  }

}
