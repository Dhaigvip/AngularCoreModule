/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
  Displays error on the top of the page.
  This component takes list of ERRORDTO as parameters.
*/
import { Component, Input, EventEmitter } from '@angular/core';
var ErrorDivComponent = /** @class */ (function () {
    function ErrorDivComponent() {
        var _this = this;
        this.errordivclosed = new EventEmitter();
        this.close = function () {
            _this.Errors = null;
            _this.errordivclosed.next();
        };
    }
    ErrorDivComponent.decorators = [
        { type: Component, args: [{
                    selector: 'error-div',
                    template: "<div class=\"alert alert-danger\" *ngIf=\"Errors\"> <div class=\"container-fluid\"> <div class=\"alert-icon\"> <i class=\"material-icons\">error_outline</i> </div> <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\"> <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span> </button> <b>Error Alert:</b> <ul type=\"disc\"> <li *ngFor=\"let err of Errors\"> {{err.ErrorMessage}} </li> </ul> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    ErrorDivComponent.ctorParameters = function () { return []; };
    ErrorDivComponent.propDecorators = {
        "Errors": [{ type: Input },],
    };
    return ErrorDivComponent;
}());
export { ErrorDivComponent };
function ErrorDivComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ErrorDivComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ErrorDivComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ErrorDivComponent.propDecorators;
    /** @type {?} */
    ErrorDivComponent.prototype.Errors;
    /** @type {?} */
    ErrorDivComponent.prototype.errordivclosed;
    /** @type {?} */
    ErrorDivComponent.prototype.close;
}
