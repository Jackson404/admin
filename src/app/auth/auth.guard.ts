import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate,CanActivateChild {

  constructor(
    private router:Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AuthGuard#canActivate called');
    const idToken = window.localStorage.getItem('idToken');
    if (idToken != null) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute,state);
  }

}
