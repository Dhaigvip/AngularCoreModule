/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
var TCMErrorStateMatcher = /** @class */ (function () {
    function TCMErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    TCMErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        return (control && control.invalid && (control.dirty || control.touched));
    };
    TCMErrorStateMatcher.decorators = [
        { type: Directive, args: [{
                    selector: '[TCMErrorStateMatcher]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: TCMErrorStateMatcher,
                            multi: true
                        }
                    ]
                },] },
    ];
    return TCMErrorStateMatcher;
}());
export { TCMErrorStateMatcher };
function TCMErrorStateMatcher_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TCMErrorStateMatcher.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TCMErrorStateMatcher.ctorParameters;
}
