import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {AddCourseComponent} from './courses/add-course/add-course.component';

const routes: Routes = [
  { path: 'courses/add-course', component: AddCourseComponent},
  { path: 'courses', component: CoursesComponent},
  { path: '',   redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
