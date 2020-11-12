import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from './user.model';

@Component({
  selector: 'crs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login({email: this.email, password: this.password});
    console.log('logged in successfully');
  }

}
