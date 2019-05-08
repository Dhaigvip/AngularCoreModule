/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { DashboardData, DashboardViewType, ContextDTO, MessageWrapper } from '../tcmcore-objects/tcmcore.domain.objects';
import { CoreState, IConfigService, IWebSocketService, ITCMWebSocketService, IAuthService } from '../tcmcore-objects/tcmcore.domain.interfaces';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SignalR, SignalRConnection, IConnectionOptions } from '@dharapvj/ngx-signalr' //'ng2-signalr';
import { TCMMessageReceived } from '../state/tcmcore.actions'

import { Store } from '@ngrx/store';


@Injectable()
export class MessageService implements ITCMWebSocketService {

  private messages: Array<MessageWrapper> = new Array<MessageWrapper>();
  public newTCMMessage: Subject<MessageWrapper> = new Subject<MessageWrapper>();
  private conx = null;
  private counter = 0;

  constructor(
    private _signalR: SignalR
    , @Inject('IConfigService') private coreConfig: IConfigService
    , @Inject('IAuthService') private auth: IAuthService
    , private store: Store<CoreState>
  ) { }

  //private AddMessagesToCollection(message: MessageWrapper): void {
  //var addToCol = true;
  //for (var i = 0; i < this.messages.length; i++) {
  //  if (this.messages[i].MessageId === message.MessageId) {
  //    this.messages[i] = message;
  //    addToCol = false;
  //    break;
  //  }
  //}
  //if (addToCol)
  //  this.messages.push(message);
  //}

  //public GetMessages(): Array<any> {
  //  return this.messages;
  //}

  public SendMessage(message: any, target: string, messageId: string): Observable<any> {
    if (!messageId) {
      messageId = (this.counter).toString();
      this.counter++;
    }

    var m = new MessageWrapper();
    m.Target = target;
    m.Context = this.auth.GetUserContext();
    m.Message = message;
    m.MessageId = messageId;

    this.conx.status.subscribe((s) => console.warn("Signalr connection status-->" + s.name));
    let r = this.conx.start().then((c: SignalRConnection) => {
      return Observable.fromPromise(c.invoke('ReceiveClientMessage', m));
    });
    return r;
  }

  public Init = (hubName: string, userContext: ContextDTO, options: any): Observable<boolean> => {

    console.log("TCM Message Serive Init-->Start");

    let conf: IConnectionOptions = {
      hubName: hubName,
      qs: userContext.RegUser,
      url: this.coreConfig.Config.SignalRUrl,
      jsonp: true
    };

    let o: IConnectionOptions;
    this.conx = this._signalR.createConnection(conf);

    console.log(conf);

    this.conx.status.subscribe((s) => console.warn("Signalr connection status-->" + s.name));

    this.conx.start().then((c: SignalRConnection) => {

      let listener = c.listenFor('newTCMMessage');
      listener.subscribe((message: any) => {
        console.log('received ' + message);
        //Convert string to JSON.
        let m = JSON.parse(message);

        this.store.dispatch(new TCMMessageReceived(m));

        //this.AddMessagesToCollection(m);
        //this.newTCMMessage.next(m);
      });

      // invoke a server side method, with parameters
      c.invoke('RegisterUser', userContext).then((result) => {
        //return result;
      });
    });

    return Observable.of(true);
  }
}
