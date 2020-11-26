import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';
import { BreadcrumbService } from 'src/app/breadcrumb/services/breadcrumb.service';

@Component({
  selector: 'crs-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DatePipe],
})
export class AddCourseComponent implements OnInit, OnDestroy {

  title: string;
  description: string;
  createDate: string;
  duration: number = 0;
  id?: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private readonly datePipe: DatePipe,
    private readonly router: Router,
    private readonly breadcrumbService: BreadcrumbService,
    ) { }

  ngOnInit(): void {
    
    if (this.route.snapshot.data['action'] === 'edit') {
      const activeCourseId = parseInt(this.route.snapshot.params['id']);
      const activeCourseData = this.coursesService.getItemById(activeCourseId);
      this.title = activeCourseData.title;
      this.description = activeCourseData.description;
      this.createDate = this.datePipe.transform(activeCourseData.creationDate, 'MM/dd/yyyy');
      this.duration = activeCourseData.duration;
      this.id = activeCourseData.id;

      this.updateBreadcrumb([
        {path: '/courses', title: 'courses'},
        {path: '', title: this.title}
      ]);
    }
  }

  ngOnDestroy() {
    this.breadcrumbService.emptyRoutes();
  }

  
  updateBreadcrumb(breadcrumbRoute) {
    this.breadcrumbService.addRoute(breadcrumbRoute);
  }

  saveHandler() {

    const newItem = {
      title: this.title,
      creationDate: new Date(), // TODO: take from UI
      duration: this.duration,
      description: this.description
    }

    if (this.route.snapshot.data['action'] === 'edit') {
      this.coursesService.updateItem(this.id, newItem);
    } else if (this.route.snapshot.data['action'] === 'add') {
      this.coursesService.createCourse(newItem);
    }
    this.router.navigate(['/courses']);
  }

  cancelHandler() {
    this.router.navigate(['/courses'])
  }

}
