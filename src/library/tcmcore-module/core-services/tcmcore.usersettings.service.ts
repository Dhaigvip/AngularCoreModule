/*
  Vipul Dhaigude        2017-05-16    Created
*/


/// <reference path="tcmcore.auth.service.ts" />
import { Injectable, Inject, Injector, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Http, Response, Request } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';
// import { LogService, LogLevel } from 'ng2-log-service';


import { ToastrService } from 'ngx-toastr';

import { PageSettings, UserSettings, ClientRequestDTO, ContextDTO, ClientResponseDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IUserSettingsService, ILogService, IWindowRef, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { timer } from 'rxjs/observable/timer';
declare var $: any;

@Injectable()
export class UserSettingsService implements IUserSettingsService, OnInit {

  private dirty: boolean = false;
  private UserSettings: UserSettings;
  private userId: string;
  private bucket = "XFM";
  private router: Router;

  constructor(

    @Inject('ILogService') private logger: ILogService
    , @Inject('IDataService') private dataService: IDataService
    , private zone: NgZone
    , @Inject('IWindowRef') private winRef: IWindowRef
    , @Inject('IConfigService') private coreConfig: IConfigService
  ) {
    this.winRef.nativeWindow.onbeforeunload = function (event) {
      this.SaveUserSettings();
    };
    this.zone.runOutsideAngular(() => {
      //Evevry second
      timer(10000, 10000).subscribe((val) => {
        this.zone.run(() => {          
          this.SaveUserSettings();
        });
      })
    });
  }

  ngOnInit(): void {
  }

  public UpdatePageSettings = (pageId: string, pageSettings: PageSettings) => {
    var existing = false;
    if (this.UserSettings == null)
      this.UserSettings = { Key: this.userId, Bucket: this.bucket, Value: [] };

    if (this.UserSettings.Value == null) this.UserSettings.Value = [];

    for (var i = 0; i < this.UserSettings.Value.length; i++) {
      if (this.UserSettings.Value[i].PageId == pageId) {
        this.dirty = existing = true;
        this.UserSettings.Value[i].PageData = pageSettings.PageData;
        break;
      }
    }
    if (!existing) {
      this.dirty = !existing;
      this.UserSettings.Value.push(pageSettings);
    }
  }

  public GetUserSettingsForPage = (pageId: string): PageSettings => {
    var value = null;
    if (this.UserSettings != null && this.UserSettings.Value != null) {

      for (var i = 0; i < this.UserSettings.Value.length; i++) {
        if (this.UserSettings.Value[i].PageId == pageId) {
          return this.UserSettings.Value[i];
        }
      }
    }
  }


  private GetByObject = (userSettings: UserSettings) => {
    var request = new ClientRequestDTO();
    request.MetaData.Action = "FindAsync";
    request.Data = userSettings;
    return this.dataService.Post("UserSettings", request, null, false);
  }


  public FetchUserSettings = (userSettings: UserSettings): Observable<any> => {
    console.log("Fetching user settings");
    this.userId = userSettings.Key;
    this.bucket = userSettings.Bucket;
    return this.GetByObject(userSettings).map((result: ClientResponseDTO) => {

      if (result.Success) {
        console.log("Fetching user settings--->Done");
        var setting = result.Data;
        this.UserSettings = setting;
        this.UserSettings.Value = JSON.parse(setting.Value);

        let globalSettings = this.GetUserSettingsForPage("Global");
        if (!globalSettings) {
          globalSettings = new PageSettings();
          globalSettings.PageId = 'Global';
          globalSettings.PageData.push({ ControlId: 'Lang', ControlData: 'sv-SE' });
          globalSettings.PageData.push({ ControlId: 'Theme', ControlData: 'primary' });
          this.UpdatePageSettings('Global', globalSettings);
        }
        return this.UserSettings;
      }
      console.log("Fetching user settings--->Error");
      console.log(result.ErrorList)
      return null;
    });
  }

  private Update = (obj: string) => {
    var request = new ClientRequestDTO();
    request.MetaData.Action = "UpdateAsync";
    request.Data = obj;
    return this.dataService.Post("UserSettings", request, null, false);
  }

  public SaveUserSettings = () => {
    if (!this.coreConfig.Config.userPersistence) return;

    var self = this;
    if (self.dirty && self.UserSettings != null) {
      try {
        console.log('SaveUserSettings()');
        var tempData = $.extend({}, self.UserSettings);
        tempData.Value = JSON.stringify(tempData.Value);
        self.dirty = false;
        this.Update(JSON.stringify(tempData)).subscribe((result) => console.log(result));
      }
      catch (ex) {
        var x = 0;
      }
    }
  }
}
