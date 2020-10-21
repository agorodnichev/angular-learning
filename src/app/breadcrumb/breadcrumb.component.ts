import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  title: string = "Courses";

  constructor() { }

  ngOnInit(): void {
  }

}
