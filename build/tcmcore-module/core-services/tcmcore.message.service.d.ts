import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ContextDTO, MessageWrapper } from '../tcmcore-objects/tcmcore.domain.objects';
import { CoreState, IConfigService, ITCMWebSocketService, IAuthService } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { SignalR } from '@dharapvj/ngx-signalr';
import { Store } from '@ngrx/store';
export declare class MessageService implements ITCMWebSocketService {
    private _signalR;
    private coreConfig;
    private auth;
    private store;
    private messages;
    newTCMMessage: Subject<MessageWrapper>;
    private conx;
    private counter;
    constructor(_signalR: SignalR, coreConfig: IConfigService, auth: IAuthService, store: Store<CoreState>);
    SendMessage(message: any, target: string, messageId: string): Observable<any>;
    Init: (hubName: string, userContext: ContextDTO, options: any) => Observable<boolean>;
}
