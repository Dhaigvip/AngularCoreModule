import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ContextDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { IConfigService, IWebSocketService, CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { Store } from '@ngrx/store';
export declare class DashboardServiceCore implements IWebSocketService {
    private store;
    private coreConfig;
    private _hubConnection;
    constructor(store: Store<CoreState>, coreConfig: IConfigService);
    private start;
    Init: (hubName: string, userContext: ContextDTO, options: any) => Observable<boolean>;
}
