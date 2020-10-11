import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    CoursesComponent,
  ],
  providers: [],
})
export class CoursesModule { }
