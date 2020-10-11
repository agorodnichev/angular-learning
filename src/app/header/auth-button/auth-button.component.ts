import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'crs-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  
  @Input() iconUrl: string;
  @Input() title: string;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
