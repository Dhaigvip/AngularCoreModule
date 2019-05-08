/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-10    Created
*/
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
var AuthServiceCore = /** @class */ (function () {
    function AuthServiceCore(window, dataService) {
        var _this = this;
        this.window = window;
        this.dataService = dataService;
        this.decodedToken = null;
        this.userAutheticated = new EventEmitter();
        this.IsAuthenticated = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            return context ? context.IsAutheticated : false;
        };
        this.GetUserContext = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            return context ? context.Context : null;
        };
        this.GetExpiryDate = function () {
            if (_this.decodedToken) {
                var /** @type {?} */ d = new Date(_this.decodedToken.exp * 1000);
                d.setHours(0, 0, 0, 0);
                return d;
            }
            var /** @type {?} */ today = new Date();
            today.setHours(0, 0, 0, 0);
            return today;
        };
        this.PreAutheticate = function () {
            //let request = new ClientRequestDTO();
            //request.MetaData.Action = "Autheticate";
            //return this.dataService.Post("Auth/Pre", request, null).map((response: ClientResponseDTO) => {
            //  let strToken = response.Data;
            //  //sessionStorage.setItem("UserToken", strToken);
            //  return strToken;
            //});
            return null;
        };
        this.AutheticateInternal = function (path) {
            var /** @type {?} */ d = new Date();
            d.setHours(0, 0, 0, 0);
            if (_this.GetExpiryDate() > d) {
                var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
                _this.userAutheticated.next(true);
                return Observable.of(context);
            }
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "Autheticate";
            return _this.dataService.PostAnonymous(path, request, null).map(function (response) {
                var /** @type {?} */ UserContext = response.Data;
                var /** @type {?} */ strContext = JSON.stringify(UserContext);
                sessionStorage.setItem("UserContext", strContext);
                _this.DecodeUserTokenInterval();
                if (_this.IsAuthenticated()) {
                    _this.userAutheticated.next(true);
                }
                return UserContext;
            });
        };
        this.Autheticate = function () {
            return _this.AutheticateInternal("Auth/Win");
        };
        this.AutheticateExternal = function (credentials) {
            return _this.AutheticateInternal("Auth/External");
        };
        this.IsInRole = function (role) {
            if (_this.decodedToken && _this.decodedToken.role) {
                var /** @type {?} */ inrole = _this.decodedToken.role.filter(function (x) { return x === role; }).length > 0;
                return inrole;
            }
            return false;
            //return this.UserContext.Roles.filter(x => x === role).length > 0
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
            return _this.decodedToken;
        };
        this.DecodeUserTokenInterval = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            if (context && context.Token) {
                var /** @type {?} */ base64Url = context.Token.split('.')[1];
                var /** @type {?} */ base64 = base64Url.replace('-', '+').replace('_', '/');
                _this.decodedToken = JSON.parse(_this.window.nativeWindow.atob(base64));
            }
        };
        this.DecodeUserTokenInterval();
    }
    AuthServiceCore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthServiceCore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IDataService',] },] },
    ]; };
    return AuthServiceCore;
}());
export { AuthServiceCore };
function AuthServiceCore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AuthServiceCore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AuthServiceCore.ctorParameters;
    /** @type {?} */
    AuthServiceCore.prototype.decodedToken;
    /** @type {?} */
    AuthServiceCore.prototype.userAutheticated;
    /** @type {?} */
    AuthServiceCore.prototype.IsAuthenticated;
    /** @type {?} */
    AuthServiceCore.prototype.GetUserContext;
    /** @type {?} */
    AuthServiceCore.prototype.GetExpiryDate;
    /** @type {?} */
    AuthServiceCore.prototype.PreAutheticate;
    /** @type {?} */
    AuthServiceCore.prototype.AutheticateInternal;
    /** @type {?} */
    AuthServiceCore.prototype.Autheticate;
    /** @type {?} */
    AuthServiceCore.prototype.AutheticateExternal;
    /** @type {?} */
    AuthServiceCore.prototype.IsInRole;
    /** @type {?} */
    AuthServiceCore.prototype.IsAuthorisedForUpdate;
    /** @type {?} */
    AuthServiceCore.prototype.IsAuthorisedForCreate;
    /** @type {?} */
    AuthServiceCore.prototype.DecodeUserToken;
    /** @type {?} */
    AuthServiceCore.prototype.DecodeUserTokenInterval;
    /** @type {?} */
    AuthServiceCore.prototype.window;
    /** @type {?} */
    AuthServiceCore.prototype.dataService;
}
