import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private readonly authService: AuthService,
    ) {}
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string = ''
        if (this.authService.isAuthenticated) {

            this.authService.getUserInfo().pipe(first()).subscribe(
                data => {
                    token = data.token;
                }
            )

            // token = this.authService.getUserInfo()['token'];
        }
        const authReq = req.clone({
            headers: req.headers.set('Authorization', token)
        });
        return next.handle(authReq);
    }
}