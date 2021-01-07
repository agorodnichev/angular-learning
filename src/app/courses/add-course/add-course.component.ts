import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';
import { BreadcrumbService } from 'src/app/breadcrumb/services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { editCourse, addCourse } from '../shared/stores/courses-list/courses-list.actions';
import { Store } from '@ngrx/store';
import { Course } from '../shared/course.model';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
    const format = pattern.test(control.value);
    return format ? null : {formatDate: {value: control.value}};
  }
}

@Component({
  selector: 'crs-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DatePipe],
})
export class AddCourseComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  cuurentId: number;

  mainForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required, dateFormatValidator()]),
    length: new FormControl('', [Validators.required]),
    // authors: new FormControl('', [Validators.required])
  })

  constructor(
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private readonly datePipe: DatePipe,
    private readonly router: Router,
    private readonly breadcrumbService: BreadcrumbService,
    private readonly store: Store<{coursesList: Course[]}>
    ) {}

  ngOnInit(): void {
    if (this.route.snapshot.data['action'] === 'edit') {
      this.cuurentId = parseInt(this.route.snapshot.params['id']);
      this.subscription.add(
      this.coursesService.getItemById(this.cuurentId).subscribe(
        (activeCourseData) => {
          this.mainForm.controls['name'].setValue(activeCourseData.name);
          this.mainForm.controls['description'].setValue(activeCourseData.description);
          this.mainForm.controls['date'].setValue(this.datePipe.transform(activeCourseData.date, 'MM/dd/yyyy'));
          this.mainForm.controls['length'].setValue(activeCourseData.length);

          this.updateBreadcrumb([
            {path: '/courses', title: 'courses'},
            {path: '', title: this.mainForm.controls['name'].value}
          ]);
        }
      ));
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
      name: this.mainForm.controls['name'].value,
      date: new Date(), // TODO: take from UI
      length: this.mainForm.controls['length'].value,
      description: this.mainForm.controls['description'].value
    }

    if (this.route.snapshot.data['action'] === 'edit') {
      this.coursesService.updateItem(this.cuurentId, newItem).subscribe(
        data => {
          this.store.dispatch(editCourse({Course: data}))
        }
      );
    } else if (this.route.snapshot.data['action'] === 'add') {
      this.coursesService.createCourse(newItem).subscribe(
        data => {
          this.store.dispatch(addCourse({Course: data}))
        }
      );
    }
    this.router.navigate(['/courses']);
  }

  cancelHandler() {
    this.router.navigate(['/courses'])
  }

}
