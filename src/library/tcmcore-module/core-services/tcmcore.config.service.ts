/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { IConfigService, IConfiguration } from '../tcmcore-objects/tcmcore.domain.interfaces';

@Injectable()
export class ConfigService implements IConfigService {

  public _filepath: string = './assets/config/config.json';
  private _config: IConfiguration;

  constructor(private http: Http) {

  }
  public Init() {
    return this.ReadConfigFile();
  }
  public get Config() {
    return this._config;
  }

  private ReadConfigFile = () => {
    return this.http.get(this._filepath).map(
      (response) => {
        var result = response.json() as IConfiguration;
        this._config = result;
        return result;
      });
  }
}
