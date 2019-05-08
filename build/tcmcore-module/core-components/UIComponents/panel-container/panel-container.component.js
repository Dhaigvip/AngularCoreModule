/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { NgForm, ControlContainer } from "@angular/forms";
import { PanelContainer } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
var PanelContainerComponent = /** @class */ (function () {
    function PanelContainerComponent(translate) {
        this.translate = translate;
        this.options = null;
    }
    PanelContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-panel',
                    exportAs: 'tcm-panel',
                    template: "<div class=\"panel\"> <div class=\"panel-heading font-bold\"> <a id=\"{{options?.id}}\" name=\"{{options?.id}}\"></a> {{options?.title | translate}} </div> <div class=\"panel-body\"> <div class=\"row\"> <ng-content></ng-content> </div> </div> </div> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    PanelContainerComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    PanelContainerComponent.propDecorators = {
        "options": [{ type: Input },],
    };
    return PanelContainerComponent;
}());
export { PanelContainerComponent };
function PanelContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PanelContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PanelContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PanelContainerComponent.propDecorators;
    /** @type {?} */
    PanelContainerComponent.prototype.options;
    /** @type {?} */
    PanelContainerComponent.prototype.translate;
}
