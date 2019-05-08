/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FooterComponent } from './tcmcore-module/core-components/footer/footer.component';
import { NavbarComponent } from './tcmcore-module/core-components/navbar/navbar.component';
import { SettingsComponent } from './tcmcore-module/core-components/settings/settings.component';
import { VerticleNavbarComponent } from './tcmcore-module/core-components/verticlenavbar/verticlenavbar.component';
import { ErrorDivComponent } from './tcmcore-module/core-components/ErrorDiv/errordiv.component';
import { AutoHeightDirective } from './tcmcore-module/core-components/autoheight/autoheight.component';
import { Errorpage } from './tcmcore-module/core-components/errorpage/errorpage.component';
import { PagenotFoundComponent } from './tcmcore-module/core-components/pagenotfound/pagenotfound.component';
export { FooterComponent } from './tcmcore-module/core-components/footer/footer.component';
export { NavbarComponent } from './tcmcore-module/core-components/navbar/navbar.component';
export { SettingsComponent } from './tcmcore-module/core-components/settings/settings.component';
export { VerticleNavbarComponent } from './tcmcore-module/core-components/verticlenavbar/verticlenavbar.component';
export { Errorpage } from './tcmcore-module/core-components/errorpage/errorpage.component';
export { PagenotFoundComponent } from './tcmcore-module/core-components/pagenotfound/pagenotfound.component';
export { SignInComponent } from './tcmcore-module/core-components/signin/signinpage.component';
export { SignUpComponent } from './tcmcore-module/core-components/signup/signupage.component';
export { AutoHeightDirective } from './tcmcore-module/core-components/autoheight/autoheight.component';
export { ErrorDivComponent } from './tcmcore-module/core-components/ErrorDiv/errordiv.component';
import { TCMMaterialModule } from './materialModule';
export { myCustomTooltipDefaults, TCMMaterialModule } from './materialModule';
import { CacheService, } from 'ng2-cache-service';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AngularSplitModule } from 'angular-split';
import { ConfirmComponent } from './tcmcore-module/core-components/confirmdialog/confirm.component';
import { ErrorPopupComponent } from './tcmcore-module/core-components/errorpopup/errorpopup.component';
import { AutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/autocomplete.component';
import { PagenotAutheticatedComponent } from './tcmcore-module/core-components/pagenotautheticated/pagenotautheticated.component';
import { SignInComponent } from './tcmcore-module/core-components/signin/signinpage.component';
import { SignUpComponent } from './tcmcore-module/core-components/signup/signupage.component';
import { InputComponent } from './tcmcore-module/core-components/UIComponents/input/input.component';
import { NumberComponent } from './tcmcore-module/core-components/UIComponents/input/number.component';
import { tcmnumber } from './tcmcore-module/core-components/UIComponents/input/tcm-number.pipe';
import { ScrollSpyDirective } from './tcmcore-module/core-components/UIComponents/scrollspy/tcmcore.scrollspy.directive';
import { SelectComponent } from './tcmcore-module/core-components/UIComponents/select/select.component';
import { CheckboxComponent } from './tcmcore-module/core-components/UIComponents/checkbox/check.component';
import { DateComponent } from './tcmcore-module/core-components/UIComponents/datepicker/datepicker.component';
import { PanelContainerComponent } from './tcmcore-module/core-components/UIComponents/panel-container/panel-container.component';
import { CardContainerComponent } from './tcmcore-module/core-components/UIComponents/card-panel/card-container.component';
import { ResponsiveDivComponent } from './tcmcore-module/core-components/UIComponents/reponsive-div/responsive-div.component';
import { TimePickerComponent } from './tcmcore-module/core-components/timepicker/timepicker.component';
import { GlobalErrorHandler } from './tcmcore-module/core-services/tcmcore.globalerrorhandler.service';
import { LoaderService } from './tcmcore-module/core-services/tcmcore.loader.service';
import { ThemeService } from './tcmcore-module/core-services/tcmcore.theme.service';
import { DataService } from './tcmcore-module/core-services/tcmcore.data.service';
import { DashboardService } from './tcmcore-module/core-services/tcmcore.dashboard.service';
import { MessageService } from './tcmcore-module/core-services/tcmcore.message.service';
import { AuthService } from './tcmcore-module/core-services/tcmcore.auth.service';
import { WindowRef } from './tcmcore-module/core-services/tcmcore.windowref.service';
import { UserSettingsService } from './tcmcore-module/core-services/tcmcore.usersettings.service';
import { ConfigService } from './tcmcore-module/core-services/tcmcore.config.service';
import { StaticDataService } from './tcmcore-module/core-services/tcmcore.app-static-data.service';
import { AppBootstrap } from './tcmcore-module/core-services/tcmcore.appbootstrap';
import { TCMCacheService } from './tcmcore-module/core-services/tcmcore.cache.service';
import { AppContextComponent } from './tcmcore-module/core-components/appcontext/appcontext.component';
import { NavigationService } from './tcmcore-module/core-services/tcmcore.navigation.service';
import { LogService } from './tcmcore-module/core-services/tcmcore.log.service';
import { ContainerComponent } from './tcmcore-module/core-components/container/container.component';
import { TCMErrorStateMatcher } from './tcmcore-module/core-services/tcmcore.errorstatematcher';
import { SimpleAutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/simple-autocomplete.component';
export { DataService } from './tcmcore-module/core-services/tcmcore.data.service';
export { AuthService } from './tcmcore-module/core-services/tcmcore.auth.service';
export { DashboardService } from './tcmcore-module/core-services/tcmcore.dashboard.service';
export { MessageService } from './tcmcore-module/core-services/tcmcore.message.service';
export { ClientContext, UserCredentials, CacheData, MasterData, CacheObject, UserSettings, DashboardViewType, DashboardData, PageSettings, ControlSettings, ContactDetails, MessageState, MessageAttachment, MessageWrapper, ExportInput, ExportColumn, KeyRequest, CacheOption, ClientRequestDTO, ErrorDTO, ClientResponseDTO, ThemeColors, CardContainer, PanelContainer, AutoCompleteOptions, InputControlOptions, SelectControlOptions, SearchRepository } from './tcmcore-module/tcmcore-objects/tcmcore.domain.objects';
export { WindowRef } from './tcmcore-module/core-services/tcmcore.windowref.service';
export { UserSettingsService } from './tcmcore-module/core-services/tcmcore.usersettings.service';
export { StaticDataService } from './tcmcore-module/core-services/tcmcore.app-static-data.service';
export { AppBootstrap } from './tcmcore-module/core-services/tcmcore.appbootstrap';
export { ModuleBaseComponent } from './tcmcore-module/core-services/tcmcore.module-base.component';
export { TCMCacheService } from './tcmcore-module/core-services/tcmcore.cache.service';
//export * from './tcmcore-module/core-services/tcmcore.share.service';
export { AppContextComponent } from './tcmcore-module/core-components/appcontext/appcontext.component';
export { ContainerComponent } from './tcmcore-module/core-components/container/container.component';
export { DashboardServiceCore } from './tcmcore-module/core-services/tcmcore.dashboard.service.core';
export { AutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/autocomplete.component';
export { InputComponent } from './tcmcore-module/core-components/UIComponents/input/input.component';
export { NumberComponent } from './tcmcore-module/core-components/UIComponents/input/number.component';
export { tcmnumber } from './tcmcore-module/core-components/UIComponents/input/tcm-number.pipe';
export { ScrollSpyDirective } from './tcmcore-module/core-components/UIComponents/scrollspy/tcmcore.scrollspy.directive';
export { SelectComponent } from './tcmcore-module/core-components/UIComponents/select/select.component';
export { CheckboxComponent } from './tcmcore-module/core-components/UIComponents/checkbox/check.component';
export { DateComponent } from './tcmcore-module/core-components/UIComponents/datepicker/datepicker.component';
export { PanelContainerComponent } from './tcmcore-module/core-components/UIComponents/panel-container/panel-container.component';
export { CardContainerComponent } from './tcmcore-module/core-components/UIComponents/card-panel/card-container.component';
export { ResponsiveDivComponent } from './tcmcore-module/core-components/UIComponents/reponsive-div/responsive-div.component';
export { TimePickerComponent } from './tcmcore-module/core-components/timepicker/timepicker.component';
export { PagenotAutheticatedComponent } from './tcmcore-module/core-components/pagenotautheticated/pagenotautheticated.component';
export { SimpleAutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/simple-autocomplete.component';
export { ConfigService } from './tcmcore-module/core-services/tcmcore.config.service';
export { NavigationService } from './tcmcore-module/core-services/tcmcore.navigation.service';
export { LoaderService } from './tcmcore-module/core-services/tcmcore.loader.service';
export { ThemeService } from './tcmcore-module/core-services/tcmcore.theme.service';
export { LogService } from './tcmcore-module/core-services/tcmcore.log.service';
export { TCMErrorStateMatcher } from './tcmcore-module/core-services/tcmcore.errorstatematcher';
export { ConfirmComponent } from './tcmcore-module/core-components/confirmdialog/confirm.component';
export { ErrorPopupComponent } from './tcmcore-module/core-components/errorpopup/errorpopup.component';
export { Inbox } from './tcmcore-module/core-components/Inbox/inbox.component';
export { InboxList } from './tcmcore-module/core-components/Inbox/inbox.list.component';
export { BaseChartDirective, ChartsModule } from 'ng2-charts';
export { ɵa, AngularSplitModule, SplitComponent, SplitAreaDirective } from 'angular-split';
import { SignalRModule } from '@dharapvj/ngx-signalr' //'ng2-signalr';
;
import { SignalRConfiguration } from '@dharapvj/ngx-signalr' //'ng2-signalr';
;
import { Inbox } from './tcmcore-module/core-components/Inbox/inbox.component';
import { InboxList } from './tcmcore-module/core-components/Inbox/inbox.list.component';
export { CoreActionTypes, TCMMessageReceived, DashboardMessageReceived, SetCurrentInboxItem } from './tcmcore-module/state/tcmcore.actions';
export { CoreEffects } from './tcmcore-module/state/tcmcore.effects';
export { CoreReducer } from './tcmcore-module/state/tcmcore.reducer';
export { getInboxItems, getSelectedInboxItem, getDashboardItems } from './tcmcore-module/state/tcmcore.selectors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './tcmcore-module/state/tcmcore.effects';
import { CoreReducer } from './tcmcore-module/state/tcmcore.reducer';
import { TranslateModule } from 'ng2-translate';
import { VoiceSearch } from './tcmcore-module/core-components/voicesearch/voicesearch.component';
import { Utilities } from './tcmcore-module/tcmcore-objects/tcmcore.utilities';
import { FocusDirective } from './tcmcore-module/core-components/UIComponents/focus/tcmcore.focus.directive';
import { CORE_ROUTES } from './tcmcore.route.config';
import { AuthGuard } from './tcmcore-module/core-services/Guards/tcmcore.authguard';
export { AppBootstrapCore } from './tcmcore-module/core-services/tcmcore.appbootstrapCore';
export { AuthServiceCore } from './tcmcore-module/core-services/tcmcore.auth.service.core';
export { DataServiceCore } from './tcmcore-module/core-services/tcmcore.data.serviceCore';
export { FocusDirective } from './tcmcore-module/core-components/UIComponents/focus/tcmcore.focus.directive';
export { Utilities, StringConverter, BooleanConverter, NumberConverter, InputConverter } from './tcmcore-module/tcmcore-objects/tcmcore.utilities';
export { AuthGuard } from './tcmcore-module/core-services/Guards/tcmcore.authguard';
export { VoiceSearch } from './tcmcore-module/core-components/voicesearch/voicesearch.component';
/**
 * @return {?}
 */
export function createConfig() {
    var /** @type {?} */ c = new SignalRConfiguration();
    c.logging = true;
    return c;
}
var TCMCoreModule = /** @class */ (function () {
    function TCMCoreModule() {
    }
    /**
     * @return {?}
     */
    TCMCoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TCMCoreModule
        };
    };
    TCMCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(CORE_ROUTES),
                        SignalRModule.forRoot(createConfig),
                        HttpModule,
                        HttpClientModule,
                        TranslateModule,
                        ChartsModule,
                        RouterModule,
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        TCMMaterialModule,
                        ToastrModule.forRoot({ positionClass: 'toast-top-right', closeButton: true }),
                        ToastContainerModule,
                        AngularSplitModule,
                        StoreModule.forFeature('core', CoreReducer),
                        EffectsModule.forFeature([CoreEffects])
                    ],
                    entryComponents: [
                        SettingsComponent,
                        VoiceSearch,
                        ConfirmComponent,
                        ErrorPopupComponent
                    ],
                    declarations: [
                        FooterComponent,
                        ContainerComponent,
                        NavbarComponent,
                        VerticleNavbarComponent,
                        SettingsComponent,
                        VoiceSearch,
                        ConfirmComponent,
                        AppContextComponent,
                        Errorpage,
                        PagenotFoundComponent,
                        PagenotAutheticatedComponent,
                        SignInComponent,
                        SignUpComponent,
                        TCMErrorStateMatcher,
                        AutoHeightDirective,
                        ErrorDivComponent,
                        ErrorPopupComponent,
                        Inbox,
                        InboxList,
                        AutoCompleteComponent,
                        SimpleAutoCompleteComponent,
                        InputComponent,
                        NumberComponent
                        //, NumberComponent2
                        ,
                        tcmnumber,
                        SelectComponent,
                        CheckboxComponent,
                        DateComponent,
                        PanelContainerComponent,
                        CardContainerComponent,
                        ResponsiveDivComponent,
                        FocusDirective,
                        ScrollSpyDirective,
                        TimePickerComponent
                    ],
                    providers: [
                        { provide: 'ILogService', useClass: LogService },
                        { provide: 'IConfigService', useClass: ConfigService },
                        { provide: 'INavigationService', useClass: NavigationService },
                        CacheService,
                        { provide: 'ICacheService', useClass: TCMCacheService },
                        LoaderService,
                        { provide: 'IThemeService', useClass: ThemeService },
                        { provide: 'IWebSocketService', useClass: DashboardService },
                        { provide: 'ITCMWebSocketService', useClass: MessageService },
                        { provide: 'IWindowRef', useClass: WindowRef },
                        { provide: 'IStaticDataService', useClass: StaticDataService },
                        { provide: 'IUserSettingsService', useClass: UserSettingsService },
                        { provide: 'IAuthService', useClass: AuthService },
                        { provide: 'IDataService', useClass: DataService },
                        { provide: 'IAppBootstrap', useClass: AppBootstrap },
                        Utilities,
                        tcmnumber,
                        {
                            provide: ErrorHandler, useClass: GlobalErrorHandler
                        },
                        AuthGuard
                    ],
                    exports: [
                        CommonModule,
                        ChartsModule,
                        HttpModule,
                        HttpClientModule,
                        ReactiveFormsModule,
                        FormsModule,
                        FooterComponent,
                        NavbarComponent,
                        VerticleNavbarComponent,
                        ContainerComponent,
                        AppContextComponent,
                        ToastrModule,
                        ToastContainerModule,
                        TCMErrorStateMatcher,
                        AngularSplitModule,
                        ConfirmComponent,
                        AutoHeightDirective,
                        ErrorDivComponent,
                        ErrorPopupComponent,
                        Inbox,
                        InboxList,
                        AutoCompleteComponent,
                        SimpleAutoCompleteComponent,
                        InputComponent,
                        NumberComponent
                        //, NumberComponent2
                        ,
                        tcmnumber,
                        SelectComponent,
                        CheckboxComponent,
                        DateComponent,
                        PanelContainerComponent,
                        CardContainerComponent,
                        ResponsiveDivComponent,
                        FocusDirective,
                        ScrollSpyDirective,
                        TimePickerComponent
                    ]
                },] },
    ];
    return TCMCoreModule;
}());
export { TCMCoreModule };
function TCMCoreModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TCMCoreModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TCMCoreModule.ctorParameters;
}
