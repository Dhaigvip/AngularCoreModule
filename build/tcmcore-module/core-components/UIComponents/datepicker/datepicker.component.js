/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormControl, NgForm, ControlContainer } from "@angular/forms";
import { InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
var DateComponent = /** @class */ (function () {
    function DateComponent(translate) {
        this.translate = translate;
        this.validationMessages = {
            required: this.translate.instant("required"),
            minlength: this.translate.instant("minlength"),
            maxlength: this.translate.instant("maxlength")
        };
        //var txt = '{"name":"John", "age":30, "city":"New York"}'
        this.options = null;
        this.val = null;
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-date',
                    exportAs: 'tcm-date',
                    template: "<mat-form-field [ngClass]=\"options.class? options.class : 'full-width'\"> <mat-hint align=\"end\"> <strong>{{options?.hintText ? (options.hintText | translate) : ''}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options?.hintLabel ? (options.hintLabel | translate) : ''}} </mat-hint> <button type=\"button\" matSuffix mat-icon-button  aria-label=\"Clear\" (click)=\"val=''\"> <mat-icon>close</mat-icon> </button> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options?.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <input matInput placeholder=\"{{ options?.placeholder | translate}}\" [matDatepicker]=\"dp\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\"> <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle> <mat-datepicker #dp></mat-datepicker> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{ options?.placeholder | translate}} {{validationMessages.required}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    DateComponent.propDecorators = {
        "options": [{ type: Input },],
        "val": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "ctrl": [{ type: ViewChild, args: ['ctrl',] },],
    };
    return DateComponent;
}());
export { DateComponent };
function DateComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DateComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DateComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DateComponent.propDecorators;
    /** @type {?} */
    DateComponent.prototype.validationMessages;
    /** @type {?} */
    DateComponent.prototype.options;
    /** @type {?} */
    DateComponent.prototype.val;
    /** @type {?} */
    DateComponent.prototype.valueChange;
    /** @type {?} */
    DateComponent.prototype.ctrl;
    /** @type {?} */
    DateComponent.prototype.translate;
}
