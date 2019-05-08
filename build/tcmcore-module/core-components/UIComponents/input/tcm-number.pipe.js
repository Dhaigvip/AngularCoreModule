/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Pipe, Injectable } from "@angular/core";
import { Utilities } from "../../../tcmcore-objects/tcmcore.utilities";
var tcmnumber = /** @class */ (function () {
    function tcmnumber(utilities) {
        this.utilities = utilities;
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    tcmnumber.prototype.transform = /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    function (value, locale, decimalPlaces) {
        return this.utilities.FormatNumber(value, locale, decimalPlaces);
    };
    /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    tcmnumber.prototype.parse = /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    function (value, locale, decimalPlaces) {
        return this.utilities.UnFormatNumber(value, locale, decimalPlaces);
    };
    tcmnumber.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{ name: 'tcmnumber', pure: true },] },
    ];
    /** @nocollapse */
    tcmnumber.ctorParameters = function () { return [
        { type: Utilities, },
    ]; };
    return tcmnumber;
}());
export { tcmnumber };
function tcmnumber_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    tcmnumber.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    tcmnumber.ctorParameters;
    /** @type {?} */
    tcmnumber.prototype.utilities;
}
