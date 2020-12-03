import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'crs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  constructor(
    readonly authService: AuthService,
  ) {}

}
