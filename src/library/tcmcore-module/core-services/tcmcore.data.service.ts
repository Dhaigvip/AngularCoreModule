/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { Injectable, Inject, ViewContainerRef, Injector } from '@angular/core';
import {
  Http, Headers, RequestOptionsArgs,
  ResponseContentType, Response,
  RequestOptions, URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import * as FileSaver from 'file-saver';
import { CacheOption, ClientRequestDTO, ClientResponseDTO } from '../tcmcore-objects/tcmcore.domain.objects';

import { LoaderService } from './tcmcore.loader.service';

import { IDataService, ICacheService, IConfigService, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';

//type MyFunc = (url: string, body?: any, options?: RequestOptionsArgs) => Observable<Response>;
/**
 * 
 */
@Injectable()
export class DataService implements IDataService {
  constructor(
    private http: Http
    , private loaderService: LoaderService
    , @Inject('IConfigService') private coreConfig: IConfigService
    , @Inject('ILogService') private logger: ILogService
    , @Inject('ICacheService') private _cache: ICacheService
  ) { }


  private AddContextToRequest = (request: ClientRequestDTO): ClientRequestDTO => {
    request.Context = JSON.parse(sessionStorage.getItem('UserContext'));
    return request;
  }

  private PrepareRequestOptions = (): RequestOptions => {
    let headers = new Headers(
      {
        'AuthToken': sessionStorage.getItem('UserToken'),
        'Content-Type': 'application/json'
      });
    let options = new RequestOptions(
      {
        headers: headers,
        withCredentials: true

      });

    return options
  }

  private ParseJson = (response: Response): any => {
    let token = response.headers.get("AuthToken");
    if (token) sessionStorage.setItem('UserToken', JSON.stringify(token));
    this.loaderService.display(false);
    var json = response.json();
    return json;
  }



  private HandleExceptions = (error: any, origin: string) => {
    this.loaderService.display(false);
    var strError = error.json();
    //this.toastrService.error(strError.ExceptionMessage, "Fatal Error");
    this.logger.error(strError.ExceptionMessage);
    var tcmResponse = {
      Data: null,
      ErrorList: [{
        ErrorMessage: strError.ExceptionMessage,
        ErrorCode: "0000",
        ExtErrorPosReference: null,
        SystemErrorMessage: strError.StackTrace
      }],
      Success: false
    }
    return Observable.of(tcmResponse);
  }

  private GetFromCache(options: CacheOption): any {
    if (options && options.Cache) {
      return this._cache.Get(options.Key);
    }
    return null;
  }

  private AddToCache(data: any, options: CacheOption) {
    if (options && options.Cache) {
      return this._cache.Set(options.Key, data, options.Options);
    }
  }


  /**
   * Get by simple parameters
   * @param domain
   * @param cache
   */
  Get = (domain: string, params_in: any, cache: CacheOption, showLoadIndicator = true) => {

    var c = this.GetFromCache(cache);
    if (c) return Observable.of(c);

    this.ValidateInput("Get", domain, params_in);
    this.loaderService.display(showLoadIndicator);

    this.logger.log("Get - " + url);
    var url = this.coreConfig.Config.WebApiUrl + domain;

    let params: URLSearchParams = new URLSearchParams();
    for (var key in params_in) {
      if (params_in.hasOwnProperty(key)) {
        let val = params_in[key];
        params.set(key, val);
      }
    }

    let headers = new Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken') });
    let options = new RequestOptions({ headers: headers, withCredentials: true, search: params });

    return this.http.get(url)
      .map((response) => {
        var resObj = this.ParseJson(response);
        this.AddToCache(resObj, cache);
        return resObj;
      }).catch((error) => {
        //Handle Error
        return this.HandleExceptions(error, url);
      });

  }
  /**
   * 
   * @param domain
   * @param Data
   */
  ExportToExcel = (domain: string, request: ClientRequestDTO, showLoadIndicator = true) => {
    this.ValidateInput("Get", domain, request);

    this.loaderService.display(showLoadIndicator);

    var url = this.coreConfig.Config.WebApiUrl + domain;
    request = this.AddContextToRequest(request);

    this.logger.logObject("ExportToExcel - " + url, request);

    let headers = new Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken'), 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    let options = new RequestOptions({ headers: headers, withCredentials: true, responseType: ResponseContentType.ArrayBuffer });
    //'arraybuffer'

    this.http.post(url, request, options)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        let token = result.headers.get("AuthToken");
        if (token) sessionStorage.setItem('UserToken', token);
        var file = new Blob([(<any>result)._body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
        var dateSuffix = new Date(Date.now()).toLocaleDateString();
        FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
      }, (error) => {
        return this.HandleExceptions(error, url);
      });

  }

  public Invoke = (methodName: string, domain: string, Data: any, cache: CacheOption, showLoadIndicator = true) => {
    return null;

  }

  /**
   * Use to Get Resouce with complex parameters
   * @param domain
   * @param Data
   * @param cache
   */
  Post = (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator = true) => {

    var c = this.GetFromCache(cache);
    if (c) return Observable.of(c);

    this.ValidateInput("Get", domain, Data);
    this.loaderService.display(showLoadIndicator);

    var url = this.coreConfig.Config.WebApiUrl + domain;

    this.logger.logObject("Post - " + url, Data);

    Data = this.AddContextToRequest(Data);
    let options = this.PrepareRequestOptions();

    return this.http.post(url, Data, options)
      .map((response: Response) => {
        var resObj = this.ParseJson(response);
        this.AddToCache(resObj, cache);
        return resObj;
      }).catch((error) => {
        return this.HandleExceptions(error, url);
      });
  }

  PostAnonymous = (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator = true) => {
    return null;
  }



  /**
   * 
   * @param domain - Name of the Domain
   * @param id - Unique Id for search
   * @param field - Search Field
   * @param cache - 
   */
  GetById = (domain: string, id: number, field: string, cache: CacheOption) => {
    var clientRequest = new ClientRequestDTO();
    clientRequest.MetaData.Action = "FindAsync";
    var search_criteria = {
      CriteriaType: 'BySearch',
      Options: { BrowseFrom: 1, BrowseTo: 10, CaseSensitive: false, ShowActive: true, ShowInactive: true, SortField: field, SortOrder: 'A' },
      SearchCriteria: []
    }
    var general_criteria = { SearchConcatenatorId: 'AND', SearchFieldId: field, SearchOperatorId: '=', SearchValue: id.toString() };
    search_criteria.SearchCriteria.push(general_criteria);
    clientRequest.Data = search_criteria;
    return this.Post(domain, clientRequest, cache);
  }


  /**
   * Create
   * @param domain
   * @param Data
   * @param cache
   */
  Put = (domain: string, Data: ClientRequestDTO, showLoadIndicator = true) => {
    this.ValidateInput("Get", domain, Data);
    this.loaderService.display(showLoadIndicator);

    var url = this.coreConfig.Config.WebApiUrl + domain;

    Data = this.AddContextToRequest(Data);
    let options = this.PrepareRequestOptions();

    this.logger.logObject("Put - " + url, Data);

    return this.http.put(url, Data, options)
      .map((response: Response) => {
        var resObj = this.ParseJson(response);
        return resObj;
      }).catch((error) => {
        return this.HandleExceptions(error, url);
      });
  }

  /**
   * Modify / Update
   * @param domain
   * @param Data
   * @param cache
   */
  Patch = (domain: string, Data: ClientRequestDTO, showLoadIndicator = true) => {
    this.ValidateInput("Get", domain, Data);

    this.loaderService.display(showLoadIndicator);
    var url = this.coreConfig.Config.WebApiUrl + domain;


    Data = this.AddContextToRequest(Data);
    let options = this.PrepareRequestOptions();
    this.logger.logObject("Patch - " + url, Data);

    return this.http.patch(url, Data, options)
      .map((response: Response) => {
        var resObj = this.ParseJson(response);
        return resObj;
      }).catch((error) => {
        return this.HandleExceptions(error, url);
      });
  }

  /**
   * 
   * @param domain
   * @param Data
   * @param cache
   */
  Delete = (domain: string, Data: ClientRequestDTO, showLoadIndicator = true) => {
    this.ValidateInput("Get", domain, Data);

    this.loaderService.display(showLoadIndicator);
    // this.logger.log("Delete - " + url, Data, LogLevel.Info);
    var url = this.coreConfig.Config.WebApiUrl + domain;

    Data = this.AddContextToRequest(Data);
    let options = this.PrepareRequestOptions();
    return this.http.delete(url, options)
      .map((response: Response) => {
        var resObj = this.ParseJson(response);
        return resObj;
      }).catch((error) => {
        return this.HandleExceptions(error, url);
      });
  }

  private ValidateInput(func: string, domain: string, Data: ClientRequestDTO) {
    if (!domain) { throw 'Validation failed for ' + func + 'domain name missing' };
    if (Data == null) { throw 'Validation failed for ' + func + 'input data missing' };
  }
}
