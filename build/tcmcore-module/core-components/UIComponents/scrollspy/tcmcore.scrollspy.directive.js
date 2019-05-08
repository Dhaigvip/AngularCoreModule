/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ScrollSpyDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ currentSection;
        var /** @type {?} */ children = this._el.nativeElement.children;
        var /** @type {?} */ scrollTop = event.target.scrollTop;
        var /** @type {?} */ parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var /** @type {?} */ element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    ScrollSpyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scrollSpy]'
                },] },
    ];
    /** @nocollapse */
    ScrollSpyDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ScrollSpyDirective.propDecorators = {
        "spiedTags": [{ type: Input },],
        "sectionChange": [{ type: Output },],
        "onScroll": [{ type: HostListener, args: ['window:scroll', ['$event'],] },],
    };
    return ScrollSpyDirective;
}());
export { ScrollSpyDirective };
function ScrollSpyDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ScrollSpyDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ScrollSpyDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ScrollSpyDirective.propDecorators;
    /** @type {?} */
    ScrollSpyDirective.prototype.spiedTags;
    /** @type {?} */
    ScrollSpyDirective.prototype.sectionChange;
    /** @type {?} */
    ScrollSpyDirective.prototype.currentSection;
    /** @type {?} */
    ScrollSpyDirective.prototype._el;
}
