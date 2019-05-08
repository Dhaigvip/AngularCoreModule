/*
  Vipul Dhaigude        2017-01-05    Created
*/


import { OnInit, ViewContainerRef, Inject, AfterViewInit, NgZone } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';

import {
  CacheOption, ClientRequestDTO, ClientResponseDTO,
  CacheData, CacheObject, DashboardData, ContextDTO,
  RouteInfo, PageSettings, UserSettings, SearchRepository, ControlSettings, ErrorDTO
} from '../tcmcore-objects/tcmcore.domain.objects';

import {
  IUserSettingsService, IStaticDataService, INavigationService,
  IWindowRef, IModuleBaseComponent, IThemeService, ILogService, CoreState, ICacheService, IAuthService, IConfigService
} from "../tcmcore-objects/tcmcore.domain.interfaces";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { LogService } from './tcmcore.log.service';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { getSelectedInboxItem } from '../state/tcmcore.selectors';
import { TCMErrorStateMatcher } from './tcmcore.errorstatematcher';
declare var $: any;

export abstract class ModuleBaseComponent implements IModuleBaseComponent, AfterViewInit {

  pageSettings: PageSettings;
  lastQuery: SearchRepository;
  lastSubQuery: any;
  filter: any;
  matcher: any;

  userSettingsService: IUserSettingsService;
  staticDataService: IStaticDataService;
  navigation: INavigationService;
  cacheService: ICacheService;

  configService: IConfigService;
  authService: IAuthService;
  logService: ILogService;
  translate: TranslateService;
  toastrService: ToastrService;
  themeService: IThemeService;
  snackBar: MatSnackBar
  currentSection = '';
  theme;
  router: Router;
  route: ActivatedRoute;

  winRef: IWindowRef;
  ticker: any;
  snackBarRef: any;
  zone: NgZone;
  store: Store<CoreState>
  inboxItem = null;

  constructor(protected pageId: any
    , protected moduleName: string
    , protected ServiceLocator: any) {


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
    this.staticDataService = ServiceLocator.injector.get('IStaticDataService');;
    this.navigation = ServiceLocator.injector.get('INavigationService');
    this.winRef = ServiceLocator.injector.get('IWindowRef');


    this.pageSettings = this.GetUserSettingsForPage();
    this.lastSubQuery = {};

    //this.zone.runOutsideAngular(() => {
    this.ticker = Observable.interval(20000)
      .subscribe((val) => {
        this.zone.run(() => {
          //console.log('called');
          this.NotifyUserForSaveChange();
        });
      })
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

  ngOnDestry() {
    this.ticker = null;
  }
  CanUpdate = () => {
    var role = this.configService.Config.updateRoles;
    if (role)
      return this.authService.IsInRole(role)
    return true;
  }
  CanCreate = () => {
    var role = this.configService.Config.createRoles;
    if (role)
      return this.authService.IsInRole(role)
    return true;
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
  NotifyUserForSaveChange = () => {
    if (this.CheckIfDirty())
      this.openSnackBar("Please save unsaved changes", "Save");
  }
  openSnackBar(message: string, action: string) {
    this.snackBarRef = this.snackBar.open(message, action, {
      duration: 5000,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.Save();
    });
  }
  abstract CheckIfDirty(): boolean;
  abstract Save(): void;


  ngOnInit() {
    this.matcher = new TCMErrorStateMatcher();
  }

  translateDecode(text) {
    return this.convertCharCodes(this.translate.instant(text));
  }
  public convertCharCodes = (stringToFormat) => {
    return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number) })
  }

  htmlDecode = (value) => {
    if (value && (value === '&nbsp;' || value === '&#160;' || (value.length === 1 && value.charCodeAt(0) === 160))) { return ""; }
    return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  }
  htmlEncode = (value) => {
    return !value ? value : String(value).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  ngAfterViewInit() {
    let globalSettings = this.userSettingsService.GetUserSettingsForPage("Global");
    (globalSettings) ? this.theme = globalSettings.PageData.filter((ctrl) => ctrl.ControlId === 'Theme')[0].ControlData : this.theme = 'primary';

    this.themeService.theme.subscribe((val) => {
      if (val === '') {
        val = 'primary';
      }
      this.theme = val;
      console.log('base form - ' + this.theme);
    });

    this.theme = this.themeService.currenttheme;
    console.log('base form after view init - ' + this.theme);
  }
  private s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  public guid = () => {

    var guid = this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
    //TCM accepts only 20 char.
    guid = guid.substring(0, 19);
    return guid;
  }

  GetThemeColor = (themeName) => {
    var color = "purple";
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
  }

  //User persistence
  public GetPersistenceForControl = (controlId) => {
    var data = null;
    if (this.pageSettings && this.pageSettings.PageData) {
      $.each(this.pageSettings.PageData, function (index, val) {
        if (val.ControlId === controlId) {
          data = val.ControlData;
          return false;
        }
      });
    }
    return data;
  }

  public UpdatePersistenceForControl = (controlPersistenceObj: ControlSettings) => {

    var existingSettings = false;
    if (this.pageSettings && this.pageSettings.PageData) {
      $.each(this.pageSettings.PageData, function (index, val) {
        if (val.ControlId === controlPersistenceObj.ControlId) {
          val.ControlData = controlPersistenceObj.ControlData;
          existingSettings = true;
          return false;
        }
      });
    }

    if (!existingSettings) {
      if (this.pageSettings == null) {
        this.pageSettings = new PageSettings();
        this.pageSettings.PageId = this.pageId;
        this.pageSettings.PageData = new Array<ControlSettings>();
      }
      this.pageSettings.PageData.push({ ControlId: controlPersistenceObj.ControlId, ControlData: controlPersistenceObj.ControlData });
    }
    this.userSettingsService.UpdatePageSettings(this.pageId, this.pageSettings);

  }

  public GetUserSettingsForPage = () => {
    return this.userSettingsService.GetUserSettingsForPage(this.pageId);
  }
  public StrToDate = (str) => {
    return new Date(str);
  }

  //Static Data
  public GetStaticData = (key: String): CacheData => {
    return this.staticDataService.GetStaticData(key);
  }
  public GetStaticDataList = (keys: Array<string>): Array<CacheData> => {
    return this.staticDataService.GetStaticDataList(keys);
  }
  public GetStaticDataItems = (key: string): CacheObject[] => {
    return this.staticDataService.GetStaticDataItems(key);
  }

  //Notifications
  public NotifySuccess = (message: string) => {
    this.toastrService.success(message, "Success");
  }

  public NotifyErrorMessage = (message: string) => {
    this.toastrService.error(message, 'Error', { closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
  }
  public NotifyError = (errors: Array<ErrorDTO>) => {
    var err = '<ul>';
    for (var i = 0; i < errors.length; i++) {
      err += '<li>'
      err += errors[i].ErrorMessage;
      err += '</li>'
    }
    err += '</ul>'
    this.toastrService.error(err, 'Error', { enableHtml: true, closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
  }

  public NotifyWarning = (message: string) => {
    this.toastrService.warning(message, "Warning");
  }

  public NotifyInfo = (message: string) => {
    this.toastrService.info(message, "Information");
  }

  //Logging
  public logObject(message: string, obj: any) {
    this.logService.logObject(message, obj);
  }
  public log(message: string) {
    this.logService.log(message);
  }
  public warn(message: string) {
    this.logService.warn(message);
  }
  public info(message: string) {
    this.logService.info(message);
  }
  public error(message: string) {
    this.logService.error(message);
  }
  public debug(message: string) {
    this.logService.debug(message);
  }
}

