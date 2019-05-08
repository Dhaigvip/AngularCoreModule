/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, Inject, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { SettingsComponent } from '../../core-components/settings/settings.component';
import { MatDialog } from '@angular/material';
import { Router, NavigationEnd, ROUTER_CONFIGURATION } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getInboxItems } from '../../state/tcmcore.selectors';
import { TranslateService } from 'ng2-translate';
import { VoiceSearch } from '../voicesearch/voicesearch.component';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, config, location, translate, messageService, themeService, userSettings, dialog, auth, store) {
        var _this = this;
        this.router = router;
        this.config = config;
        this.location = location;
        this.translate = translate;
        this.messageService = messageService;
        this.themeService = themeService;
        this.userSettings = userSettings;
        this.dialog = dialog;
        this.auth = auth;
        this.store = store;
        this.menuItem = /** @type {?} */ ({});
        this.notification = new EventEmitter();
        this.pendingMessages = 0;
        this.isAutheticated = false;
        this.inboxItems = null;
        this.isCollapsed = true;
        this.showSettings = false;
        this.showVoiceSearch = false;
        this.showNotification = false;
        this.convertCharCodes = function (stringToFormat) {
            return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number); });
        };
        this.stickNavbarOntop = function () {
            var /** @type {?} */ scroll = $(window).scrollTop();
            if (scroll >= 260) {
                if (!$('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
                    $('.navbar-fixed-on-scroll').addClass('navbar-fixed-top');
            }
            else {
                if ($('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
                    $('.navbar-fixed-on-scroll').removeClass('navbar-fixed-top');
            }
        };
        this.setUserName = function (name) {
            _this.userName = name;
        };
        //, @Inject('INavigationService') private navService: INavigationService
        this.location = location;
        this.Routes = this.router.config;
        //messageService.newTCMMessage.subscribe((m) => {
        //  this.pendingMessages = this.messageService.GetMessages().length;
        //})
        this.router.events.subscribe(function (eventType) {
            if (eventType instanceof NavigationEnd) {
                _this.processSelection(eventType);
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    NavbarComponent.prototype.processSelection = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _loop_1 = function (i) {
            var /** @type {?} */ path = item.url.split("/")[1];
            if (path.trim() === "") {
                var /** @type {?} */ temp = item.urlAfterRedirects;
                if (temp.charAt(0) === '/')
                    temp = temp.substr(1);
                var /** @type {?} */ m_1 = temp.split("/")[0];
                this_1.menuItem = this_1.listTitles.find(function (x) { return x.path === m_1; });
                if (this_1.menuItem.children)
                    this_1.menuItem.children.sort(function (a, b) { return a.ordinal - b.ordinal; });
                return "break";
            }
            else if (this_1.listTitles[i].path === path) {
                this_1.menuItem = this_1.listTitles[i];
                if (this_1.menuItem.children)
                    this_1.menuItem.children.sort(function (a, b) { return a.ordinal - b.ordinal; });
                return "break";
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < this.listTitles.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NavbarComponent.prototype.translateDecode = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.convertCharCodes(this.translate.instant(text));
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openNotification = /**
     * @return {?}
     */
    function () {
        this.notification.next();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dialogRef = this.dialog.open(SettingsComponent, {
            width: '1000px',
            data: { theme: this.theme }
        });
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDialogVoice = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dialogRef = this.dialog.open(VoiceSearch, {
            width: '1000px',
            data: { theme: this.theme }
        });
    };
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    NavbarComponent.prototype.CombinePaths = /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        return parent + '/' + child;
    };
    /**
     * @param {?} mainMenuItem
     * @return {?}
     */
    NavbarComponent.prototype.MainMenuSelect = /**
     * @param {?} mainMenuItem
     * @return {?}
     */
    function (mainMenuItem) {
        this.menuItem = mainMenuItem;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.navService.Init(this.Routes);
        this.homePath = "pagenotfound";
        this.listTitles = this.Routes.filter(function (listTitle) { return listTitle; });
        //Sort
        this.listTitles.sort(function (a, b) { return a.ordinal - b.ordinal; });
        if (this.listTitles) {
            var /** @type {?} */ homePathRoute = this.listTitles.find(function (element) { return element.path === ''; });
            this.homePath = homePathRoute ? homePathRoute.redirectTo : "pagenotfound";
        }
        //this.auth.onContext.subscribe((val: any) => {
        //  if (val)
        //    this.userName = val.RegUser;
        //});
        this.inboxItems = this.store.pipe(select(getInboxItems));
        var /** @type {?} */ context = this.auth.GetUserContext();
        this.userName = context ? context.RegUser : ''; // this.auth.GetUserContext().RegUser;
        //  .subscribe(items =>
        //  this.pendingMessages = items.length
        //);
        this.auth.userAutheticated.subscribe(function (result) {
            if (result) {
                _this.userName = _this.auth.GetUserContext().RegUser;
                _this.isAutheticated = _this.auth.IsAuthenticated();
            }
        });
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            var /** @type {?} */ globalSettings = _this.userSettings.GetUserSettingsForPage("Global");
            (globalSettings) ? _this.theme = globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0].ControlData : _this.theme = 'primary';
        });
        this.themeService.theme.subscribe(function (val) {
            _this.theme = val;
            console.log('navbar theme - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NavbarComponent.prototype.changeTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.themeService.change(theme);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var /** @type {?} */ item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navbar-cmp',
                    template: "<div id=\"mainNav\" class=\"navbar\" [ngClass]=\"'navbar-'+ theme\" style=\"margin-bottom:0px\"> <div class=\"container\" style=\"float:left !important\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" aria-expanded=\"false\" aria-controls=\"navmenu\" (click)=\"isCollapsed=!isCollapsed\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> <a class=\"navbar-brand pull-left\" target=\"_blank\" [routerLink]=\"homePath\" style=\"margin-right: 50px;\"> <img style=\"max-height: 36px;\" alt=\".\" src=\"assets/img/Tieto_logo_white.png\"> </a> </div> <div class=\"navbar-collapse\" [ngClass]=\"{'collapse':isCollapsed}\" id=\"navmenu\"> <ul class=\"nav navbar-nav\"> <li *ngFor=\"let menuItem of listTitles\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\"> <a [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.display\"> <p>{{translateDecode(menuItem.title)}}</p> </a> </li> </ul> <ul class=\"nav navbar-nav navbar-right\"> <li *ngIf=\"showVoiceSearch\"> <a (click)=\"openDialogVoice()\"> <i class=\"material-icons\">settings_voice</i> </a> </li> <li *ngIf=\"showNotification\"> <a routerLink=\"inbox\"> <i class=\"material-icons\">add_alert</i> <b class=\"badge bg-danger up\">{{(inboxItems | async)?.length}}</b> </a> </li> <li style =\"cursor: default;\">  <span style=\"margin-right:20px\"> <i class=\"material-icons\" >account_circle</i> {{userName}} </span> </li> <li *ngIf=\"showSettings\"> <a (click)=\"openDialog()\"> <i class=\"material-icons\">settings</i> </a> </li> </ul> </div> </div> </div> <div class=\"box-cell md-whiteframe-z1 no-radius\" id=\"subnav\"> <ul class=\"subNav\"> <!-- ngRepeat: n in nav --> <li routerLinkActive=\"active\" class=\"{{submenuItem.class}}\" *ngFor=\"let submenuItem of menuItem.children\"> <a routerLink=\"{{menuItem.path}}/{{submenuItem.path}}\" *ngIf=\"submenuItem.display\"> {{translateDecode(submenuItem.title)}} </a> </li> </ul> </div> "
                },] },
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: undefined, decorators: [{ type: Inject, args: [ROUTER_CONFIGURATION,] },] },
        { type: Location, },
        { type: TranslateService, },
        { type: undefined, decorators: [{ type: Inject, args: ['ITCMWebSocketService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IUserSettingsService',] },] },
        { type: MatDialog, },
        { type: undefined, decorators: [{ type: Inject, args: ['IAuthService',] },] },
        { type: Store, },
    ]; };
    NavbarComponent.propDecorators = {
        "showSettings": [{ type: Input },],
        "showVoiceSearch": [{ type: Input },],
        "showNotification": [{ type: Input },],
    };
    return NavbarComponent;
}());
export { NavbarComponent };
function NavbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NavbarComponent.propDecorators;
    /** @type {?} */
    NavbarComponent.prototype.listTitles;
    /** @type {?} */
    NavbarComponent.prototype.homePath;
    /** @type {?} */
    NavbarComponent.prototype.menuItem;
    /** @type {?} */
    NavbarComponent.prototype.notification;
    /** @type {?} */
    NavbarComponent.prototype.pendingMessages;
    /** @type {?} */
    NavbarComponent.prototype.isAutheticated;
    /** @type {?} */
    NavbarComponent.prototype.inboxItems;
    /** @type {?} */
    NavbarComponent.prototype.userName;
    /** @type {?} */
    NavbarComponent.prototype.theme;
    /** @type {?} */
    NavbarComponent.prototype.isCollapsed;
    /** @type {?} */
    NavbarComponent.prototype.showSettings;
    /** @type {?} */
    NavbarComponent.prototype.showVoiceSearch;
    /** @type {?} */
    NavbarComponent.prototype.showNotification;
    /** @type {?} */
    NavbarComponent.prototype.Routes;
    /** @type {?} */
    NavbarComponent.prototype.convertCharCodes;
    /** @type {?} */
    NavbarComponent.prototype.stickNavbarOntop;
    /** @type {?} */
    NavbarComponent.prototype.setUserName;
    /** @type {?} */
    NavbarComponent.prototype.router;
    /** @type {?} */
    NavbarComponent.prototype.config;
    /** @type {?} */
    NavbarComponent.prototype.location;
    /** @type {?} */
    NavbarComponent.prototype.translate;
    /** @type {?} */
    NavbarComponent.prototype.messageService;
    /** @type {?} */
    NavbarComponent.prototype.themeService;
    /** @type {?} */
    NavbarComponent.prototype.userSettings;
    /** @type {?} */
    NavbarComponent.prototype.dialog;
    /** @type {?} */
    NavbarComponent.prototype.auth;
    /** @type {?} */
    NavbarComponent.prototype.store;
}
