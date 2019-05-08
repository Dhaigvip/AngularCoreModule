/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var LoaderService = /** @class */ (function () {
    function LoaderService() {
        var _this = this;
        this.status = new BehaviorSubject(false);
        this.display = function (value) {
            _this.status.next(value);
        };
    }
    LoaderService.decorators = [
        { type: Injectable },
    ];
    return LoaderService;
}());
export { LoaderService };
function LoaderService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoaderService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoaderService.ctorParameters;
    /** @type {?} */
    LoaderService.prototype.status;
    /** @type {?} */
    LoaderService.prototype.display;
}
