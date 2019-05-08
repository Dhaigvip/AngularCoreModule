/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { NgForm, ControlContainer } from "@angular/forms";
import { TranslateService } from 'ng2-translate';
var ResponsiveDivComponent = /** @class */ (function () {
    function ResponsiveDivComponent(translate) {
        this.translate = translate;
        this.options = null;
    }
    ResponsiveDivComponent.decorators = [
        { type: Component, args: [{
                    selector: 'responsive-div',
                    exportAs: 'responsive-div',
                    template: "<div class=\"col-md-3 col-lg-five col-sm-4 col-xs-12\"> <ng-content></ng-content> </div> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    ResponsiveDivComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    ResponsiveDivComponent.propDecorators = {
        "options": [{ type: Input },],
    };
    return ResponsiveDivComponent;
}());
export { ResponsiveDivComponent };
function ResponsiveDivComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ResponsiveDivComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ResponsiveDivComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ResponsiveDivComponent.propDecorators;
    /** @type {?} */
    ResponsiveDivComponent.prototype.options;
    /** @type {?} */
    ResponsiveDivComponent.prototype.translate;
}
