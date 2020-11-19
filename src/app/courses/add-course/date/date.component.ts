import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crs-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() date: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
