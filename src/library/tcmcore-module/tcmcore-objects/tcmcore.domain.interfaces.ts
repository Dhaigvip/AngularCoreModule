import { OnInit, ViewContainerRef, Inject, EventEmitter } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router, NavigationEnd, NavigationExtras } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr';
import { TranslateService } from 'ng2-translate';
// import { LogService } from 'ng2-log-service';
import {
  CacheOption, ClientRequestDTO, ClientResponseDTO,
  CacheData, CacheObject, DashboardData, ContextDTO,
  RouteInfo, PageSettings, UserSettings, SearchRepository, ControlSettings, ErrorDTO, MessageWrapper, UserCredentials
} from '../tcmcore-objects/tcmcore.domain.objects';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

// State for this Core (Product)
export interface CoreState {
  error: string;
  TCMMessages: Array<any>;
  DashboardMessages: Array<any>;
  CurrentInboxItem: any;
  Token?: string;
}
export interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  webkitSpeechGrammarList: any;
}

export interface IDataService {
  Get(domain: string, params_in: any, cache: CacheOption, showLoadIndicator?: boolean): Observable<any>;
  Post(domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator?: boolean): Observable<any>;
  Invoke(methodName: string, domain: string, Data: any, cache: CacheOption, showLoadIndicator: boolean): Observable<any>;
  PostAnonymous(domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator?: boolean): Observable<any>;
  Put(domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean): Observable<any>;
  Patch(domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean): Observable<any>;
  Delete(domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean): Observable<any>;
  GetById(domain: string, id: number, field: string, cache: CacheOption): Observable<any>;
  ExportToExcel(domain: string, request: ClientRequestDTO, showLoadIndicator?: boolean): void;
}

export interface IUserSettingsService {
  UpdatePageSettings(pageId: string, pageSettings: PageSettings): void;
  GetUserSettingsForPage(pageId: string): PageSettings;
  FetchUserSettings(userSettings: UserSettings): Observable<any>;
  SaveUserSettings();
}

export interface IStaticDataService {
  LoadStaticData(): Observable<any>;
  GetStaticData(key: String): CacheData;
  GetStaticDataList(keys: Array<string>): Array<CacheData>;
  GetStaticDataItems(key: string): Array<CacheObject>;
}

export interface IAppBootstrap {
  Bootstrap(applicationId: string): Promise<{}>
}

export interface IAuthService {
  IsAuthenticated(): boolean;
  GetUserContext(): ContextDTO;
  PreAutheticate(): Observable<string>;
  Autheticate(): Observable<any>;
  AutheticateExternal(credentials: UserCredentials): Observable<any>;
  DecodeUserToken(): any;
  GetExpiryDate(): Date;
  IsInRole(role: string): boolean;
  IsAuthorisedForUpdate(roles: string[]): boolean;
  IsAuthorisedForCreate(roles: string[]): boolean;
  userAutheticated?: EventEmitter<boolean>;
}
export interface ICacheService {
  Set(key: string, data: any, options?: any): boolean;
  Get(key: string): any;
  GetTagData(tag: string): any;
  Exists(key: string): boolean;
  Remove(key: string): void;
  RemoveTag(tag: string): void;
  RemoveAll(): void;

}

export interface IConfiguration {
  WebApiUrl: string;
  SignalRUrl: string
  userPersistence: boolean,
  staticData: boolean,
  dashBoard: boolean,
  tcmMessages: boolean,
  theme: string,
  updateRoles: string,
  createRoles: string;
  extensionData: any
  ServerLog: boolean
  Authetication: string;
}


export interface IConfigService {
  Init(): Observable<any>;
  Config: IConfiguration;
}

export interface IWindowRef {
  readonly nativeWindow: any;
}

export interface IWebSocketService {
  Init(hubName: string, userContext: ContextDTO, options: any): Observable<boolean>;
}

export interface ITCMWebSocketService extends IWebSocketService {
  SendMessage(message: any, target: string, messageId: string): Observable<any>;
}

export interface INavigationService {
  Navigate(key: string): void;
  NavigateWithQueryParams(key: string, params: any): void;
  NavigateWithMandatoryParams(key: string, params: any): void;
  NavigateWithExtras(key: string, navigationExtras: NavigationExtras): void;
}
export interface IThemeService {
  theme: BehaviorSubject<string>;
  change(value: string): void;
  currenttheme: string
  init(): void;
}



export interface IModuleBaseComponent {

  pageSettings: PageSettings;
  lastQuery: SearchRepository;
  lastSubQuery: any;
  filter: any;

  userSettingsService: IUserSettingsService;
  staticDataService: IStaticDataService;
  navigation: INavigationService;

  logService: ILogService;
  translate: TranslateService;
  // toastr: ToastsManager;

  theme: IThemeService;
  router: Router;
  winRef: IWindowRef;


  GetPersistenceForControl(controlId);

  UpdatePersistenceForControl(controlPersistenceObj: ControlSettings);
  GetUserSettingsForPage();

  //Notifications
  NotifySuccess(message: string)

  NotifyErrorMessage(message: string);
  NotifyError(errors: Array<ErrorDTO>);

  NotifyWarning(message: string);

  NotifyInfo(message: string);

  //Logging
  logObject(message: string, obj: any);
  log(message: string);
  warn(message: string);
  info(message: string);
  error(message: string);
  debug(message: string);
}


export interface ILogService {
  //Logging
  logObject(message: string, obj: any);
  log(message: string);
  warn(message: string);
  info(message: string);
  error(message: string);
  debug(message: string);
  logServer(message: string, type: string);
}
export interface ICanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

