import { Injectable } from '@angular/core';

export interface BreadcrumbRoute {
  path: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  routes: Array<BreadcrumbRoute> = [];

  constructor() { }


  addRoute(items: BreadcrumbRoute | Array<BreadcrumbRoute>) {
    if (Array.isArray(items)) {
      this.routes.push(...items)
    } else {
      this.routes.push(items)
    }
  }

  emptyRoutes() {
    this.routes = [];
  }


}
