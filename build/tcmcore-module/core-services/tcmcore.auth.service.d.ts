import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ContextDTO, ClientContext, UserCredentials } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IAuthService, IWindowRef } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class AuthService implements IAuthService {
    private window;
    private dataService;
    UserContext: ClientContext;
    UserToken: string;
    isAutheticated: boolean;
    constructor(window: IWindowRef, dataService: IDataService);
    IsAuthenticated: () => boolean;
    GetUserContext(): ContextDTO;
    AutheticateExternal: (credentials: UserCredentials) => Observable<ClientContext>;
    PreAutheticate: () => Observable<string>;
    GetExpiryDate: () => Date;
    Autheticate: () => Observable<ClientContext>;
    IsInRole: (role: string) => boolean;
    IsAuthorisedForUpdate: (roles: string[]) => boolean;
    IsAuthorisedForCreate: (roles: string[]) => boolean;
    DecodeUserToken: () => any;
}
