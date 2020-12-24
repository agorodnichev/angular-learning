import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { DateComponent } from './add-course/date/date.component';
import { DurationComponent } from './add-course/duration/duration.component';
import { AuthorsComponent } from './add-course/authors/authors.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    AddCourseComponent,
    DateComponent,
    DurationComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    CoursesComponent,
  ],
  providers: [],
})
export class CoursesModule { }
