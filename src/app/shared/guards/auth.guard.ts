import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      Observable<boolean | 
                 UrlTree> | 
                 Promise<boolean | 
                 UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated) return true;
    return of(this.router.parseUrl('/courses'));
  }
  
}
