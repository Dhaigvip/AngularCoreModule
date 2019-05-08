/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-03-22    Created
*/
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var StaticDataService = /** @class */ (function () {
    function StaticDataService(locale, http) {
        var _this = this;
        this.locale = locale;
        this.http = http;
        this._cache = [];
        this._filepath = './assets/data/staticdata-{}.json';
        this.GetStaticDataItems = function (key) {
            var /** @type {?} */ cachedObject = _this.GetStaticData(key);
            if (cachedObject)
                return cachedObject.Items;
            return null;
        };
        this.GetStaticDataList = function (keys) {
            var /** @type {?} */ cacheList = new Array();
            for (var /** @type {?} */ i = 0; i < keys.length; i++) {
                cacheList.push(_this.GetStaticData(keys[i]));
            }
            return cacheList;
        };
        this.GetStaticData = function (key) {
            if (_this._cache != null && _this._cache.length > 0) {
                return _this._cache.filter(function (x) { return x.GroupCode.trim() == key.trim(); })[0];
            }
            return null;
        };
        this.LoadStaticData = function () {
            console.log("Loading static data");
            return _this.http.get(_this._filepath).map(function (response) {
                console.log("Loading static data-->Done");
                var /** @type {?} */ result = response.json();
                _this._cache = result;
                return result;
            });
        };
        this._filepath = this._filepath.replace(/{}/g, locale);
    }
    StaticDataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StaticDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: Http, },
    ]; };
    return StaticDataService;
}());
export { StaticDataService };
function StaticDataService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StaticDataService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StaticDataService.ctorParameters;
    /** @type {?} */
    StaticDataService.prototype._cache;
    /** @type {?} */
    StaticDataService.prototype._filepath;
    /** @type {?} */
    StaticDataService.prototype.GetStaticDataItems;
    /** @type {?} */
    StaticDataService.prototype.GetStaticDataList;
    /** @type {?} */
    StaticDataService.prototype.GetStaticData;
    /** @type {?} */
    StaticDataService.prototype.LoadStaticData;
    /** @type {?} */
    StaticDataService.prototype.locale;
    /** @type {?} */
    StaticDataService.prototype.http;
}
