/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
  Error page opens as a dialog.
*/
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var ErrorPopupComponent = /** @class */ (function () {
    function ErrorPopupComponent(dialogRef, Errors) {
        this.dialogRef = dialogRef;
        this.Errors = Errors;
    }
    /**
     * @return {?}
     */
    ErrorPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ErrorPopupComponent.prototype.onClose = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.Errors = null;
        this.dialogRef.close(action);
    };
    ErrorPopupComponent.decorators = [
        { type: Component, args: [{ selector: 'error-popup',
                    template: "<div mat-dialog-title>Error</div> <mat-dialog-content> <div class=\"alert alert-danger\" *ngIf=\"Errors\"> <div class=\"container-fluid\"> <div class=\"alert-icon\"> <i class=\"material-icons\">error_outline</i> </div> <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\"> <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span> </button> <b>Error Alert:</b> <ul type=\"disc\"> <li *ngFor=\"let err of Errors\"> {{err.ErrorMessage}} </li> </ul> </div> </div> </mat-dialog-content> <div class=\"dialog-bottom\">  <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(false)\"> Close </button> </div> "
                },] },
    ];
    /** @nocollapse */
    ErrorPopupComponent.ctorParameters = function () { return [
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return ErrorPopupComponent;
}());
export { ErrorPopupComponent };
function ErrorPopupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ErrorPopupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ErrorPopupComponent.ctorParameters;
    /** @type {?} */
    ErrorPopupComponent.prototype.dialogRef;
    /** @type {?} */
    ErrorPopupComponent.prototype.Errors;
}
