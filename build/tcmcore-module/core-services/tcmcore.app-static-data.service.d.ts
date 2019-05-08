import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CacheData, CacheObject } from '../tcmcore-objects/tcmcore.domain.objects';
import { IStaticDataService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class StaticDataService implements IStaticDataService {
    private locale;
    private http;
    private _cache;
    _filepath: string;
    constructor(locale: any, http: Http);
    GetStaticDataItems: (key: string) => CacheObject[];
    GetStaticDataList: (keys: string[]) => CacheData[];
    GetStaticData: (key: String) => CacheData;
    LoadStaticData: () => Observable<any>;
}
