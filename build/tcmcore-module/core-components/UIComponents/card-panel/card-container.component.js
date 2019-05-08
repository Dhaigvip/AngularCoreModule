/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, ViewEncapsulation, Inject } from "@angular/core";
import { NgForm, ControlContainer } from "@angular/forms";
import { CardContainer } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
var CardContainerComponent = /** @class */ (function () {
    function CardContainerComponent(translate, themeService) {
        this.translate = translate;
        this.themeService = themeService;
        this.options = null;
        this.color = 'purple';
    }
    // <mat-option value = "primary" >
    //Purple
    //< /mat-option>
    //< mat - option value = "info" >
    //  Blue
    //  < /mat-option>
    //  < mat - option value = "success" >
    //    Green
    //    < /mat-option>
    //    < mat - option value = "warning" >
    //      Orange
    //      < /mat-option>
    //      < mat - option value = "danger" >
    //        Red
    //        < /mat-option>
    /**
     * @return {?}
     */
    CardContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.themeService.theme.subscribe((val) => {
        //  if (val === '') {
        //    val = 'primary';
        //  }
        //  this.convertToColor(val);
        //});
        //this.convertToColor(this.themeService.currenttheme);
        this.themeService.theme.subscribe(function (val) {
            _this.theme = val;
            _this.convertToColor(_this.theme);
            console.log('navbar theme - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
        this.convertToColor(this.theme);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    CardContainerComponent.prototype.convertToColor = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case "primary":
                this.color = 'purple';
                break;
            case "info":
                this.color = 'blue';
                break;
            case "warning":
                this.color = 'orange';
                break;
            case "success":
                this.color = 'green';
                break;
            case "danger":
                this.color = 'red';
                break;
            default:
                this.color = 'purple';
        }
    };
    CardContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tcm-card',
                    exportAs: 'tcm-card',
                    template: "<div class=\"card\"> <div class=\"card-header\" [attr.data-background-color]=\"options?.color ? options.color : color\"> <h4 class=\"title\" *ngIf=\"options?.title\">{{options?.title | translate}}</h4> <p class=\"category\" *ngIf=\"options?.subtitle\">{{options?.subtitle | translate}}</p> </div> <div class=\"card-content\"> <ng-content></ng-content> </div> </div> ",
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    CardContainerComponent.ctorParameters = function () { return [
        { type: TranslateService, },
        { type: undefined, decorators: [{ type: Inject, args: ['IThemeService',] },] },
    ]; };
    CardContainerComponent.propDecorators = {
        "options": [{ type: Input },],
    };
    return CardContainerComponent;
}());
export { CardContainerComponent };
function CardContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CardContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CardContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CardContainerComponent.propDecorators;
    /** @type {?} */
    CardContainerComponent.prototype.options;
    /** @type {?} */
    CardContainerComponent.prototype.theme;
    /** @type {?} */
    CardContainerComponent.prototype.color;
    /** @type {?} */
    CardContainerComponent.prototype.translate;
    /** @type {?} */
    CardContainerComponent.prototype.themeService;
}
