/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-12    Created
*/
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
var AuthService = /** @class */ (function () {
    //public onContext: Subject<ContextDTO> = new Subject<ContextDTO>();
    function AuthService(window, dataService) {
        var _this = this;
        this.window = window;
        this.dataService = dataService;
        this.isAutheticated = false;
        this.IsAuthenticated = function () {
            return _this.UserContext ? _this.UserContext.IsAutheticated : false;
        };
        this.AutheticateExternal = function (credentials) {
            return null;
        };
        this.PreAutheticate = function () {
            return null;
        };
        this.GetExpiryDate = function () {
            return null;
        };
        this.Autheticate = function () {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "Autheticate";
            return _this.dataService.Post("Auth", request, null).map(function (response) {
                _this.UserContext = response.Data;
                var /** @type {?} */ strContext = JSON.stringify(_this.UserContext.Context);
                var /** @type {?} */ strToken = _this.UserContext.Token;
                sessionStorage.setItem("UserToken", strToken);
                sessionStorage.setItem("UserContext", strContext);
                return _this.UserContext;
            });
        };
        this.IsInRole = function (role) {
            return _this.UserContext.Roles.filter(function (x) { return x === role; }).length > 0;
        };
        this.IsAuthorisedForUpdate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.IsAuthorisedForCreate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.DecodeUserToken = function () {
            var /** @type {?} */ self = _this;
            if (_this.UserContext.Token) {
                var /** @type {?} */ base64Url = _this.UserContext.Token.split('.')[1];
                var /** @type {?} */ base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(_this.window.nativeWindow.atob(base64));
            }
            return null;
        };
    }
    /**
     * @return {?}
     */
    AuthService.prototype.GetUserContext = /**
     * @return {?}
     */
    function () {
        return this.UserContext ? this.UserContext.Context : null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IDataService',] },] },
    ]; };
    return AuthService;
}());
export { AuthService };
function AuthService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AuthService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AuthService.ctorParameters;
    /** @type {?} */
    AuthService.prototype.UserContext;
    /** @type {?} */
    AuthService.prototype.UserToken;
    /** @type {?} */
    AuthService.prototype.isAutheticated;
    /** @type {?} */
    AuthService.prototype.IsAuthenticated;
    /** @type {?} */
    AuthService.prototype.AutheticateExternal;
    /** @type {?} */
    AuthService.prototype.PreAutheticate;
    /** @type {?} */
    AuthService.prototype.GetExpiryDate;
    /** @type {?} */
    AuthService.prototype.Autheticate;
    /** @type {?} */
    AuthService.prototype.IsInRole;
    /** @type {?} */
    AuthService.prototype.IsAuthorisedForUpdate;
    /** @type {?} */
    AuthService.prototype.IsAuthorisedForCreate;
    /** @type {?} */
    AuthService.prototype.DecodeUserToken;
    /** @type {?} */
    AuthService.prototype.window;
    /** @type {?} */
    AuthService.prototype.dataService;
}
