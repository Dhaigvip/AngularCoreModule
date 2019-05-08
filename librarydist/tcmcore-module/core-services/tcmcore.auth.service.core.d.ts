import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ContextDTO, ClientContext, UserCredentials } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IAuthService, IWindowRef } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class AuthServiceCore implements IAuthService {
    private window;
    private dataService;
    decodedToken: any;
    userAutheticated: EventEmitter<boolean>;
    constructor(window: IWindowRef, dataService: IDataService);
    IsAuthenticated: () => boolean;
    GetUserContext: () => ContextDTO;
    GetExpiryDate: () => Date;
    PreAutheticate: () => Observable<string>;
    AutheticateInternal: (path: string) => Observable<ClientContext>;
    Autheticate: () => Observable<ClientContext>;
    AutheticateExternal: (credentials: UserCredentials) => Observable<ClientContext>;
    IsInRole: (role: string) => boolean;
    IsAuthorisedForUpdate: (roles: string[]) => boolean;
    IsAuthorisedForCreate: (roles: string[]) => boolean;
    DecodeUserToken: () => any;
    private DecodeUserTokenInterval;
}
