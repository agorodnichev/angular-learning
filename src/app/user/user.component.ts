import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from './user.model';

@Component({
  selector: 'crs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(
      { email: this.email, 
        password: this.password
      },
      () => {
        this.router.navigate(['/courses'])
      }
    ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
