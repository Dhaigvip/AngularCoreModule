/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        var _this = this;
        this.http = http;
        this._filepath = './assets/config/config.json';
        this.ReadConfigFile = function () {
            return _this.http.get(_this._filepath).map(function (response) {
                var /** @type {?} */ result = /** @type {?} */ (response.json());
                _this._config = result;
                return result;
            });
        };
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.Init = /**
     * @return {?}
     */
    function () {
        return this.ReadConfigFile();
    };
    Object.defineProperty(ConfigService.prototype, "Config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ConfigService;
}());
export { ConfigService };
function ConfigService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfigService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfigService.ctorParameters;
    /** @type {?} */
    ConfigService.prototype._filepath;
    /** @type {?} */
    ConfigService.prototype._config;
    /** @type {?} */
    ConfigService.prototype.ReadConfigFile;
    /** @type {?} */
    ConfigService.prototype.http;
}
