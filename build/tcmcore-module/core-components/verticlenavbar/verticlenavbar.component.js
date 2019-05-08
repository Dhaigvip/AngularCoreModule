/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input } from '@angular/core';
var VerticleNavbarComponent = /** @class */ (function () {
    function VerticleNavbarComponent() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    VerticleNavbarComponent.prototype.onClick = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ ele = document.querySelector("#" + id);
        if (ele) {
            ele.scrollIntoView();
            window.scrollBy(0, -130);
        }
    };
    /**
     * @return {?}
     */
    VerticleNavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    VerticleNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'verticle-navbar-cmp',
                    template: "<nav id=\"cd-vertical-nav\"> <ul> <li *ngFor=\"let item of VeticleRoutes, let idx = index\"> <a (click)=\"onClick(item.id)\"> <span class=\"cd-dot\"></span> <span class=\"cd-label\">{{item.text}}</span> </a> </li> </ul> </nav> "
                },] },
    ];
    /** @nocollapse */
    VerticleNavbarComponent.ctorParameters = function () { return []; };
    VerticleNavbarComponent.propDecorators = {
        "VeticleRoutes": [{ type: Input },],
    };
    return VerticleNavbarComponent;
}());
export { VerticleNavbarComponent };
function VerticleNavbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    VerticleNavbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    VerticleNavbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    VerticleNavbarComponent.propDecorators;
    /** @type {?} */
    VerticleNavbarComponent.prototype.VeticleRoutes;
}
