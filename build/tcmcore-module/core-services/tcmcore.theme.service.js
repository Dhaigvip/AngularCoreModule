/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
import { Injectable, Inject, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ThemeService = /** @class */ (function () {
    function ThemeService(configService, zone) {
        var _this = this;
        this.configService = configService;
        this.zone = zone;
        this.theme = new BehaviorSubject("");
        this._theme = 'primary';
        this.init = function () {
            if (_this.configService.Config.theme)
                _this.currenttheme = _this.configService.Config.theme;
            setTimeout(function () {
                _this.change(_this.currenttheme);
            }, 500);
        };
        this.change = function (value) {
            console.log('theme service - ' + value);
            _this.theme.next(value);
        };
    }
    Object.defineProperty(ThemeService.prototype, "currenttheme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._theme = theme;
        },
        enumerable: true,
        configurable: true
    });
    ThemeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
        { type: NgZone, },
    ]; };
    return ThemeService;
}());
export { ThemeService };
function ThemeService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ThemeService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ThemeService.ctorParameters;
    /** @type {?} */
    ThemeService.prototype.theme;
    /** @type {?} */
    ThemeService.prototype._theme;
    /** @type {?} */
    ThemeService.prototype.init;
    /** @type {?} */
    ThemeService.prototype.change;
    /** @type {?} */
    ThemeService.prototype.configService;
    /** @type {?} */
    ThemeService.prototype.zone;
}
