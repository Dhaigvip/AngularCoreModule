/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { DashboardData, DashboardViewType, ContextDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { IConfigService, IWebSocketService, CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SignalR, SignalRConnection, IConnectionOptions } from '@dharapvj/ngx-signalr' //'ng2-signalr';
import { Store } from '@ngrx/store';
import { DashboardMessageReceived } from '../state/tcmcore.actions'



@Injectable()
export class DashboardService implements IWebSocketService {

  //private messages: Array<DashboardData> = new Array<DashboardData>();
  //public newMessage: Subject<DashboardData> = new Subject<DashboardData>();


  constructor(
    private _signalR: SignalR
    , private store: Store<CoreState>
    , @Inject('IConfigService') private coreConfig: IConfigService) {
  }

  //private AddMessagesToCollection(message: DashboardData): void {
  //  var addToCol = true;
  //  for (var i = 0; i < this.messages.length; i++) {
  //    if (this.messages[i].QueryId === message.QueryId) {
  //      this.messages[i] = message;
  //      addToCol = false;
  //      break;
  //    }
  //  }
  //  if (addToCol)
  //    this.messages.push(message);
  //}

  //public GetMessages(): Array<any> {
  //  return this.messages;
  //}

  public Init = (hubName: string, userContext: ContextDTO, options: any): Observable<boolean> => {

    console.log("Dashboard Serive Init-->Start");

    let conf: IConnectionOptions = {
      hubName: hubName,
      qs: userContext.RegUser,
      url: this.coreConfig.Config.SignalRUrl,
      jsonp: true
    };

    let o: IConnectionOptions;
    let conx = this._signalR.createConnection(conf);

    console.log(conf);

    conx.status.subscribe((s) => console.warn("Signalr connection status-->" + s.name));

    conx.start().then((c: SignalRConnection) => {

      let listener = c.listenFor('newMessage');
      listener.subscribe((message: DashboardData) => {
        console.log('received ' + message);
        //Convert string to JSON.

        message.Data = JSON.parse(message.Data);
        this.store.dispatch(new DashboardMessageReceived(message));
        //this.AddMessagesToCollection(message);
        //this.newMessage.next(message);
      });

      // invoke a server side method, with parameters
      c.invoke('RegisterUser', userContext).then((result) => {
        //return result;
      });
    });
    return Observable.of(true);
  }
}
