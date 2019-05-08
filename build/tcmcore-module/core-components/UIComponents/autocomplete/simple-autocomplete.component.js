var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, ViewEncapsulation } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { TranslateService } from "ng2-translate";
import { AutoCompleteComponent } from './autocomplete.component';
var SimpleAutoCompleteComponent = /** @class */ (function (_super) {
    __extends(SimpleAutoCompleteComponent, _super);
    function SimpleAutoCompleteComponent(translate) {
        return _super.call(this, translate) || this;
    }
    SimpleAutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'simple-auto-complete',
                    exportAs: 'simple-auto-complete',
                    styles: ["\n    .default-text {\n        color: inherit;\n    }\n    .mat-autocomplete-panel {\n      min-width: 400px;\n    }\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"form-group has-success has-feedback\"> <!--<span class=\"input-group-addon\">@</span>--> <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"auto\" [formControl]=\"bb\" [ngModel]=\"objSearch\" [required]=\"options.required\" placeholder=\"{{options.placeholder}}\" name=\"{{options.id}}\" id=\"{{options.id}}\" [disabled]=\"options.required\"> <!--<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>--> <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayObject\" panelWidth=\"400px\" (optionSelected)=\"ObjectSelected($event)\"> <mat-option *ngFor=\"let obj of ObjList\" [value]=\"obj\"> <span class=\"small\">{{GetObjectValue(obj, options.displayProp)}}</span> <span class=\"small\" *ngIf=\"options?.displayProp2 != null\"> - {{GetObjectValue(obj, options.displayProp2)}}</span> </mat-option> </mat-autocomplete> </div> "
                },] },
    ];
    /** @nocollapse */
    SimpleAutoCompleteComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return SimpleAutoCompleteComponent;
}(AutoCompleteComponent));
export { SimpleAutoCompleteComponent };
function SimpleAutoCompleteComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SimpleAutoCompleteComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SimpleAutoCompleteComponent.ctorParameters;
}
