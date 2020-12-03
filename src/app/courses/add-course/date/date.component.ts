import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crs-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() date: string;
  courseDate: string;

  constructor() { }

  ngOnInit(): void {
    this.courseDate = this.date;
  }

}
