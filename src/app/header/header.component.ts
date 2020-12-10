import { Component, OnInit } from '@angular/core';
import { pluck, filter } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'crs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo = this.authService.getUserInfo().pipe(
    filter(data => !!data),
    pluck('userInfo'),
  );

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {}

}
