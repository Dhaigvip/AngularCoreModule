/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-01    Created
*/
import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { TranslateService } from "ng2-translate";
var AppBootstrapCore = /** @class */ (function () {
    function AppBootstrapCore(auth, staticData, themeService, dashboardService, configService, userSettings, _locale, tcmMessageService, translate
        //, private router: Router
    ) {
        var _this = this;
        this.auth = auth;
        this.staticData = staticData;
        this.themeService = themeService;
        this.dashboardService = dashboardService;
        this.configService = configService;
        this.userSettings = userSettings;
        this._locale = _locale;
        this.tcmMessageService = tcmMessageService;
        this.translate = translate;
        this.ApplicationId = '';
        this.Bootstrap = function (applicationId) {
            //return null;
            return new Promise(function (resolve, reject) {
                _this.ApplicationId = applicationId;
                console.log('Application Initialization started');
                console.log('Calling config service ------>');
                _this.configService.Init().subscribe(function (config) {
                    console.log('Configurations read --->');
                    console.log(config);
                    console.log('setting language translation culture to --->' + _this._locale);
                    _this.translate.setDefaultLang(_this._locale);
                    if (config.staticData) {
                        console.log('Static Data read --->');
                        _this.staticData.LoadStaticData().subscribe();
                    }
                    _this.themeService.init();
                    if (config.Authetication && config.Authetication != 'windows') {
                        return resolve(true);
                    }
                    else {
                        _this.auth.Autheticate().subscribe(function (result) {
                            return resolve(true);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            });
        };
        this.auth.userAutheticated.subscribe(function (result) {
            if (result) {
                _this.AfterAuthetication();
            }
        });
    }
    /**
     * @return {?}
     */
    AppBootstrapCore.prototype.AfterAuthetication = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ config = this.configService.Config;
        var /** @type {?} */ context = this.auth.GetUserContext();
        if (config.dashBoard) {
            console.log('Dashboard read --->');
            this.dashboardService.Init('dashboard', context, null);
        }
        if (config.tcmMessages) {
            console.log('TCMMessage read --->');
            this.tcmMessageService.Init('TCMMessageHub', context, null);
        }
        if (config.userPersistence) {
            console.log('User persistence read --->');
            var /** @type {?} */ token = this.auth.DecodeUserToken();
            var /** @type {?} */ searchCriteria = { Value: null, Bucket: this.ApplicationId, Key: token.unique_name };
            this.userSettings.FetchUserSettings(searchCriteria).subscribe();
        }
    };
    AppBootstrapCore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppBootstrapCore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IAuthService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IStaticDataService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IWebSocketService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IUserSettingsService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['ITCMWebSocketService',] },] },
        { type: TranslateService, },
    ]; };
    return AppBootstrapCore;
}());
export { AppBootstrapCore };
function AppBootstrapCore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBootstrapCore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBootstrapCore.ctorParameters;
    /** @type {?} */
    AppBootstrapCore.prototype.ApplicationId;
    /** @type {?} */
    AppBootstrapCore.prototype.Bootstrap;
    /** @type {?} */
    AppBootstrapCore.prototype.auth;
    /** @type {?} */
    AppBootstrapCore.prototype.staticData;
    /** @type {?} */
    AppBootstrapCore.prototype.themeService;
    /** @type {?} */
    AppBootstrapCore.prototype.dashboardService;
    /** @type {?} */
    AppBootstrapCore.prototype.configService;
    /** @type {?} */
    AppBootstrapCore.prototype.userSettings;
    /** @type {?} */
    AppBootstrapCore.prototype._locale;
    /** @type {?} */
    AppBootstrapCore.prototype.tcmMessageService;
    /** @type {?} */
    AppBootstrapCore.prototype.translate;
}
