import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'crs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  isAuth: Observable<boolean>;

  constructor(
    readonly authService: AuthService,
    readonly store: Store<{isAuth: boolean}>,
  ) {
    this.isAuth = this.store.select('isAuth');
  }

}
