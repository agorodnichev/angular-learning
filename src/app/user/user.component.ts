import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'crs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, User {

  @Input() id: number;
  @Input() firstName: string;
  @Input() lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
