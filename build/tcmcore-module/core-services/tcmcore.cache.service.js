/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-10    Created
*/
import { Injectable } from '@angular/core';
import { CacheService } from 'ng2-cache-service';
var TCMCacheService = /** @class */ (function () {
    function TCMCacheService(_cacheService) {
        this._cacheService = _cacheService;
        this.BUILD_VERSION = 1.0;
        this._cacheService.setGlobalPrefix("TCM");
    }
    /**
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    TCMCacheService.prototype.Set = /**
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        return this._cacheService.set(key, data);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.get(key);
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TCMCacheService.prototype.GetTagData = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        return this._cacheService.getTagData(tag);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Exists = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.exists(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.remove(key);
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TCMCacheService.prototype.RemoveTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        return this._cacheService.removeTag(tag);
    };
    /**
     * @return {?}
     */
    TCMCacheService.prototype.RemoveAll = /**
     * @return {?}
     */
    function () {
        return this._cacheService.removeAll();
    };
    TCMCacheService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TCMCacheService.ctorParameters = function () { return [
        { type: CacheService, },
    ]; };
    return TCMCacheService;
}());
export { TCMCacheService };
function TCMCacheService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TCMCacheService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TCMCacheService.ctorParameters;
    /** @type {?} */
    TCMCacheService.prototype.BUILD_VERSION;
    /** @type {?} */
    TCMCacheService.prototype._cacheService;
}
