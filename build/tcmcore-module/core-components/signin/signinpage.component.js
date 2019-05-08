/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Inject } from '@angular/core';
import { UserCredentials } from '../../tcmcore-objects/tcmcore.domain.objects';
import { Router, ActivatedRoute } from '@angular/router';
var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth, router, route) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.credentials = new UserCredentials();
        this.errors = null;
        this.paramSub = null;
        this.SignIn = function () {
            _this.errors = null;
            _this.auth.AutheticateExternal(_this.credentials).subscribe(function (result) {
                if (_this.auth.IsAuthenticated()) {
                    //this.router.navigateByUrl(this.redirectURL);
                    //this.router.navigateByUrl(this.redirectURL);
                    _this.router.navigateByUrl("/");
                }
                else {
                    _this.errors = result.ErrorList;
                }
            });
        };
    }
    /**
     * @return {?}
     */
    SignInComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.redirectURL = this.route.snapshot.paramMap.get('redirectURL');
        this.paramSub = this.route.queryParamMap.switchMap(function (params) {
            _this.redirectURL = params.get('redirectURL');
            return _this.redirectURL;
        });
    };
    /**
     * @return {?}
     */
    SignInComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //if (this.paramSub) this.paramSub.unsubscribe();
    };
    SignInComponent.decorators = [
        { type: Component, args: [{
                    selector: 'signin-cmp',
                    template: "<div class=\"center-block w-xxl w-auto-xs p-v-md\"> <error-div [Errors]=\"errors\"></error-div> <div class=\"p-lg panel md-whiteframe-z1 text-color m\"> <div class=\"m-b text-sm\"> Sign in with your User name and Password. </div> <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\"> <div class=\"md-form-group float-label\"> <input type=\"email\" class=\"md-input\" name=\"UserName\" [(ngModel)]=\"credentials.UserName\" required> <label>User name</label> </div> <div class=\"md-form-group float-label\"> <input type=\"password\" class=\"md-input\" name=\"Password\" [(ngModel)]=\"credentials.Password\" required> <label>Password</label> </div> <div class=\"m-b-md\"> <label class=\"md-check\"> <input type=\"checkbox\" name=\"RememberMe\" [(ngModel)]=\"credentials.RememberMe\"><i class=\"indigo\"></i> Keep me signed in </label> </div> <button type=\"submit\" (click)=\"SignIn()\" class=\"md-btn md-raised purple btn-block p-h-md\">Sign in</button> </form> </div> <div class=\"p-v-lg text-center\"> <div class=\"m-b\"><button class=\"md-btn\">Forgot password?</button></div> <div>Do not have an account? <button class=\"md-btn\">Create an account</button></div> </div> </div> "
                },] },
    ];
    /** @nocollapse */
    SignInComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IAuthService',] },] },
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    return SignInComponent;
}());
export { SignInComponent };
function SignInComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SignInComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SignInComponent.ctorParameters;
    /** @type {?} */
    SignInComponent.prototype.credentials;
    /** @type {?} */
    SignInComponent.prototype.errors;
    /** @type {?} */
    SignInComponent.prototype.paramSub;
    /** @type {?} */
    SignInComponent.prototype.redirectURL;
    /** @type {?} */
    SignInComponent.prototype.SignIn;
    /** @type {?} */
    SignInComponent.prototype.auth;
    /** @type {?} */
    SignInComponent.prototype.router;
    /** @type {?} */
    SignInComponent.prototype.route;
}
