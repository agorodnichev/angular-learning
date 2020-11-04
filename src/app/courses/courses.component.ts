import { Component, OnInit } from '@angular/core';
import {Course} from './shared/course.model';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesMock: Course[];

  constructor() { }
  
  // ngOnChanges() {console.log('ngOnChanges');}
  // ngDoCheck() {console.log('ngDoCheck');}
  // ngAfterContentInit() {console.log('ngAfterContentInit');}
  // ngAfterContentChecked() {console.log('ngAfterContentChecked');}
  // ngAfterViewInit() {console.log('ngAfterViewInit');}
  // ngAfterViewChecked() {console.log('ngAfterViewChecked');}
  // ngOnDestroy() {console.log('ngOnDestroy');}


  ngOnInit(): void {
    this.coursesMock = [
      {id: 1, title: 'Angular development', creationDate: new Date(2020, 9, 17), duration: 148, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 2, title: 'ReactJs development', creationDate: new Date(2020, 9, 18), duration: 2000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 3, title: 'VueJS development', creationDate: new Date(2020, 9, 19), duration: 3000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 4, title: 'Java development', creationDate: new Date(2020, 9, 20), duration: 4000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
      {id: 5, title: 'Go development', creationDate: new Date(2020, 9, 21), duration: 5000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    ];

  }

}
