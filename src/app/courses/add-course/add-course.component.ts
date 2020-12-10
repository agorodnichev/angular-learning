import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';
import { BreadcrumbService } from 'src/app/breadcrumb/services/breadcrumb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crs-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DatePipe],
})
export class AddCourseComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  name: string;
  description: string;
  date: string;
  length: number = 0;
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
      this.subscription.add(
        this.coursesService.getItemById(activeCourseId).subscribe(
          activeCourseData => {
            this.name = activeCourseData.name;
            this.description = activeCourseData.description;
            this.date = this.datePipe.transform(activeCourseData.date, 'MM/dd/yyyy');
            this.length = activeCourseData.length;
            this.id = activeCourseData.id;

            this.updateBreadcrumb([
              {path: '/courses', title: 'courses'},
              {path: '', title: this.name}
            ]);

          }
        )
      );
    }
  }

  ngOnDestroy() {
    this.breadcrumbService.emptyRoutes();
    this.subscription.unsubscribe();
  }

  
  updateBreadcrumb(breadcrumbRoute) {
    this.breadcrumbService.addRoute(breadcrumbRoute);
  }

  saveHandler() {

    const newItem = {
      id: Math.floor((Math.random() * 9999)),
      name: this.name,
      date: new Date(), // TODO: take from UI
      length: this.length,
      description: this.description
    }

    if (this.route.snapshot.data['action'] === 'edit') {
      this.coursesService.updateItem(this.id, newItem).subscribe(
        data => console.log(data)
      );
    } else if (this.route.snapshot.data['action'] === 'add') {
      this.coursesService.createCourse(newItem).subscribe(
        data => console.log(data)
      );
    }
    this.router.navigate(['/courses']);
  }

  cancelHandler() {
    this.router.navigate(['/courses'])
  }

}
