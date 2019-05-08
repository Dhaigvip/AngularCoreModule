/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-03-22    Created
*/
import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { TranslateService } from "ng2-translate";
import { forkJoin } from 'rxjs/observable/forkJoin';
var AppBootstrap = /** @class */ (function () {
    function AppBootstrap(auth, staticData, themeService, dashboardService, configService, userSettings, _locale, tcmMessageService, translate) {
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
            return new Promise(function (resolve, reject) {
                _this.ApplicationId = applicationId;
                console.log('Application Initialization started');
                console.log('Calling config service ------>');
                _this.configService.Init().subscribe(function (config) {
                    console.log('Configurations read --->');
                    console.log(config);
                    console.log('setting language translation culture to --->' + _this._locale);
                    _this.translate.setDefaultLang(_this._locale);
                    console.log('Getting user token');
                    _this.auth.Autheticate().subscribe(function (data) {
                        var /** @type {?} */ subscribersArray = [];
                        if (config.userPersistence) {
                            console.log('User persistence read --->');
                            var /** @type {?} */ token = _this.auth.DecodeUserToken();
                            var /** @type {?} */ searchCriteria = { Value: null, Bucket: _this.ApplicationId, Key: token.unique_name };
                            subscribersArray.push(_this.userSettings.FetchUserSettings(searchCriteria));
                        }
                        if (config.staticData) {
                            console.log('Static Data read --->');
                            subscribersArray.push(_this.staticData.LoadStaticData());
                        }
                        if (config.dashBoard) {
                            console.log('Dashboard read --->');
                            subscribersArray.push(_this.dashboardService.Init('DashboardQueryHub', data.Context, null));
                        }
                        if (config.tcmMessages) {
                            console.log('TCMMessage read --->');
                            subscribersArray.push(_this.tcmMessageService.Init('TCMMessageHub', data.Context, null));
                        }
                        forkJoin(subscribersArray).subscribe(function (result) {
                            console.log('Fork calls completed --->');
                            _this.themeService.init();
                            return resolve(true);
                        });
                    }, function (error) {
                        console.log(error);
                        reject(error);
                    });
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            });
        };
    }
    AppBootstrap.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppBootstrap.ctorParameters = function () { return [
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
    return AppBootstrap;
}());
export { AppBootstrap };
function AppBootstrap_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBootstrap.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBootstrap.ctorParameters;
    /** @type {?} */
    AppBootstrap.prototype.ApplicationId;
    /** @type {?} */
    AppBootstrap.prototype.Bootstrap;
    /** @type {?} */
    AppBootstrap.prototype.auth;
    /** @type {?} */
    AppBootstrap.prototype.staticData;
    /** @type {?} */
    AppBootstrap.prototype.themeService;
    /** @type {?} */
    AppBootstrap.prototype.dashboardService;
    /** @type {?} */
    AppBootstrap.prototype.configService;
    /** @type {?} */
    AppBootstrap.prototype.userSettings;
    /** @type {?} */
    AppBootstrap.prototype._locale;
    /** @type {?} */
    AppBootstrap.prototype.tcmMessageService;
    /** @type {?} */
    AppBootstrap.prototype.translate;
}
