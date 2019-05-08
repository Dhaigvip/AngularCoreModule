/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-06-25    Created
  Shows YES / NO dialog. Returns the boolean result.
*/
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
    /**
     * @return {?}
     */
    ConfirmComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ConfirmComponent.prototype.onClose = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.dialogRef.close(action);
    };
    ConfirmComponent.decorators = [
        { type: Component, args: [{ selector: 'confirm-cmp',
                    template: "<div mat-dialog-title>Confirm</div> <mat-dialog-content> <p>{{data.message}}</p> </mat-dialog-content> <div class=\"dialog-bottom\"> <div class=\" pull-right\"> <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(true)\"> Yes </button> <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(false)\"> No </button> </div> </div> "
                },] },
    ];
    /** @nocollapse */
    ConfirmComponent.ctorParameters = function () { return [
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return ConfirmComponent;
}());
export { ConfirmComponent };
function ConfirmComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfirmComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfirmComponent.ctorParameters;
    /** @type {?} */
    ConfirmComponent.prototype.dialogRef;
    /** @type {?} */
    ConfirmComponent.prototype.data;
}
