/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-03    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var LogService = /** @class */ (function () {
    function LogService(http, configService) {
        var _this = this;
        this.http = http;
        this.configService = configService;
        this.logObject = function (message, obj) {
            if (!obj)
                console.error(message + " Object is NULL");
            var /** @type {?} */ objstr = JSON.stringify(obj);
            console.log(message, objstr);
        };
        this.log = function (message) {
            console.log(message);
        };
        this.warn = function (message) {
            console.warn(message);
        };
        this.info = function (message) {
            console.info(message);
        };
        this.error = function (message) {
            console.error(message);
            if (_this.configService.Config.ServerLog)
                _this.logServer(message, 'error');
        };
        this.debug = function (message) { console.debug(message); };
        this.logServer = function (message, type) {
            var /** @type {?} */ msg = { user: "", url: "", message: message, type: type };
            var /** @type {?} */ url = _this.configService.Config.WebApiUrl + 'Jslog';
            return _this.http.post(url, msg).subscribe();
        };
    }
    LogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LogService.ctorParameters = function () { return [
        { type: Http, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
    ]; };
    return LogService;
}());
export { LogService };
function LogService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LogService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LogService.ctorParameters;
    /** @type {?} */
    LogService.prototype.logObject;
    /** @type {?} */
    LogService.prototype.log;
    /** @type {?} */
    LogService.prototype.warn;
    /** @type {?} */
    LogService.prototype.info;
    /** @type {?} */
    LogService.prototype.error;
    /** @type {?} */
    LogService.prototype.debug;
    /** @type {?} */
    LogService.prototype.logServer;
    /** @type {?} */
    LogService.prototype.http;
    /** @type {?} */
    LogService.prototype.configService;
}
