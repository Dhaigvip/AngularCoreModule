/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
  Adjust the height of the division based on the screen height.
*/
import { Directive, ElementRef, HostListener } from '@angular/core';
var AutoHeightDirective = /** @class */ (function () {
    function AutoHeightDirective(element) {
        var _this = this;
        this.element = element;
        this.calculateElementHeight = function () {
            var /** @type {?} */ etop = $(_this.element.nativeElement).offset().top;
            var /** @type {?} */ actual_top = etop - $(window).scrollTop();
            var /** @type {?} */ windowHeight = $(window).height();
            _this.element.nativeElement.style.maxHeight = ((windowHeight - actual_top)) + "px";
            ;
            _this.element.nativeElement.style.overflow = "hidden";
            _this.element.nativeElement.style.minHeight = ((windowHeight - actual_top)) + "px";
            ;
        };
    }
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ part = this.element.nativeElement.style.overflow = "auto";
    };
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ part = this.element.nativeElement.style.overflow = "hidden";
    };
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateElementHeight();
        $(window).resize(this.calculateElementHeight);
    };
    AutoHeightDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auto-height]'
                },] },
    ];
    /** @nocollapse */
    AutoHeightDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AutoHeightDirective.propDecorators = {
        "onMouseOver": [{ type: HostListener, args: ['mouseover',] },],
        "onMouseOut": [{ type: HostListener, args: ['mouseout',] },],
    };
    return AutoHeightDirective;
}());
export { AutoHeightDirective };
function AutoHeightDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AutoHeightDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AutoHeightDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AutoHeightDirective.propDecorators;
    /** @type {?} */
    AutoHeightDirective.prototype.calculateElementHeight;
    /** @type {?} */
    AutoHeightDirective.prototype.element;
}
