import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ContextDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { IConfigService, IWebSocketService, CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { SignalR } from '@dharapvj/ngx-signalr';
import { Store } from '@ngrx/store';
export declare class DashboardService implements IWebSocketService {
    private _signalR;
    private store;
    private coreConfig;
    constructor(_signalR: SignalR, store: Store<CoreState>, coreConfig: IConfigService);
    Init: (hubName: string, userContext: ContextDTO, options: any) => Observable<boolean>;
}
