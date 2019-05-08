/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Directive, ElementRef, Inject, Input, Renderer } from '@angular/core';
var FocusDirective = /** @class */ (function () {
    function FocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[focus]'
                },] },
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
        { type: Renderer, },
    ]; };
    FocusDirective.propDecorators = {
        "focus": [{ type: Input },],
    };
    return FocusDirective;
}());
export { FocusDirective };
function FocusDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FocusDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FocusDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FocusDirective.propDecorators;
    /** @type {?} */
    FocusDirective.prototype.focus;
    /** @type {?} */
    FocusDirective.prototype.element;
    /** @type {?} */
    FocusDirective.prototype.renderer;
}
