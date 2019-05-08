/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'footer-cmp',
                    template: "<footer class=\"footer\"> <div class=\"container\"> <nav class=\"pull-left\"> <ul> <li> <ng-content select=\"[app-name]\"></ng-content> </li> <li> <ng-content select=\"[app-about]\"></ng-content> </li> <li> <ng-content select=\"[app-license]\"></ng-content> </li> </ul> </nav> <div class=\"copyright pull-right\"> <ng-content select=\"[app-copyright]\"></ng-content>       </div> </div> </footer> "
                },] },
    ];
    return FooterComponent;
}());
export { FooterComponent };
function FooterComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FooterComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FooterComponent.ctorParameters;
    /** @type {?} */
    FooterComponent.prototype.test;
}
