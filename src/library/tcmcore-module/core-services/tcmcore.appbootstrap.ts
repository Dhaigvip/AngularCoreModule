/*
  Vipul Dhaigude        2017-03-22    Created
*/


import { Injectable, InjectionToken, LOCALE_ID, Inject } from '@angular/core';
import { Cookie } from 'ng2-cookies';

import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from "ng2-translate";

import {
  IAppBootstrap, IAuthService, IStaticDataService,
  IThemeService, IWebSocketService, IConfigService, IUserSettingsService, ITCMWebSocketService
} from '../tcmcore-objects/tcmcore.domain.interfaces';
import { ClientContext } from '../tcmcore-objects/tcmcore.domain.objects';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class AppBootstrap implements IAppBootstrap {

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
  ) { }

  public Bootstrap = (applicationId: string) => {
    return new Promise((resolve, reject) => {
      this.ApplicationId = applicationId;
      console.log('Application Initialization started');

      console.log('Calling config service ------>');
      this.configService.Init().subscribe((config) => {
        console.log('Configurations read --->');
        console.log(config);

        console.log('setting language translation culture to --->' + this._locale);
        this.translate.setDefaultLang(this._locale);
        console.log('Getting user token');
        this.auth.Autheticate().subscribe((data: ClientContext) => {
          var subscribersArray = [];

          if (config.userPersistence) {
            console.log('User persistence read --->');
            let token = this.auth.DecodeUserToken();
            let searchCriteria = { Value: null, Bucket: this.ApplicationId, Key: token.unique_name };
            subscribersArray.push(this.userSettings.FetchUserSettings(searchCriteria));
          }
          if (config.staticData) {
            console.log('Static Data read --->');
            subscribersArray.push(this.staticData.LoadStaticData());
          }
          if (config.dashBoard) {
            console.log('Dashboard read --->');
            subscribersArray.push(this.dashboardService.Init('DashboardQueryHub', data.Context, null));
          }
          if (config.tcmMessages) {
            console.log('TCMMessage read --->');
            subscribersArray.push(this.tcmMessageService.Init('TCMMessageHub', data.Context, null));
          }

          forkJoin(subscribersArray).subscribe(result => {
            console.log('Fork calls completed --->');
            this.themeService.init();
            return resolve(true);
          });        

        }, (error) => {
          console.log(error);
          reject(error);
        })
      }, (error) => {
        console.log(error);
        reject(error);
      });


    })
  }
}
