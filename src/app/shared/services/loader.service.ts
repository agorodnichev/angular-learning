import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new BehaviorSubject<boolean>(false);

  loader$: Observable<boolean> = this.loaderSubject.asObservable();

  constructor() { }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {

    return of(null).pipe(
      tap(()=> this.loaderOn()),
      concatMap(() => obs$),
      finalize(() => this.loaderOff())
    );

  }

  private loaderOn() {
    this.loaderSubject.next(true);
  }

  private loaderOff() {
    this.loaderSubject.next(false);
  }

}
