import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly store: Store<{isAuth: boolean}>,
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      Observable<boolean | 
                 UrlTree> | 
                 Promise<boolean | 
                 UrlTree> | boolean | UrlTree {
    if (this.store.select('isAuth')) return true;
    // if (this.authService.isAuthenticated) return true;
    return of(this.router.parseUrl('/courses'));
  }
  
}
