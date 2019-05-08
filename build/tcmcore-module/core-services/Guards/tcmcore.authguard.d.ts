import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IAuthService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
export declare class AuthGuard implements CanActivate, CanActivateChild {
    private authService;
    private router;
    constructor(authService: IAuthService, router: Router);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
