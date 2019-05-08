/*
  Vipul Dhaigude        2019-03-22    Created
*/

import { Injectable, Inject, ViewContainerRef, Injector } from '@angular/core';
import {
  Http, Headers, RequestOptionsArgs,
  ResponseContentType, Response,
  RequestOptions, URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

import * as FileSaver from 'file-saver';
import { CacheOption, ClientRequestDTO, ClientResponseDTO } from '../tcmcore-objects/tcmcore.domain.objects';

import { LoaderService } from './tcmcore.loader.service';

import { IDataService, ICacheService, IConfigService, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { catchError, retry } from 'rxjs/operators';

//type MyFunc = (url: string, body?: any, options?: RequestOptionsArgs) => Observable<Response>;
/**
 * 
 */
@Injectable()
export class DataServiceCore implements IDataService {
  constructor(
    private http: HttpClient
    , private loaderService: LoaderService
    , @Inject('IConfigService') private coreConfig: IConfigService
    , @Inject('ILogService') private logger: ILogService
    , @Inject('ICacheService') private _cache: ICacheService
  ) { }


  private AddContextToRequest = (request: ClientRequestDTO): ClientRequestDTO => {
    request.Context = JSON.parse(sessionStorage.getItem('UserContext')).Context;
    return request;
  }


  //options: {
  //  body?: any;
  //  headers?: HttpHeaders | {
  //    [header: string]: string | string[];
  //  };
  //  observe?: 'body';
  //  params?: HttpParams | {
  //    [param: string]: string | string[];
  //  };
  //  reportProgress?: boolean;
  //  responseType: 'arraybuffer';
  //  withCredentials?: boolean;
  //}


  private PrepareRequestOptions = () => {
    let options: any = {};
    var context = JSON.parse(sessionStorage.getItem('UserContext'))
    let token = context.Token;
    token = token ? `Bearer ${token}` : '';
    options.headers = new HttpHeaders(
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      });
    options.observe = 'response';
    options.withCredentials = true;
    return options
  }


  private handleAPIError = (error: HttpErrorResponse) => {
    this.loaderService.display(false);
    this.logger.error(error.error.message);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

    }
    return Observable.of(error.error);
  };

  private handleError = (error: HttpErrorResponse) => {
    this.loaderService.display(false);
    this.logger.error(error.error.message);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

    }
    var errorResponse = {
      Data: null,
      ErrorList: [{
        ErrorMessage: error.error,
        ErrorCode: "0000",
        ExtErrorPosReference: null,
        SystemErrorMessage: error.error
      }],
      Success: false
    }
    return Observable.of(errorResponse);
  };
  private HandleResponse = (response, cache) => {
    this.loaderService.display(false);
    this.AddToCache(response, cache);
    return response;
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

    //this.ValidateInput("Get", domain, params_in);
    this.loaderService.display(showLoadIndicator);

    this.logger.log("Get - " + url);
    var url = this.coreConfig.Config.WebApiUrl + domain;
    let options = this.PrepareRequestOptions();
    if (params_in) {

      let params: HttpParams = new HttpParams();
      for (var key in params_in) {
        if (params_in.hasOwnProperty(key)) {
          let val = params_in[key];
          params.set(key, val);
        }
      }
      options.search = params;
    }

    return this.http.get(url, options)
      .map((response) => {
        return this.HandleResponse(response, cache);
      }).pipe(
        retry(3),
        catchError(this.handleError)
      );
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

    let options = this.PrepareRequestOptions();
    options.headers.set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    //options.responseType = ResponseContentType.ArrayBuffer;
    options.responseType = 'arraybuffer';

    this.http.post(url, request, options)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        var file = new Blob([result.body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
        var dateSuffix = new Date(Date.now()).toLocaleDateString();
        FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
      }, (error) => {
        console.log(error);
        //return this.HandleExceptions(error, url);
      });

  }

  //Handles error dofferenctly
  public Invoke = (methodName: string, domain: string, Data: any, cache: CacheOption, showLoadIndicator = true) => {
    var c = this.GetFromCache(cache);
    if (c) return Observable.of(c);

    this.ValidateInput("Get", domain, Data);
    this.loaderService.display(showLoadIndicator);

    var url = this.coreConfig.Config.WebApiUrl + domain;

    this.logger.logObject(methodName + url, Data);

    Data = this.AddContextToRequest(Data);
    let options = this.PrepareRequestOptions();

    return this.http[methodName](url, Data, options)
      .map((response: HttpResponse<object>) => {
        return this.HandleResponse(response.body, cache);
      }).pipe(
        retry(3),
        catchError(this.handleAPIError)
      );
  }

  private InvokeInternal = (methodName: string, domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator = true) => {
    return this.Invoke(methodName, domain, Data, cache, showLoadIndicator);
  }


  /**
   * Use to Get Resouce with complex parameters
   * @param domain
   * @param Data
   * @param cache
   */
  Post = (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator = true) => {

    return this.InvokeInternal('post', domain, Data, cache, showLoadIndicator);
  }

  PostAnonymous = (domain: string, Data: ClientRequestDTO, cache: CacheOption, showLoadIndicator = true) => {

    var c = this.GetFromCache(cache);
    if (c) return Observable.of(c);

    this.ValidateInput("Get", domain, Data);
    this.loaderService.display(showLoadIndicator);

    var url = this.coreConfig.Config.WebApiUrl + domain;

    this.logger.logObject("Post - " + url, Data);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    return this.http.post(url, Data, { headers: headers, withCredentials: true })
      .map((response: HttpResponse<object>) => {
        return this.HandleResponse(response, cache);
      }).pipe
      (
        retry(3),
        catchError(this.handleError)
      );
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
    return this.InvokeInternal('put', domain, Data, null, showLoadIndicator);
  }

  /**
   * Modify / Update
   * @param domain
   * @param Data
   * @param cache
   */
  Patch = (domain: string, Data: ClientRequestDTO, showLoadIndicator = true) => {
    return this.InvokeInternal('patch', domain, Data, null, showLoadIndicator);
  }

  /**
   * 
   * @param domain
   * @param Data
   * @param cache
   */
  Delete = (domain: string, Data: ClientRequestDTO, showLoadIndicator = true) => {
    return this.InvokeInternal('delete', domain, Data, null, showLoadIndicator);
  }

  private ValidateInput(func: string, domain: string, Data: ClientRequestDTO) {
    if (!domain) { throw 'Validation failed for ' + func + 'domain name missing' };
    if (Data == null) { throw 'Validation failed for ' + func + 'input data missing' };
  }
}
