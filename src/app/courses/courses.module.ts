import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
  ],
  exports:[
    CoursesComponent,
  ],
  providers: [],
})
export class CoursesModule { }
