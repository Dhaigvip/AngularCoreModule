/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
var CoreEffects = /** @class */ (function () {
    function CoreEffects(actions$) {
        this.actions$ = actions$;
    }
    CoreEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CoreEffects.ctorParameters = function () { return [
        { type: Actions, },
    ]; };
    return CoreEffects;
}());
export { CoreEffects };
function CoreEffects_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CoreEffects.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CoreEffects.ctorParameters;
    /** @type {?} */
    CoreEffects.prototype.actions$;
}
