import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import { BreadcrumbService, BreadcrumbRoute } from './services/breadcrumb.service';

@Component({
  selector: 'crs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, DoCheck {

  title: string = "Courses";

  routes: BreadcrumbRoute[] = this.breadcrumbService.routes;

  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.routes !== this.breadcrumbService.routes) {
      this.routes = this.breadcrumbService.routes;
    }
  }

}
