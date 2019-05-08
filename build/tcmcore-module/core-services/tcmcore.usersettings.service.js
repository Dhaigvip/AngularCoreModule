/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-05-16    Created
*/
import { Injectable, Inject, NgZone } from '@angular/core';
import 'rxjs/Rx';
import { PageSettings, ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { timer } from 'rxjs/observable/timer';
var UserSettingsService = /** @class */ (function () {
    function UserSettingsService(logger, dataService, zone, winRef, coreConfig) {
        var _this = this;
        this.logger = logger;
        this.dataService = dataService;
        this.zone = zone;
        this.winRef = winRef;
        this.coreConfig = coreConfig;
        this.dirty = false;
        this.bucket = "XFM";
        this.UpdatePageSettings = function (pageId, pageSettings) {
            var /** @type {?} */ existing = false;
            if (_this.UserSettings == null)
                _this.UserSettings = { Key: _this.userId, Bucket: _this.bucket, Value: [] };
            if (_this.UserSettings.Value == null)
                _this.UserSettings.Value = [];
            for (var /** @type {?} */ i = 0; i < _this.UserSettings.Value.length; i++) {
                if (_this.UserSettings.Value[i].PageId == pageId) {
                    _this.dirty = existing = true;
                    _this.UserSettings.Value[i].PageData = pageSettings.PageData;
                    break;
                }
            }
            if (!existing) {
                _this.dirty = !existing;
                _this.UserSettings.Value.push(pageSettings);
            }
        };
        this.GetUserSettingsForPage = function (pageId) {
            var /** @type {?} */ value = null;
            if (_this.UserSettings != null && _this.UserSettings.Value != null) {
                for (var /** @type {?} */ i = 0; i < _this.UserSettings.Value.length; i++) {
                    if (_this.UserSettings.Value[i].PageId == pageId) {
                        return _this.UserSettings.Value[i];
                    }
                }
            }
        };
        this.GetByObject = function (userSettings) {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "FindAsync";
            request.Data = userSettings;
            return _this.dataService.Post("UserSettings", request, null, false);
        };
        this.FetchUserSettings = function (userSettings) {
            console.log("Fetching user settings");
            _this.userId = userSettings.Key;
            _this.bucket = userSettings.Bucket;
            return _this.GetByObject(userSettings).map(function (result) {
                if (result.Success) {
                    console.log("Fetching user settings--->Done");
                    var /** @type {?} */ setting = result.Data;
                    _this.UserSettings = setting;
                    _this.UserSettings.Value = JSON.parse(setting.Value);
                    var /** @type {?} */ globalSettings = _this.GetUserSettingsForPage("Global");
                    if (!globalSettings) {
                        globalSettings = new PageSettings();
                        globalSettings.PageId = 'Global';
                        globalSettings.PageData.push({ ControlId: 'Lang', ControlData: 'sv-SE' });
                        globalSettings.PageData.push({ ControlId: 'Theme', ControlData: 'primary' });
                        _this.UpdatePageSettings('Global', globalSettings);
                    }
                    return _this.UserSettings;
                }
                console.log("Fetching user settings--->Error");
                console.log(result.ErrorList);
                return null;
            });
        };
        this.Update = function (obj) {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "UpdateAsync";
            request.Data = obj;
            return _this.dataService.Post("UserSettings", request, null, false);
        };
        this.SaveUserSettings = function () {
            if (!_this.coreConfig.Config.userPersistence)
                return;
            var /** @type {?} */ self = _this;
            if (self.dirty && self.UserSettings != null) {
                try {
                    console.log('SaveUserSettings()');
                    var /** @type {?} */ tempData = $.extend({}, self.UserSettings);
                    tempData.Value = JSON.stringify(tempData.Value);
                    self.dirty = false;
                    _this.Update(JSON.stringify(tempData)).subscribe(function (result) { return console.log(result); });
                }
                catch (/** @type {?} */ ex) {
                    var /** @type {?} */ x = 0;
                }
            }
        };
        this.winRef.nativeWindow.onbeforeunload = function (event) {
            this.SaveUserSettings();
        };
        this.zone.runOutsideAngular(function () {
            //Evevry second
            timer(10000, 10000).subscribe(function (val) {
                _this.zone.run(function () {
                    _this.SaveUserSettings();
                });
            });
        });
    }
    /**
     * @return {?}
     */
    UserSettingsService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserSettingsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserSettingsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IDataService',] },] },
        { type: NgZone, },
        { type: undefined, decorators: [{ type: Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
    ]; };
    return UserSettingsService;
}());
export { UserSettingsService };
function UserSettingsService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UserSettingsService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UserSettingsService.ctorParameters;
    /** @type {?} */
    UserSettingsService.prototype.dirty;
    /** @type {?} */
    UserSettingsService.prototype.UserSettings;
    /** @type {?} */
    UserSettingsService.prototype.userId;
    /** @type {?} */
    UserSettingsService.prototype.bucket;
    /** @type {?} */
    UserSettingsService.prototype.router;
    /** @type {?} */
    UserSettingsService.prototype.UpdatePageSettings;
    /** @type {?} */
    UserSettingsService.prototype.GetUserSettingsForPage;
    /** @type {?} */
    UserSettingsService.prototype.GetByObject;
    /** @type {?} */
    UserSettingsService.prototype.FetchUserSettings;
    /** @type {?} */
    UserSettingsService.prototype.Update;
    /** @type {?} */
    UserSettingsService.prototype.SaveUserSettings;
    /** @type {?} */
    UserSettingsService.prototype.logger;
    /** @type {?} */
    UserSettingsService.prototype.dataService;
    /** @type {?} */
    UserSettingsService.prototype.zone;
    /** @type {?} */
    UserSettingsService.prototype.winRef;
    /** @type {?} */
    UserSettingsService.prototype.coreConfig;
}
