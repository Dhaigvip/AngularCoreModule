/*
  Vipul Dhaigude        2017-01-03    Created
*/

import { Injectable, Inject, ViewContainerRef, Injector } from '@angular/core';
import {
  Http, RequestOptions
} from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { ILogService, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';


@Injectable()
export class LogService implements ILogService {
  constructor(private http: Http,
    @Inject('IConfigService') private configService: IConfigService) { }

  logObject = (message: string, obj: any) => {
    if (!obj) console.error(message + " Object is NULL");
    var objstr = JSON.stringify(obj);
    console.log(message, objstr);
  }
  log = (message: string) => {
    console.log(message);
  };

  warn = (message: string) => {
    console.warn(message);
  }
  info = (message: string) => {
    console.info(message);
  }
  error = (message: string) => {
    console.error(message);
    if (this.configService.Config.ServerLog)
      this.logServer(message, 'error');
  }
  debug = (message: string) => { console.debug(message) }

  logServer = (message: string, type: string) => {
   
    const msg = { user: "", url: "", message: message, type: type };
    var url = this.configService.Config.WebApiUrl + 'Jslog';
    return this.http.post(url, msg).subscribe();
  }
  
}  
