/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, Inject } from "@angular/core";
import { FormControl, NgForm, ControlContainer } from "@angular/forms";
import { SelectControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
var SelectComponent = /** @class */ (function () {
    function SelectComponent(translate, staticDataService) {
        var _this = this;
        this.translate = translate;
        this.staticDataService = staticDataService;
        this.validationMessages = {
            requiredselection: this.translate.instant("requiredselection"),
        };
        this.options = null;
        this.val = null;
        this.valueChange = new EventEmitter();
        this.myOptions = null;
        this.GetStaticData = function (key) {
            return _this.staticDataService.GetStaticData(key);
        };
        this.GetStaticDataList = function (keys) {
            return _this.staticDataService.GetStaticDataList(keys);
        };
        this.GetStaticDataItems = function (key) {
            return _this.staticDataService.GetStaticDataItems(key);
        };
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-select',
                    exportAs: 'tcm-select',
                    template: "<mat-form-field [ngClass]=\"options.class? options.class : 'full-width-90'\"> <mat-select placeholder=\"{{ options?.placeholder | translate}}\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [multiple]=\"options?.ismultiple\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\" [disabled]=\"options?.isDisabled\"> <mat-option [value]=\"null\"> --- </mat-option> <mat-option *ngFor=\"let option of GetStaticDataItems(options?.ItemName)\" [value]=\"option.Code\"> {{ option.Text | translate}} </mat-option> </mat-select> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{validationMessages.requiredselection}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    styles: ["\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: TranslateService, },
        { type: undefined, decorators: [{ type: Inject, args: ['IStaticDataService',] },] },
    ]; };
    SelectComponent.propDecorators = {
        "options": [{ type: Input },],
        "val": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "ctrl": [{ type: ViewChild, args: ['ctrl',] },],
    };
    return SelectComponent;
}());
export { SelectComponent };
function SelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectComponent.propDecorators;
    /** @type {?} */
    SelectComponent.prototype.validationMessages;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.val;
    /** @type {?} */
    SelectComponent.prototype.valueChange;
    /** @type {?} */
    SelectComponent.prototype.myOptions;
    /** @type {?} */
    SelectComponent.prototype.ctrl;
    /** @type {?} */
    SelectComponent.prototype.GetStaticData;
    /** @type {?} */
    SelectComponent.prototype.GetStaticDataList;
    /** @type {?} */
    SelectComponent.prototype.GetStaticDataItems;
    /** @type {?} */
    SelectComponent.prototype.translate;
    /** @type {?} */
    SelectComponent.prototype.staticDataService;
}
