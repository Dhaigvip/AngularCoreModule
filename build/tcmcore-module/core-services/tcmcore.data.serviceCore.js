/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-22    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
import { ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { LoaderService } from './tcmcore.loader.service';
import { catchError, retry } from 'rxjs/operators';
/**
 *
 */
var DataServiceCore = /** @class */ (function () {
    function DataServiceCore(http, loaderService, coreConfig, logger, _cache) {
        var _this = this;
        this.http = http;
        this.loaderService = loaderService;
        this.coreConfig = coreConfig;
        this.logger = logger;
        this._cache = _cache;
        this.AddContextToRequest = function (request) {
            request.Context = JSON.parse(sessionStorage.getItem('UserContext')).Context;
            return request;
        };
        this.PrepareRequestOptions = function () {
            var /** @type {?} */ options = {};
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            var /** @type {?} */ token = context.Token;
            token = token ? "Bearer " + token : '';
            options.headers = new HttpHeaders({
                'Authorization': token,
                'Content-Type': 'application/json'
            });
            options.observe = 'response';
            options.withCredentials = true;
            return options;
        };
        this.handleAPIError = function (error) {
            _this.loaderService.display(false);
            _this.logger.error(error.error.message);
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            return Observable.of(error.error);
        };
        this.handleError = function (error) {
            _this.loaderService.display(false);
            _this.logger.error(error.error.message);
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            var /** @type {?} */ errorResponse = {
                Data: null,
                ErrorList: [{
                        ErrorMessage: error.error,
                        ErrorCode: "0000",
                        ExtErrorPosReference: null,
                        SystemErrorMessage: error.error
                    }],
                Success: false
            };
            return Observable.of(errorResponse);
        };
        this.HandleResponse = function (response, cache) {
            _this.loaderService.display(false);
            _this.AddToCache(response, cache);
            return response;
        };
        /**
         * Get by simple parameters
         * @param domain
         * @param cache
         */
        this.Get = function (domain, params_in, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Observable.of(c);
            //this.ValidateInput("Get", domain, params_in);
            //this.ValidateInput("Get", domain, params_in);
            _this.loaderService.display(showLoadIndicator);
            _this.logger.log("Get - " + url);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            if (params_in) {
                var /** @type {?} */ params = new HttpParams();
                for (var /** @type {?} */ key in params_in) {
                    if (params_in.hasOwnProperty(key)) {
                        var /** @type {?} */ val = params_in[key];
                        params.set(key, val);
                    }
                }
                options.search = params;
            }
            return _this.http.get(url, options)
                .map(function (response) {
                return _this.HandleResponse(response, cache);
            }).pipe(retry(3), catchError(_this.handleError));
        };
        /**
         *
         * @param domain
         * @param Data
         */
        this.ExportToExcel = function (domain, request, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, request);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            request = _this.AddContextToRequest(request);
            _this.logger.logObject("ExportToExcel - " + url, request);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            options.headers.set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            //options.responseType = ResponseContentType.ArrayBuffer;
            options.responseType = 'arraybuffer';
            _this.http.post(url, request, options)
                .subscribe(function (result) {
                _this.loaderService.display(false);
                var /** @type {?} */ file = new Blob([result.body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                var /** @type {?} */ dateSuffix = new Date(Date.now()).toLocaleDateString();
                FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
            }, function (error) {
                console.log(error);
                //return this.HandleExceptions(error, url);
            });
        };
        this.Invoke = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject(methodName + url, Data);
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http[methodName](url, Data, options)
                .map(function (response) {
                return _this.HandleResponse(response.body, cache);
            }).pipe(retry(3), catchError(_this.handleAPIError));
        };
        this.InvokeInternal = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.Invoke(methodName, domain, Data, cache, showLoadIndicator);
        };
        /**
         * Use to Get Resouce with complex parameters
         * @param domain
         * @param Data
         * @param cache
         */
        this.Post = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('post', domain, Data, cache, showLoadIndicator);
        };
        this.PostAnonymous = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject("Post - " + url, Data);
            var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
            return _this.http.post(url, Data, { headers: headers, withCredentials: true })
                .map(function (response) {
                return _this.HandleResponse(response, cache);
            }).pipe(retry(3), catchError(_this.handleError));
        };
        /**
         *
         * @param domain - Name of the Domain
         * @param id - Unique Id for search
         * @param field - Search Field
         * @param cache -
         */
        this.GetById = function (domain, id, field, cache) {
            var /** @type {?} */ clientRequest = new ClientRequestDTO();
            clientRequest.MetaData.Action = "FindAsync";
            var /** @type {?} */ search_criteria = {
                CriteriaType: 'BySearch',
                Options: { BrowseFrom: 1, BrowseTo: 10, CaseSensitive: false, ShowActive: true, ShowInactive: true, SortField: field, SortOrder: 'A' },
                SearchCriteria: []
            };
            var /** @type {?} */ general_criteria = { SearchConcatenatorId: 'AND', SearchFieldId: field, SearchOperatorId: '=', SearchValue: id.toString() };
            search_criteria.SearchCriteria.push(general_criteria);
            clientRequest.Data = search_criteria;
            return _this.Post(domain, clientRequest, cache);
        };
        /**
         * Create
         * @param domain
         * @param Data
         * @param cache
         */
        this.Put = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('put', domain, Data, null, showLoadIndicator);
        };
        /**
         * Modify / Update
         * @param domain
         * @param Data
         * @param cache
         */
        this.Patch = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('patch', domain, Data, null, showLoadIndicator);
        };
        /**
         *
         * @param domain
         * @param Data
         * @param cache
         */
        this.Delete = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('delete', domain, Data, null, showLoadIndicator);
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DataServiceCore.prototype.GetFromCache = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (options && options.Cache) {
            return this._cache.Get(options.Key);
        }
        return null;
    };
    /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    DataServiceCore.prototype.AddToCache = /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        if (options && options.Cache) {
            return this._cache.Set(options.Key, data, options.Options);
        }
    };
    /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    DataServiceCore.prototype.ValidateInput = /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    function (func, domain, Data) {
        if (!domain) {
            throw 'Validation failed for ' + func + 'domain name missing';
        }
        ;
        if (Data == null) {
            throw 'Validation failed for ' + func + 'input data missing';
        }
        ;
    };
    DataServiceCore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataServiceCore.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: LoaderService, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['ICacheService',] },] },
    ]; };
    return DataServiceCore;
}());
export { DataServiceCore };
function DataServiceCore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DataServiceCore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DataServiceCore.ctorParameters;
    /** @type {?} */
    DataServiceCore.prototype.AddContextToRequest;
    /** @type {?} */
    DataServiceCore.prototype.PrepareRequestOptions;
    /** @type {?} */
    DataServiceCore.prototype.handleAPIError;
    /** @type {?} */
    DataServiceCore.prototype.handleError;
    /** @type {?} */
    DataServiceCore.prototype.HandleResponse;
    /**
     * Get by simple parameters
     * \@param domain
     * \@param cache
     * @type {?}
     */
    DataServiceCore.prototype.Get;
    /**
     *
     * \@param domain
     * \@param Data
     * @type {?}
     */
    DataServiceCore.prototype.ExportToExcel;
    /** @type {?} */
    DataServiceCore.prototype.Invoke;
    /** @type {?} */
    DataServiceCore.prototype.InvokeInternal;
    /**
     * Use to Get Resouce with complex parameters
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataServiceCore.prototype.Post;
    /** @type {?} */
    DataServiceCore.prototype.PostAnonymous;
    /**
     *
     * \@param domain - Name of the Domain
     * \@param id - Unique Id for search
     * \@param field - Search Field
     * \@param cache -
     * @type {?}
     */
    DataServiceCore.prototype.GetById;
    /**
     * Create
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataServiceCore.prototype.Put;
    /**
     * Modify / Update
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataServiceCore.prototype.Patch;
    /**
     *
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataServiceCore.prototype.Delete;
    /** @type {?} */
    DataServiceCore.prototype.http;
    /** @type {?} */
    DataServiceCore.prototype.loaderService;
    /** @type {?} */
    DataServiceCore.prototype.coreConfig;
    /** @type {?} */
    DataServiceCore.prototype.logger;
    /** @type {?} */
    DataServiceCore.prototype._cache;
}
