import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, ErrorHandler, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { RouterModule, Route, NavigationEnd, Router } from '@angular/router';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceLocator } from './app.serviceLocator';
import { TestService } from './TestForm/test.sservice';


import { AppComponent } from './app.component';
import {
  TCMMaterialModule, IAppBootstrap, TCMCoreModule, IUserSettingsService,
  SettingsComponent, AppContextComponent, RouteInfo, AutoHeightDirective, AuthServiceCore, DataServiceCore, AppBootstrapCore
} from '../library/index'
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { environment } from '../environments/environment'

import { HomeComponent } from './home/home.component';
import { TestComponent } from './TestForm/test.component';
import { Test2Component } from './TestForm/test2.component';
import { Test3 } from './TestForm/test3';
import { MenuComponent } from './charts/menu.component';
import { DashBoardChartComponent } from './DashBoardCharts/chart.component';




import { ProfileComponent } from './pages/Profile/profile.component';
import { PageHomeComponent } from './Pages/home/page-home.component';
import { BlankComponent } from './Pages/Blank/blank.component';
import { Error404Component } from './Pages/Error404/error404.component';
import { Error505Component } from './Pages/Error505/error505.component';
import { ForgotpasswordComponent } from './Pages/Forgotpassword/forgotpassword.component';
import { LockmeComponent } from './Pages/Lockme/lockme.component';
import { SignInComponent } from './Pages/SignIn/signin.component';
import { SignUPComponent } from './Pages/SignUp/signup.component';
import { FormlayoutComponent } from './Pages/FormLayout/formlayout.component';

import { Formlayout2Component } from './Pages/FormLayout/formlayout2.component';
import { Formlayout3Component } from './Pages/FormLayout/formlayout3.component';


import { Counter, Wrapper } from './UIComponents/ContentWrappertest/counter';


import { ArrowComponent } from './UIComponents/Arrow/arrow.component';
import { BadgeComponent } from './UIComponents/badge/badge.component';
import { ButtonComponent } from './UIComponents/button/button.component';
import { ColorComponent } from './UIComponents/color/color.component';
import { UIHomeComponent } from './UIComponents/home/UI-home.component';
import { LayoutComponent } from './UIComponents/layout/layout.component';
import { ListgroupComponent } from './UIComponents/listgroup/listgroup.component';
import { NavComponent } from './UIComponents/nav/nav.component';
import { TimelineComponent } from './UIComponents/timeline/timeline.component';
import { StreamlineComponent } from './UIComponents/streamline/streamline.component';
import { DashboardAComponent } from './Pages/dashboard-analysis/dashboardA.component';
import { DashboardBComponent } from './Pages/dashboard-wall/dashboardB.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

import { MAIN_ROUTES } from './app.route.config';
import { Formlayout4Component } from './Pages/FormLayout/formlayout4.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import localeSv from '@angular/common/locales/sv';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeSv, 'sv');

//Services import and exports
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


export function startupServiceFactory(startupService: IAppBootstrap): Function {
  return () => {
    return startupService.Bootstrap("TCMCoreModule").then((result => {
      return true;
    })).catch((error) => {
      return false;
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3,
    MenuComponent,
    HomeComponent,
    DashBoardChartComponent,
    PageHomeComponent,
    ProfileComponent,
    DashboardAComponent,
    DashboardBComponent,
    DashboardComponent,
    BlankComponent,
    Error404Component,
    Error505Component,
    ForgotpasswordComponent,
    LockmeComponent,
    SignInComponent,
    SignUPComponent,
    FormlayoutComponent,
    Formlayout3Component,
    Formlayout4Component,
    ArrowComponent,
    BadgeComponent,
    ButtonComponent,
    ColorComponent,
    UIHomeComponent,
    LayoutComponent,
    Formlayout2Component,
    ListgroupComponent,
    NavComponent,
    StreamlineComponent,
    TimelineComponent
    , Counter
    , Wrapper
  ],
  imports: [
    RouterModule.forRoot(MAIN_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    TCMCoreModule,
    FormsModule,
    TCMMaterialModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Core',
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    TestService,
    , { provide: 'IAuthService', useClass: AuthServiceCore }
    , { provide: 'IDataService', useClass: DataServiceCore }
    , { provide: 'IAppBootstrap', useClass: AppBootstrapCore }
    ,{ provide: LOCALE_ID, useValue: 'sv-SE' },
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      multi: true,
      deps: ['IAppBootstrap']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
