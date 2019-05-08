/*
  Vipul Dhaigude        2019-03-01    Created
*/


import { Injectable, InjectionToken, LOCALE_ID, Inject } from '@angular/core';
import { Cookie } from 'ng2-cookies';

import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from "ng2-translate";

import {
  IAppBootstrap, IAuthService, IStaticDataService,
  IThemeService, IWebSocketService, IConfigService, IUserSettingsService, ITCMWebSocketService, IConfiguration
} from '../tcmcore-objects/tcmcore.domain.interfaces';
import { ClientContext } from '../tcmcore-objects/tcmcore.domain.objects';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Router } from '@angular/router';

@Injectable()
export class AppBootstrapCore implements IAppBootstrap {

  private ApplicationId = '';

  constructor(
    @Inject('IAuthService') private auth: IAuthService
    , @Inject('IStaticDataService') private staticData: IStaticDataService
    , @Inject('IThemeService') private themeService: IThemeService
    , @Inject('IWebSocketService') private dashboardService: IWebSocketService
    , @Inject('IConfigService') private configService: IConfigService
    , @Inject('IUserSettingsService') private userSettings: IUserSettingsService
    , @Inject(LOCALE_ID) private _locale: string
    , @Inject('ITCMWebSocketService') private tcmMessageService: ITCMWebSocketService
    , private translate: TranslateService
    //, private router: Router
  ) {

    this.auth.userAutheticated.subscribe(result => {
      if (result) {
        this.AfterAuthetication();
      }
    });
  }

  public Bootstrap = (applicationId: string) => {
    //return null;
    return new Promise((resolve, reject) => {
      this.ApplicationId = applicationId;
      console.log('Application Initialization started');

      console.log('Calling config service ------>');
      this.configService.Init().subscribe((config: IConfiguration) => {
        console.log('Configurations read --->');
        console.log(config);

        console.log('setting language translation culture to --->' + this._locale);
        this.translate.setDefaultLang(this._locale);

        if (config.staticData) {
          console.log('Static Data read --->');
          this.staticData.LoadStaticData().subscribe();
        }
        this.themeService.init();
       
        if (config.Authetication && config.Authetication != 'windows') {
          return resolve(true);
        }
        else {
          this.auth.Autheticate().subscribe((result) => {
            return resolve(true);
          });        
        }        
      }, (error) => {
        console.log(error);
        reject(error);
      });
    })
  }

  public AfterAuthetication() {

    let config = this.configService.Config;
    let context = this.auth.GetUserContext();

    if (config.dashBoard) {
      console.log('Dashboard read --->');
      this.dashboardService.Init('dashboard', context, null);
    }
    if (config.tcmMessages) {
      console.log('TCMMessage read --->');
      this.tcmMessageService.Init('TCMMessageHub', context, null);
    }

    if (config.userPersistence) {
      console.log('User persistence read --->');
      let token = this.auth.DecodeUserToken();
      let searchCriteria = { Value: null, Bucket: this.ApplicationId, Key: token.unique_name };
      this.userSettings.FetchUserSettings(searchCriteria).subscribe();
    }
  }
}
