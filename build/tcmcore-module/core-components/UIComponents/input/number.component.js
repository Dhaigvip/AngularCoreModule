/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { tcmnumber } from './tcm-number.pipe';
import { Inject, ElementRef, LOCALE_ID, HostListener, Directive, Output, EventEmitter, Input } from '@angular/core';
var NumberComponent = /** @class */ (function () {
    function NumberComponent(locale, elementRef, tcmpipe) {
        this.locale = locale;
        this.elementRef = elementRef;
        this.tcmpipe = tcmpipe;
        this.ngModelChange = new EventEmitter();
        this.decimalPlaces = '6';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.value = this.tcmpipe.parse(value, this.locale, this.decimalPlaces); // opossite of transform
        this.ngModelChange.emit(this.el.value);
        //var val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
        //val ? this.el.value = val.toString() : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberComponent.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
        val ? this.el.value = val.toString() : '';
    };
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces);
        this.updateDisplay();
    };
    /**
     * @return {?}
     */
    NumberComponent.prototype.updateDisplay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.onFocus(_this.el.value);
        }, 10);
        setTimeout(function () {
            _this.onBlur(_this.el.value);
        }, 15);
    };
    NumberComponent.decorators = [
        { type: Directive, args: [{
                    selector: "[tcm-number]"
                },] },
    ];
    //ngAfterViewInit(): void {
    //  var formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces);
    //   formattedValue ? this.el.value = formattedValue.toString() : this.el.value = '';
    //}
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: ElementRef, },
        { type: tcmnumber, },
    ]; };
    NumberComponent.propDecorators = {
        "ngModelChange": [{ type: Output },],
        "decimalPlaces": [{ type: Input },],
        "onFocus": [{ type: HostListener, args: ["focus", ["$event.target.value"],] },],
        "onBlur": [{ type: HostListener, args: ["blur", ["$event.target.value"],] },],
    };
    return NumberComponent;
}());
export { NumberComponent };
function NumberComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NumberComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NumberComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NumberComponent.propDecorators;
    /** @type {?} */
    NumberComponent.prototype.el;
    /** @type {?} */
    NumberComponent.prototype.ngModelChange;
    /** @type {?} */
    NumberComponent.prototype.decimalPlaces;
    /** @type {?} */
    NumberComponent.prototype.locale;
    /** @type {?} */
    NumberComponent.prototype.elementRef;
    /** @type {?} */
    NumberComponent.prototype.tcmpipe;
}
