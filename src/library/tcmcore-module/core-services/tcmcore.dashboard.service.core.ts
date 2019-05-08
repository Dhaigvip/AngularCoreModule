/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { DashboardData, DashboardViewType, ContextDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { IConfigService, IWebSocketService, CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';

import { Store } from '@ngrx/store';
import * as signalR from "@aspnet/signalr";
import { DashboardMessageReceived } from '../state/tcmcore.actions'


@Injectable()
export class DashboardServiceCore implements IWebSocketService {

  private _hubConnection: signalR.HubConnection | undefined;

  constructor(
    private store: Store<CoreState>
    , @Inject('IConfigService') private coreConfig: IConfigService) { }

  private start = (userContext: ContextDTO) => {
    this._hubConnection.start().then(c => {
      var x = 0;
      this._hubConnection.invoke('RegisterUser', userContext).then((result) => {
        console.log(result);
      })

    }).catch(
      err => console.error(err)
    );
  }

  public Init = (hubName: string, userContext: ContextDTO, options: any): Observable<boolean> => {

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.coreConfig.Config.SignalRUrl + `/${hubName}`)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.start(userContext);

    this._hubConnection.onclose(() => {
      setTimeout(() => this.start(userContext), 5000);      
    });

    this._hubConnection.on("newMessage", (message: DashboardData) => {
      console.log('received dashboard message' + message);
      //Convert string to JSON.
      message.Data = JSON.parse(message.Data);
      this.store.dispatch(new DashboardMessageReceived(message));
    });
    return Observable.of(true);
  }
}
