import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  courses: Course[] = [
    {id: 1, topRated: true, title: 'Angular development', creationDate: new Date(2020, 9, 30), duration: 148, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    {id: 2, topRated: false, title: 'ReactJs development', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    {id: 3, topRated: false, title: 'VueJS development', creationDate: new Date(2020, 10, 19), duration: 3000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    {id: 4, topRated: true, title: 'Java development', creationDate: new Date(2020, 11, 20), duration: 4000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
    {id: 5, topRated: false, title: 'Go development', creationDate: new Date(2020, 8, 1), duration: 50, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru'},
  ];


  getList(): Course[] {
    return this.courses;
  }

  createCourse(course: Omit<Course, "id">) {
    let id = this.getLastId() + 1;
    this.courses.push({id, ...course})
  }

  getItemById(id: number): Course {
    return this.courses.find(el => el.id === id);
  }

  updateItem(id: number, item: Partial<Course>) {
    let idx = this.getItemIndexById(id);
    const copyElement = {...this.courses[idx], ...item}
    this.courses.splice(idx, 1, copyElement);
  }

  removeItem(id: number) {
    let idx = this.getItemIndexById(id);
    let yes = window.confirm('Do you really want to delete this course?');
    if (yes) {
      this.courses.splice(idx, 1);
    }
  }

  private getItemIndexById(id: number) {
    return this.courses.findIndex(el => el.id === id);
  }

  private getLastId(): number {
    return this.courses.length;
  }

}
