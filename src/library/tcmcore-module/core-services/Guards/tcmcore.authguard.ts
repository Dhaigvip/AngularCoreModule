/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { Injectable, Inject } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { IAuthService } from '../../tcmcore-objects/tcmcore.domain.interfaces';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(   
    @Inject('IAuthService') private authService: IAuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('AuthGuard#canActivate called');
    if (this.authService.IsAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(["signinpage"], { queryParams: { 'redirectURL': state.url } });
    }
  }
  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('AuthGuard#canActivateChild called');
    return this.canActivate(next, state);
  }
}
