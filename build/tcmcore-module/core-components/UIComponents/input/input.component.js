/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from "@angular/core";
import { FormControl, NgForm, ControlContainer } from "@angular/forms";
import { InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
var InputComponent = /** @class */ (function () {
    function InputComponent(translate, el) {
        this.translate = translate;
        this.el = el;
        this.validationMessages = {
            required: this.translate.instant("required"),
            minlength: this.translate.instant("minlength"),
            maxlength: this.translate.instant("maxlength")
        };
        this.options = null;
        this.val = null;
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
        if (this.options.focus)
            this.el.nativeElement.focus();
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-input',
                    exportAs: 'tcm-input',
                    template: "<mat-form-field class=\"mat-focused\" [ngClass]=\"options.class? options.class : 'full-width-90'\"> <mat-hint align=\"end\"> <strong>{{options?.hintText ? (options.hintText | translate) : ''}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options?.hintLabel ? (options.hintLabel | translate) : ''}} </mat-hint> <button *ngIf=\"val && !options?.isDisabled\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"val=''\"> <mat-icon>close</mat-icon> </button> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options?.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <input matInput placeholder=\"{{ options?.placeholder | translate}}\"         [type]=\"options?.type? options.type: text\" [ngModel]=\"val\"         [minlength]=\"options?.minlength ? options.minlength : 0\" [maxlength]=\"options?.maxlength ? options.maxlength : 1000\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\" [disabled]=\"options?.isDisabled\"> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{ options?.placeholder | translate}} {{validationMessages.required}}</strong> </mat-error> <mat-error *ngIf=\"ctrl.hasError('minlength')\"> <strong> {{options?.minlength}} {{validationMessages.minlength}}</strong> </mat-error> <mat-error *ngIf=\"ctrl.hasError('maxlength')\"> <strong> {{options?.maxlength}} {{validationMessages.maxlength}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    styles: ["\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: TranslateService, },
        { type: ElementRef, },
    ]; };
    InputComponent.propDecorators = {
        "options": [{ type: Input },],
        "val": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "ctrl": [{ type: ViewChild, args: ['ctrl',] },],
    };
    return InputComponent;
}());
export { InputComponent };
function InputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InputComponent.propDecorators;
    /** @type {?} */
    InputComponent.prototype.validationMessages;
    /** @type {?} */
    InputComponent.prototype.options;
    /** @type {?} */
    InputComponent.prototype.val;
    /** @type {?} */
    InputComponent.prototype.valueChange;
    /** @type {?} */
    InputComponent.prototype.ctrl;
    /** @type {?} */
    InputComponent.prototype.translate;
    /** @type {?} */
    InputComponent.prototype.el;
}
