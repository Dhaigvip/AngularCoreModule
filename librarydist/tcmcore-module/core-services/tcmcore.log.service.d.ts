import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ILogService, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class LogService implements ILogService {
    private http;
    private configService;
    constructor(http: Http, configService: IConfigService);
    logObject: (message: string, obj: any) => void;
    log: (message: string) => void;
    warn: (message: string) => void;
    info: (message: string) => void;
    error: (message: string) => void;
    debug: (message: string) => void;
    logServer: (message: string, type: string) => Subscription;
}
