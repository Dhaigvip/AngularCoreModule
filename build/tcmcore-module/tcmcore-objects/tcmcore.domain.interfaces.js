/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function CoreState() { }
function CoreState_tsickle_Closure_declarations() {
    /** @type {?} */
    CoreState.prototype.error;
    /** @type {?} */
    CoreState.prototype.TCMMessages;
    /** @type {?} */
    CoreState.prototype.DashboardMessages;
    /** @type {?} */
    CoreState.prototype.CurrentInboxItem;
    /** @type {?|undefined} */
    CoreState.prototype.Token;
}
/**
 * @record
 */
export function IWindow() { }
function IWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    IWindow.prototype.webkitSpeechRecognition;
    /** @type {?} */
    IWindow.prototype.SpeechRecognition;
    /** @type {?} */
    IWindow.prototype.webkitSpeechGrammarList;
}
/**
 * @record
 */
export function IDataService() { }
function IDataService_tsickle_Closure_declarations() {
    /** @type {?} */
    IDataService.prototype.Get;
    /** @type {?} */
    IDataService.prototype.Post;
    /** @type {?} */
    IDataService.prototype.Invoke;
    /** @type {?} */
    IDataService.prototype.PostAnonymous;
    /** @type {?} */
    IDataService.prototype.Put;
    /** @type {?} */
    IDataService.prototype.Patch;
    /** @type {?} */
    IDataService.prototype.Delete;
    /** @type {?} */
    IDataService.prototype.GetById;
    /** @type {?} */
    IDataService.prototype.ExportToExcel;
}
/**
 * @record
 */
export function IUserSettingsService() { }
function IUserSettingsService_tsickle_Closure_declarations() {
    /** @type {?} */
    IUserSettingsService.prototype.UpdatePageSettings;
    /** @type {?} */
    IUserSettingsService.prototype.GetUserSettingsForPage;
    /** @type {?} */
    IUserSettingsService.prototype.FetchUserSettings;
    /** @type {?} */
    IUserSettingsService.prototype.SaveUserSettings;
}
/**
 * @record
 */
export function IStaticDataService() { }
function IStaticDataService_tsickle_Closure_declarations() {
    /** @type {?} */
    IStaticDataService.prototype.LoadStaticData;
    /** @type {?} */
    IStaticDataService.prototype.GetStaticData;
    /** @type {?} */
    IStaticDataService.prototype.GetStaticDataList;
    /** @type {?} */
    IStaticDataService.prototype.GetStaticDataItems;
}
/**
 * @record
 */
export function IAppBootstrap() { }
function IAppBootstrap_tsickle_Closure_declarations() {
    /** @type {?} */
    IAppBootstrap.prototype.Bootstrap;
}
/**
 * @record
 */
export function IAuthService() { }
function IAuthService_tsickle_Closure_declarations() {
    /** @type {?} */
    IAuthService.prototype.IsAuthenticated;
    /** @type {?} */
    IAuthService.prototype.GetUserContext;
    /** @type {?} */
    IAuthService.prototype.PreAutheticate;
    /** @type {?} */
    IAuthService.prototype.Autheticate;
    /** @type {?} */
    IAuthService.prototype.AutheticateExternal;
    /** @type {?} */
    IAuthService.prototype.DecodeUserToken;
    /** @type {?} */
    IAuthService.prototype.GetExpiryDate;
    /** @type {?} */
    IAuthService.prototype.IsInRole;
    /** @type {?} */
    IAuthService.prototype.IsAuthorisedForUpdate;
    /** @type {?} */
    IAuthService.prototype.IsAuthorisedForCreate;
    /** @type {?|undefined} */
    IAuthService.prototype.userAutheticated;
}
/**
 * @record
 */
export function ICacheService() { }
function ICacheService_tsickle_Closure_declarations() {
    /** @type {?} */
    ICacheService.prototype.Set;
    /** @type {?} */
    ICacheService.prototype.Get;
    /** @type {?} */
    ICacheService.prototype.GetTagData;
    /** @type {?} */
    ICacheService.prototype.Exists;
    /** @type {?} */
    ICacheService.prototype.Remove;
    /** @type {?} */
    ICacheService.prototype.RemoveTag;
    /** @type {?} */
    ICacheService.prototype.RemoveAll;
}
/**
 * @record
 */
export function IConfiguration() { }
function IConfiguration_tsickle_Closure_declarations() {
    /** @type {?} */
    IConfiguration.prototype.WebApiUrl;
    /** @type {?} */
    IConfiguration.prototype.SignalRUrl;
    /** @type {?} */
    IConfiguration.prototype.userPersistence;
    /** @type {?} */
    IConfiguration.prototype.staticData;
    /** @type {?} */
    IConfiguration.prototype.dashBoard;
    /** @type {?} */
    IConfiguration.prototype.tcmMessages;
    /** @type {?} */
    IConfiguration.prototype.theme;
    /** @type {?} */
    IConfiguration.prototype.updateRoles;
    /** @type {?} */
    IConfiguration.prototype.createRoles;
    /** @type {?} */
    IConfiguration.prototype.extensionData;
    /** @type {?} */
    IConfiguration.prototype.ServerLog;
    /** @type {?} */
    IConfiguration.prototype.Authetication;
}
/**
 * @record
 */
