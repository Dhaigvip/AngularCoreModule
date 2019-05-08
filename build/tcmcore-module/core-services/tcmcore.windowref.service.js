/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-08    Created
*/
import { Injectable } from '@angular/core';
/**
 * @return {?}
 */
function _window() {
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return []; };
    return WindowRef;
}());
export { WindowRef };
function WindowRef_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WindowRef.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WindowRef.ctorParameters;
}
