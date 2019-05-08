/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { NgModule, ErrorHandler, InjectionToken, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule, RequestOptions, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { Cookie, CookieService } from 'ng2-cookies';
import { ChartsModule } from 'ng2-charts';


//Components import and exports
import { FooterComponent } from './tcmcore-module/core-components/footer/footer.component';
import { NavbarComponent } from './tcmcore-module/core-components/navbar/navbar.component';
import { SettingsComponent } from './tcmcore-module/core-components/settings/settings.component';
import { VerticleNavbarComponent } from './tcmcore-module/core-components/verticlenavbar/verticlenavbar.component';
import { ErrorDivComponent } from './tcmcore-module/core-components/ErrorDiv/errordiv.component';
import { AutoHeightDirective } from './tcmcore-module/core-components/autoheight/autoheight.component';
import { Errorpage } from './tcmcore-module/core-components/errorpage/errorpage.component';
import { PagenotFoundComponent } from './tcmcore-module/core-components/pagenotfound/pagenotfound.component'

export * from './tcmcore-module/core-components/footer/footer.component';
export * from './tcmcore-module/core-components/navbar/navbar.component';
export * from './tcmcore-module/core-components/settings/settings.component';
export * from './tcmcore-module/core-components/verticlenavbar/verticlenavbar.component';
export * from './tcmcore-module/core-components/errorpage/errorpage.component';
export * from './tcmcore-module/core-components/pagenotfound/pagenotfound.component';
export * from './tcmcore-module/core-components/signin/signinpage.component';
export * from './tcmcore-module/core-components/signup/signupage.component';
export * from './tcmcore-module/core-components/autoheight/autoheight.component';
export * from './tcmcore-module/core-components/ErrorDiv/errordiv.component';


//Material module
import { TCMMaterialModule } from './materialModule';
export * from './materialModule';

//Services import and exports
import { CacheService, } from 'ng2-cache-service';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { AngularSplitModule } from 'angular-split';

import { ConfirmComponent } from './tcmcore-module/core-components/confirmdialog/confirm.component';
import { ErrorPopupComponent } from './tcmcore-module/core-components/errorpopup/errorpopup.component';
import { AutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/autocomplete.component';
import { PagenotAutheticatedComponent } from './tcmcore-module/core-components/pagenotautheticated/pagenotautheticated.component';
import { SignInComponent } from './tcmcore-module/core-components/signin/signinpage.component';
import { SignUpComponent } from './tcmcore-module/core-components/signup/signupage.component';



import { InputComponent } from './tcmcore-module/core-components/UIComponents/input/input.component';
import { NumberComponent } from './tcmcore-module/core-components/UIComponents/input/number.component';
//import { NumberComponent2 } from './tcmcore-module/core-components/UIComponents/input/number2.component';
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
import { DashboardServiceCore } from './tcmcore-module/core-services/tcmcore.dashboard.service.core';
import { MessageService } from './tcmcore-module/core-services/tcmcore.message.service';
import { AuthService } from './tcmcore-module/core-services/tcmcore.auth.service';
//import { CoreShareService } from './tcmcore-module/core-services/tcmcore.share.service';
import { WindowRef } from './tcmcore-module/core-services/tcmcore.windowref.service';
import { UserSettingsService } from './tcmcore-module/core-services/tcmcore.usersettings.service';
import { ConfigService } from './tcmcore-module/core-services/tcmcore.config.service';
import { ModuleBaseComponent } from './tcmcore-module/core-services/tcmcore.module-base.component';
import { StaticDataService } from './tcmcore-module/core-services/tcmcore.app-static-data.service';
import { AppBootstrap } from './tcmcore-module/core-services/tcmcore.appbootstrap';
import { TCMCacheService } from './tcmcore-module/core-services/tcmcore.cache.service';
import { AppContextComponent } from './tcmcore-module/core-components/appcontext/appcontext.component';
import { NavigationService } from './tcmcore-module/core-services/tcmcore.navigation.service';
import { IDataService } from './tcmcore-module/tcmcore-objects/tcmcore.domain.interfaces';
import { LogService } from './tcmcore-module/core-services/tcmcore.log.service';
import { ContainerComponent } from './tcmcore-module/core-components/container/container.component'
import { TCMErrorStateMatcher } from './tcmcore-module/core-services/tcmcore.errorstatematcher';
import { SimpleAutoCompleteComponent } from './tcmcore-module/core-components/UIComponents/autocomplete/simple-autocomplete.component';

export * from './tcmcore-module/core-services/tcmcore.data.service';
export * from './tcmcore-module/core-services/tcmcore.auth.service';
export * from './tcmcore-module/core-services/tcmcore.dashboard.service';
export * from './tcmcore-module/core-services/tcmcore.message.service';
export * from './tcmcore-module/tcmcore-objects/tcmcore.domain.objects';
export * from './tcmcore-module/tcmcore-objects/tcmcore.domain.interfaces';
export * from './tcmcore-module/core-services/tcmcore.windowref.service';
export * from './tcmcore-module/core-services/tcmcore.usersettings.service';
export * from './tcmcore-module/core-services/tcmcore.app-static-data.service';
export * from './tcmcore-module/core-services/tcmcore.appbootstrap';
export * from './tcmcore-module/core-services/tcmcore.module-base.component';
export * from './tcmcore-module/core-services/tcmcore.cache.service';
//export * from './tcmcore-module/core-services/tcmcore.share.service';
export * from './tcmcore-module/core-components/appcontext/appcontext.component';
export * from './tcmcore-module/core-components/container/container.component';
export * from './tcmcore-module/core-services/tcmcore.dashboard.service.core';


export * from './tcmcore-module/core-components/UIComponents/autocomplete/autocomplete.component';
export * from './tcmcore-module/core-components/UIComponents/input/input.component';
export * from './tcmcore-module/core-components/UIComponents/input/number.component';
export * from './tcmcore-module/core-components/UIComponents/input/tcm-number.pipe';
export * from './tcmcore-module/core-components/UIComponents/scrollspy/tcmcore.scrollspy.directive';

export * from './tcmcore-module/core-components/UIComponents/select/select.component';
export * from './tcmcore-module/core-components/UIComponents/checkbox/check.component';
export * from './tcmcore-module/core-components/UIComponents/datepicker/datepicker.component';
export * from './tcmcore-module/core-components/UIComponents/panel-container/panel-container.component';
export * from './tcmcore-module/core-components/UIComponents/card-panel/card-container.component';
export * from './tcmcore-module/core-components/UIComponents/reponsive-div/responsive-div.component';
export * from './tcmcore-module/core-components/timepicker/timepicker.component';
export * from './tcmcore-module/core-components/pagenotautheticated/pagenotautheticated.component';
export * from './tcmcore-module/core-components/UIComponents/autocomplete/simple-autocomplete.component';




export * from './tcmcore-module/core-services/tcmcore.config.service';
export * from './tcmcore-module/core-services/tcmcore.navigation.service';
export * from './tcmcore-module/core-services/tcmcore.loader.service';
export * from './tcmcore-module/core-services/tcmcore.theme.service';
export * from './tcmcore-module/core-services/tcmcore.log.service';
export * from './tcmcore-module/core-services/tcmcore.errorstatematcher';
export * from './tcmcore-module/core-components/confirmdialog/confirm.component';
export * from './tcmcore-module/core-components/errorpopup/errorpopup.component';
export * from './tcmcore-module/core-components/Inbox/inbox.component';
export * from './tcmcore-module/core-components/Inbox/inbox.list.component';


export * from 'ng2-charts';
export * from 'angular-split';

//TO DO:
import { SignalRModule } from '@dharapvj/ngx-signalr' //'ng2-signalr';
import { SignalRConfiguration } from '@dharapvj/ngx-signalr' //'ng2-signalr';
import { Inbox } from './tcmcore-module/core-components/Inbox/inbox.component';
import { InboxList } from './tcmcore-module/core-components/Inbox/inbox.list.component';


export * from './tcmcore-module/state/tcmcore.actions';
export * from './tcmcore-module/state/tcmcore.effects';
export * from './tcmcore-module/state/tcmcore.reducer';
export * from './tcmcore-module/state/tcmcore.selectors';


/* NgRx */
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


import { AppBootstrapCore } from './tcmcore-module/core-services/tcmcore.appbootstrapCore';
import { AuthServiceCore } from './tcmcore-module/core-services/tcmcore.auth.service.core';
import { DataServiceCore } from './tcmcore-module/core-services/tcmcore.data.serviceCore';
export * from './tcmcore-module/core-services/tcmcore.appbootstrapCore';
export * from './tcmcore-module/core-services/tcmcore.auth.service.core';
export * from './tcmcore-module/core-services/tcmcore.data.serviceCore';


export * from './tcmcore-module/core-components/UIComponents/focus/tcmcore.focus.directive';

export * from './tcmcore-module/tcmcore-objects/tcmcore.utilities';
export * from './tcmcore-module/core-services/Guards/tcmcore.authguard';
export * from './tcmcore-module/core-components/voicesearch/voicesearch.component';

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.logging = true;
  return c;
}

@NgModule({
  imports: [
    RouterModule.forChild(CORE_ROUTES)
    , SignalRModule.forRoot(createConfig)
    , HttpModule
    , HttpClientModule
    , TranslateModule
    , ChartsModule
    , RouterModule
    , CommonModule
    , ReactiveFormsModule
    , FormsModule
    , TCMMaterialModule
    , ToastrModule.forRoot({ positionClass: 'toast-top-right', closeButton: true })
    , ToastContainerModule
    , AngularSplitModule
    , StoreModule.forFeature('core', CoreReducer)
    , EffectsModule.forFeature([CoreEffects])
  ],
  entryComponents: [
    SettingsComponent
    , VoiceSearch
    , ConfirmComponent
    , ErrorPopupComponent
  ],
  declarations: [
    FooterComponent
    , ContainerComponent
    , NavbarComponent
    , VerticleNavbarComponent
    , SettingsComponent
    , VoiceSearch
    , ConfirmComponent
    , AppContextComponent
    , Errorpage
    , PagenotFoundComponent
    , PagenotAutheticatedComponent
    , SignInComponent
    , SignUpComponent
    , TCMErrorStateMatcher
    , AutoHeightDirective
    , ErrorDivComponent
    , ErrorPopupComponent
    , Inbox
    , InboxList
    , AutoCompleteComponent
    , SimpleAutoCompleteComponent
    , InputComponent
    , NumberComponent
    //, NumberComponent2
    , tcmnumber
    , SelectComponent
    , CheckboxComponent
    , DateComponent
    , PanelContainerComponent
    , CardContainerComponent
    , ResponsiveDivComponent
    , FocusDirective
    , ScrollSpyDirective
    , TimePickerComponent
  ],
  providers: [
    { provide: 'ILogService', useClass: LogService }
    , { provide: 'IConfigService', useClass: ConfigService }
    , { provide: 'INavigationService', useClass: NavigationService }
    , CacheService
    , { provide: 'ICacheService', useClass: TCMCacheService }
    , LoaderService
    , { provide: 'IThemeService', useClass: ThemeService }
    , { provide: 'IWebSocketService', useClass: DashboardService }
    , { provide: 'ITCMWebSocketService', useClass: MessageService }
    , { provide: 'IWindowRef', useClass: WindowRef }
    , { provide: 'IStaticDataService', useClass: StaticDataService }
    , { provide: 'IUserSettingsService', useClass: UserSettingsService }
    , { provide: 'IAuthService', useClass: AuthService }
    , { provide: 'IDataService', useClass: DataService }
    , { provide: 'IAppBootstrap', useClass: AppBootstrap }
    , Utilities
    , tcmnumber
    , {
      provide: ErrorHandler, useClass: GlobalErrorHandler
    }
    , AuthGuard
  ],
  exports: [
    CommonModule
    , ChartsModule
    , HttpModule
    , HttpClientModule
    , ReactiveFormsModule
    , FormsModule
    , FooterComponent
    , NavbarComponent
    , VerticleNavbarComponent
    , ContainerComponent
    , AppContextComponent
    , ToastrModule
    , ToastContainerModule
    , TCMErrorStateMatcher
    , AngularSplitModule
    , ConfirmComponent
    , AutoHeightDirective
    , ErrorDivComponent
    , ErrorPopupComponent
    , Inbox
    , InboxList
    , AutoCompleteComponent
    , SimpleAutoCompleteComponent
    , InputComponent
    , NumberComponent
    //, NumberComponent2
    , tcmnumber
    , SelectComponent
    , CheckboxComponent
    , DateComponent
    , PanelContainerComponent
    , CardContainerComponent
    , ResponsiveDivComponent
    , FocusDirective
    , ScrollSpyDirective
    , TimePickerComponent
  ]
})

export class TCMCoreModule {
  static forRoot(): TCMCoreModule {
    return {
      ngModule: TCMCoreModule
    };
  }
}