export function IConfigService() { }
function IConfigService_tsickle_Closure_declarations() {
    /** @type {?} */
    IConfigService.prototype.Init;
    /** @type {?} */
    IConfigService.prototype.Config;
}
/**
 * @record
 */
export function IWindowRef() { }
function IWindowRef_tsickle_Closure_declarations() {
    /** @type {?} */
    IWindowRef.prototype.nativeWindow;
}
/**
 * @record
 */
export function IWebSocketService() { }
function IWebSocketService_tsickle_Closure_declarations() {
    /** @type {?} */
    IWebSocketService.prototype.Init;
}
/**
 * @record
 */
export function ITCMWebSocketService() { }
function ITCMWebSocketService_tsickle_Closure_declarations() {
    /** @type {?} */
    ITCMWebSocketService.prototype.SendMessage;
}
/**
 * @record
 */
export function INavigationService() { }
function INavigationService_tsickle_Closure_declarations() {
    /** @type {?} */
    INavigationService.prototype.Navigate;
    /** @type {?} */
    INavigationService.prototype.NavigateWithQueryParams;
    /** @type {?} */
    INavigationService.prototype.NavigateWithMandatoryParams;
    /** @type {?} */
    INavigationService.prototype.NavigateWithExtras;
}
/**
 * @record
 */
export function IThemeService() { }
function IThemeService_tsickle_Closure_declarations() {
    /** @type {?} */
    IThemeService.prototype.theme;
    /** @type {?} */
    IThemeService.prototype.change;
    /** @type {?} */
    IThemeService.prototype.currenttheme;
    /** @type {?} */
    IThemeService.prototype.init;
}
/**
 * @record
 */
export function IModuleBaseComponent() { }
function IModuleBaseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    IModuleBaseComponent.prototype.pageSettings;
    /** @type {?} */
    IModuleBaseComponent.prototype.lastQuery;
    /** @type {?} */
    IModuleBaseComponent.prototype.lastSubQuery;
    /** @type {?} */
    IModuleBaseComponent.prototype.filter;
    /** @type {?} */
    IModuleBaseComponent.prototype.userSettingsService;
    /** @type {?} */
    IModuleBaseComponent.prototype.staticDataService;
    /** @type {?} */
    IModuleBaseComponent.prototype.navigation;
    /** @type {?} */
    IModuleBaseComponent.prototype.logService;
    /** @type {?} */
    IModuleBaseComponent.prototype.translate;
    /** @type {?} */
    IModuleBaseComponent.prototype.theme;
    /** @type {?} */
    IModuleBaseComponent.prototype.router;
    /** @type {?} */
    IModuleBaseComponent.prototype.winRef;
    /** @type {?} */
    IModuleBaseComponent.prototype.GetPersistenceForControl;
    /** @type {?} */
    IModuleBaseComponent.prototype.UpdatePersistenceForControl;
    /** @type {?} */
    IModuleBaseComponent.prototype.GetUserSettingsForPage;
    /** @type {?} */
    IModuleBaseComponent.prototype.NotifySuccess;
    /** @type {?} */
    IModuleBaseComponent.prototype.NotifyErrorMessage;
    /** @type {?} */
    IModuleBaseComponent.prototype.NotifyError;
    /** @type {?} */
    IModuleBaseComponent.prototype.NotifyWarning;
    /** @type {?} */
    IModuleBaseComponent.prototype.NotifyInfo;
    /** @type {?} */
    IModuleBaseComponent.prototype.logObject;
    /** @type {?} */
    IModuleBaseComponent.prototype.log;
    /** @type {?} */
    IModuleBaseComponent.prototype.warn;
    /** @type {?} */
    IModuleBaseComponent.prototype.info;
    /** @type {?} */
    IModuleBaseComponent.prototype.error;
    /** @type {?} */
    IModuleBaseComponent.prototype.debug;
}
/**
 * @record
 */
export function ILogService() { }
function ILogService_tsickle_Closure_declarations() {
    /** @type {?} */
    ILogService.prototype.logObject;
    /** @type {?} */
    ILogService.prototype.log;
    /** @type {?} */
    ILogService.prototype.warn;
    /** @type {?} */
    ILogService.prototype.info;
    /** @type {?} */
    ILogService.prototype.error;
    /** @type {?} */
    ILogService.prototype.debug;
    /** @type {?} */
    ILogService.prototype.logServer;
}
/**
 * @record
 */
export function ICanComponentDeactivate() { }
function ICanComponentDeactivate_tsickle_Closure_declarations() {
    /** @type {?} */
    ICanComponentDeactivate.prototype.canDeactivate;
}
