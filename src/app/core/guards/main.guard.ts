import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {

  constructor(private router: Router) {}

  public canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }

  public isLoggedIn(): boolean {
    let status: boolean;
    status = false;
    if (localStorage.getItem('status') === 'loggedin') {
      status = true;
      } else {
      status = false;
      }
    return status;
  }
}
