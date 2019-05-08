import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CacheOption, ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { LoaderService } from './tcmcore.loader.service';
import { IDataService, ICacheService, IConfigService, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';
/**
 *
 */
export declare class DataService implements IDataService {
    private http;
    private loaderService;
    private coreConfig;
    private logger;
    private _cache;
    constructor(http: Http, loaderService: LoaderService, coreConfig: IConfigService, logger: ILogService, _cache: ICacheService);
    private AddContextToRequest;
    private PrepareRequestOptions;
    private ParseJson;
    private HandleExceptions;
    private GetFromCache(options);
    private AddToCache(data, options);
    /**
     * Get by simple parameters
     * @param domain
     * @param cache
     */
    Get: (domain: string, params_in: any, cache: CacheOption, showLoadIndicator?: boolean) => Observable<any>;
    /**
     *
     * @param domain
     * @param Data
     */
    ExportToExcel: (domain: string, request: ClientRequestDTO, showLoadIndicator?: boolean) => void;
    Invoke: (methodName: string, domain: string, Data: any, cache: CacheOption, showLoadIndicator?: boolean) => any;
    /**
     * Use to Get Resouce with complex parameters
     * @param domain
     * @param Data
     * @param cache
     */
    Post: (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator?: boolean) => Observable<any>;
    PostAnonymous: (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator?: boolean) => any;
    /**
     *
     * @param domain - Name of the Domain
     * @param id - Unique Id for search
     * @param field - Search Field
     * @param cache -
     */
    GetById: (domain: string, id: number, field: string, cache: CacheOption) => Observable<any>;
    /**
     * Create
     * @param domain
     * @param Data
     * @param cache
     */
    Put: (domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean) => Observable<any>;
    /**
     * Modify / Update
     * @param domain
     * @param Data
     * @param cache
     */
    Patch: (domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean) => Observable<any>;
    /**
     *
     * @param domain
     * @param Data
     * @param cache
     */
    Delete: (domain: string, Data: ClientRequestDTO, showLoadIndicator?: boolean) => Observable<any>;
    private ValidateInput(func, domain, Data);
}
