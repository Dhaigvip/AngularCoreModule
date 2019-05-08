import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IConfigService, IConfiguration } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class ConfigService implements IConfigService {
    private http;
    _filepath: string;
    private _config;
    constructor(http: Http);
    Init(): Observable<IConfiguration>;
    readonly Config: IConfiguration;
    private ReadConfigFile;
}
