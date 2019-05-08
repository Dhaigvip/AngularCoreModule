/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        console.log('AuthGuard#canActivate called');
        if (this.authService.IsAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(["signinpage"], { queryParams: { 'redirectURL': state.url } });
        }
    };
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivateChild = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        console.log('AuthGuard#canActivateChild called');
        return this.canActivate(next, state);
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IAuthService',] },] },
        { type: Router, },
    ]; };
    return AuthGuard;
}());
export { AuthGuard };
function AuthGuard_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AuthGuard.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AuthGuard.ctorParameters;
    /** @type {?} */
    AuthGuard.prototype.authService;
    /** @type {?} */
    AuthGuard.prototype.router;
}
