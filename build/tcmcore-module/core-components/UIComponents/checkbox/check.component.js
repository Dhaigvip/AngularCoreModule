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
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(translate) {
        this.translate = translate;
        this.options = null;
        this.val = null;
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-check',
                    exportAs: 'tcm-check',
                    template: "  <mat-checkbox [ngClass]=\"options.class? options.class : 'full-width-90'\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\"> {{ options?.placeholder | translate}} </mat-checkbox> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    styles: [],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    CheckboxComponent.propDecorators = {
        "options": [{ type: Input },],
        "val": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "ctrl": [{ type: ViewChild, args: ['ctrl',] },],
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
function CheckboxComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CheckboxComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CheckboxComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CheckboxComponent.propDecorators;
    /** @type {?} */
    CheckboxComponent.prototype.options;
    /** @type {?} */
    CheckboxComponent.prototype.val;
    /** @type {?} */
    CheckboxComponent.prototype.valueChange;
    /** @type {?} */
    CheckboxComponent.prototype.ctrl;
    /** @type {?} */
    CheckboxComponent.prototype.translate;
}
