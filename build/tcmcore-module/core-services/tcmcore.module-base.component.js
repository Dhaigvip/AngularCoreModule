/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-05    Created
*/
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { PageSettings } from '../tcmcore-objects/tcmcore.domain.objects';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { TCMErrorStateMatcher } from './tcmcore.errorstatematcher';
/**
 * @abstract
 */
var /**
 * @abstract
 */
ModuleBaseComponent = /** @class */ (function () {
    function ModuleBaseComponent(pageId, moduleName, ServiceLocator) {
        var _this = this;
        this.pageId = pageId;
        this.moduleName = moduleName;
        this.ServiceLocator = ServiceLocator;
        this.currentSection = '';
        this.inboxItem = null;
        this.CanUpdate = function () {
            var /** @type {?} */ role = _this.configService.Config.updateRoles;
            if (role)
                return _this.authService.IsInRole(role);
            return true;
        };
        this.CanCreate = function () {
            var /** @type {?} */ role = _this.configService.Config.createRoles;
            if (role)
                return _this.authService.IsInRole(role);
            return true;
        };
        this.NotifyUserForSaveChange = function () {
            if (_this.CheckIfDirty())
                _this.openSnackBar("Please save unsaved changes", "Save");
        };
        this.convertCharCodes = function (stringToFormat) {
            return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number); });
        };
        this.htmlDecode = function (value) {
            if (value && (value === '&nbsp;' || value === '&#160;' || (value.length === 1 && value.charCodeAt(0) === 160))) {
                return "";
            }
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        };
        this.htmlEncode = function (value) {
            return !value ? value : String(value).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };
        this.s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        this.guid = function () {
            var /** @type {?} */ guid = _this.s4() + _this.s4() + '-' + _this.s4() + '-' + _this.s4() + '-' +
                _this.s4() + '-' + _this.s4() + _this.s4() + _this.s4();
            //TCM accepts only 20 char.
            guid = guid.substring(0, 19);
            return guid;
        };
        this.GetThemeColor = function (themeName) {
            var /** @type {?} */ color = "purple";
            switch (themeName) {
                case 'primary':
                    color = 'purple';
                    break;
                case 'info':
                    color = 'blue';
                    break;
                case 'danger':
                    color = 'red';
                    break;
                case 'warning':
                    color = 'orange';
                    break;
            }
            return color;
        };
        this.GetPersistenceForControl = function (controlId) {
            var /** @type {?} */ data = null;
            if (_this.pageSettings && _this.pageSettings.PageData) {
                $.each(_this.pageSettings.PageData, function (index, val) {
                    if (val.ControlId === controlId) {
                        data = val.ControlData;
                        return false;
                    }
                });
            }
            return data;
        };
        this.UpdatePersistenceForControl = function (controlPersistenceObj) {
            var /** @type {?} */ existingSettings = false;
            if (_this.pageSettings && _this.pageSettings.PageData) {
                $.each(_this.pageSettings.PageData, function (index, val) {
                    if (val.ControlId === controlPersistenceObj.ControlId) {
                        val.ControlData = controlPersistenceObj.ControlData;
                        existingSettings = true;
                        return false;
                    }
                });
            }
            if (!existingSettings) {
                if (_this.pageSettings == null) {
                    _this.pageSettings = new PageSettings();
                    _this.pageSettings.PageId = _this.pageId;
                    _this.pageSettings.PageData = new Array();
                }
                _this.pageSettings.PageData.push({ ControlId: controlPersistenceObj.ControlId, ControlData: controlPersistenceObj.ControlData });
            }
            _this.userSettingsService.UpdatePageSettings(_this.pageId, _this.pageSettings);
        };
        this.GetUserSettingsForPage = function () {
            return _this.userSettingsService.GetUserSettingsForPage(_this.pageId);
        };
        this.StrToDate = function (str) {
            return new Date(str);
        };
        this.GetStaticData = function (key) {
            return _this.staticDataService.GetStaticData(key);
        };
        this.GetStaticDataList = function (keys) {
            return _this.staticDataService.GetStaticDataList(keys);
        };
        this.GetStaticDataItems = function (key) {
            return _this.staticDataService.GetStaticDataItems(key);
        };
        this.NotifySuccess = function (message) {
            _this.toastrService.success(message, "Success");
        };
        this.NotifyErrorMessage = function (message) {
            _this.toastrService.error(message, 'Error', { closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
        };
        this.NotifyError = function (errors) {
            var /** @type {?} */ err = '<ul>';
            for (var /** @type {?} */ i = 0; i < errors.length; i++) {
                err += '<li>';
                err += errors[i].ErrorMessage;
                err += '</li>';
            }
            err += '</ul>';
            _this.toastrService.error(err, 'Error', { enableHtml: true, closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
        };
        this.NotifyWarning = function (message) {
            _this.toastrService.warning(message, "Warning");
        };
        this.NotifyInfo = function (message) {
            _this.toastrService.info(message, "Information");
        };
        this.snackBar = ServiceLocator.injector.get(MatSnackBar);
        this.zone = ServiceLocator.injector.get(NgZone);
        this.router = ServiceLocator.injector.get(Router);
        this.route = ServiceLocator.injector.get(ActivatedRoute);
        this.translate = ServiceLocator.injector.get(TranslateService);
        this.store = ServiceLocator.injector.get(Store);
        this.configService = ServiceLocator.injector.get('IConfigService');
        this.logService = ServiceLocator.injector.get('ILogService');
        this.authService = ServiceLocator.injector.get('IAuthService');
        this.toastrService = ServiceLocator.injector.get(ToastrService);
        this.cacheService = ServiceLocator.injector.get('ICacheService');
        this.userSettingsService = ServiceLocator.injector.get('IUserSettingsService');
        this.themeService = ServiceLocator.injector.get('IThemeService');
        this.staticDataService = ServiceLocator.injector.get('IStaticDataService');
        ;
        this.navigation = ServiceLocator.injector.get('INavigationService');
        this.winRef = ServiceLocator.injector.get('IWindowRef');
        this.pageSettings = this.GetUserSettingsForPage();
        this.lastSubQuery = {};
        //this.zone.runOutsideAngular(() => {
        this.ticker = Observable.interval(20000)
            .subscribe(function (val) {
            _this.zone.run(function () {
                //console.log('called');
                //console.log('called');
                _this.NotifyUserForSaveChange();
            });
        });
        //});
        //this.zone.runOutsideAngular(() => {
        //  this.ticker = Observable.interval(20000)
        //    .subscribe((val) => {
        //      this.zone.run(() => {
        //        console.log('called');
        //        this.NotifyUserForSaveChange();
        //      });
        //    })
        //});
        //this.store.pipe(select(getSelectedInboxItem)).subscribe(x => {
        //  this.inboxItem = x;
        //});
        //this.route.queryParams
        //  .filter(params => 'location' in params)
        //  .map(params => params.location)
        //  .distinctUntilChanged()
        //  .subscribe(lc => {
        //    if (lc && lc.includes("inbox")) {
        //      if (this['GetInboxData']) {
        //        this['GetInboxData'](this.inboxItem.MessageObject.Message)
        //        console.log(this.inboxItem);
        //      }
        //    }
        //  });
    }
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngOnDestry = /**
     * @return {?}
     */
    function () {
        this.ticker = null;
    };
    /**
     * @param {?} sectionId
     * @return {?}
     */
    ModuleBaseComponent.prototype.onSectionChange = /**
     * @param {?} sectionId
     * @return {?}
     */
    function (sectionId) {
        this.currentSection = sectionId;
    };
    /**
     * @param {?} section
     * @return {?}
     */
    ModuleBaseComponent.prototype.scrollTo = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        document.querySelector('#' + section)
            .scrollIntoView();
    };
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    ModuleBaseComponent.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        var _this = this;
        this.snackBarRef = this.snackBar.open(message, action, {
            duration: 5000,
        });
        this.snackBarRef.onAction().subscribe(function () {
            _this.Save();
        });
    };
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.matcher = new TCMErrorStateMatcher();
    };
    /**
     * @param {?} text
     * @return {?}
     */
    ModuleBaseComponent.prototype.translateDecode = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.convertCharCodes(this.translate.instant(text));
    };
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ globalSettings = this.userSettingsService.GetUserSettingsForPage("Global");
        (globalSettings) ? this.theme = globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0].ControlData : this.theme = 'primary';
        this.themeService.theme.subscribe(function (val) {
            if (val === '') {
                val = 'primary';
            }
            _this.theme = val;
            console.log('base form - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
        console.log('base form after view init - ' + this.theme);
    };
    /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    ModuleBaseComponent.prototype.logObject = /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    function (message, obj) {
        this.logService.logObject(message, obj);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.log = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.log(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.warn(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.info = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.info(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.error(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.debug = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.debug(message);
    };
    return ModuleBaseComponent;
}());
/**
 * @abstract
 */
export { ModuleBaseComponent };
function ModuleBaseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ModuleBaseComponent.prototype.pageSettings;
    /** @type {?} */
    ModuleBaseComponent.prototype.lastQuery;
    /** @type {?} */
    ModuleBaseComponent.prototype.lastSubQuery;
    /** @type {?} */
    ModuleBaseComponent.prototype.filter;
    /** @type {?} */
    ModuleBaseComponent.prototype.matcher;
    /** @type {?} */
    ModuleBaseComponent.prototype.userSettingsService;
    /** @type {?} */
    ModuleBaseComponent.prototype.staticDataService;
    /** @type {?} */
    ModuleBaseComponent.prototype.navigation;
    /** @type {?} */
    ModuleBaseComponent.prototype.cacheService;
    /** @type {?} */
    ModuleBaseComponent.prototype.configService;
    /** @type {?} */
    ModuleBaseComponent.prototype.authService;
    /** @type {?} */
    ModuleBaseComponent.prototype.logService;
    /** @type {?} */
    ModuleBaseComponent.prototype.translate;
    /** @type {?} */
    ModuleBaseComponent.prototype.toastrService;
    /** @type {?} */
    ModuleBaseComponent.prototype.themeService;
    /** @type {?} */
    ModuleBaseComponent.prototype.snackBar;
    /** @type {?} */
    ModuleBaseComponent.prototype.currentSection;
    /** @type {?} */
    ModuleBaseComponent.prototype.theme;
    /** @type {?} */
    ModuleBaseComponent.prototype.router;
    /** @type {?} */
    ModuleBaseComponent.prototype.route;
    /** @type {?} */
    ModuleBaseComponent.prototype.winRef;
    /** @type {?} */
    ModuleBaseComponent.prototype.ticker;
    /** @type {?} */
    ModuleBaseComponent.prototype.snackBarRef;
    /** @type {?} */
    ModuleBaseComponent.prototype.zone;
    /** @type {?} */
    ModuleBaseComponent.prototype.store;
    /** @type {?} */
    ModuleBaseComponent.prototype.inboxItem;
    /** @type {?} */
    ModuleBaseComponent.prototype.CanUpdate;
    /** @type {?} */
    ModuleBaseComponent.prototype.CanCreate;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifyUserForSaveChange;
    /** @type {?} */
    ModuleBaseComponent.prototype.convertCharCodes;
    /** @type {?} */
    ModuleBaseComponent.prototype.htmlDecode;
    /** @type {?} */
    ModuleBaseComponent.prototype.htmlEncode;
    /** @type {?} */
    ModuleBaseComponent.prototype.s4;
    /** @type {?} */
    ModuleBaseComponent.prototype.guid;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetThemeColor;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetPersistenceForControl;
    /** @type {?} */
    ModuleBaseComponent.prototype.UpdatePersistenceForControl;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetUserSettingsForPage;
    /** @type {?} */
    ModuleBaseComponent.prototype.StrToDate;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetStaticData;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetStaticDataList;
    /** @type {?} */
    ModuleBaseComponent.prototype.GetStaticDataItems;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifySuccess;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifyErrorMessage;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifyError;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifyWarning;
    /** @type {?} */
    ModuleBaseComponent.prototype.NotifyInfo;
    /** @type {?} */
    ModuleBaseComponent.prototype.pageId;
    /** @type {?} */
    ModuleBaseComponent.prototype.moduleName;
    /** @type {?} */
    ModuleBaseComponent.prototype.ServiceLocator;
    /**
     * @abstract
     * @return {?}
     */
    ModuleBaseComponent.prototype.CheckIfDirty = function () { };
    /**
     * @abstract
     * @return {?}
     */
    ModuleBaseComponent.prototype.Save = function () { };
}
