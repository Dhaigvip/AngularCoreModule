/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
import { Injectable, Inject } from '@angular/core';
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(logger) {
        this.logger = logger;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    GlobalErrorHandler.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.logger.error(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        //throw error;
    };
    GlobalErrorHandler.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GlobalErrorHandler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['ILogService',] },] },
    ]; };
    return GlobalErrorHandler;
}());
export { GlobalErrorHandler };
function GlobalErrorHandler_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GlobalErrorHandler.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GlobalErrorHandler.ctorParameters;
    /** @type {?} */
    GlobalErrorHandler.prototype.logger;
}
