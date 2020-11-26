import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crs-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  @Input() duration: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
