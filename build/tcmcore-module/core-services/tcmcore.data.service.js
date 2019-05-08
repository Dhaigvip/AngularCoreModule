/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
import { ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects';
import { LoaderService } from './tcmcore.loader.service';
/**
 *
 */
var DataService = /** @class */ (function () {
    function DataService(http, loaderService, coreConfig, logger, _cache) {
        var _this = this;
        this.http = http;
        this.loaderService = loaderService;
        this.coreConfig = coreConfig;
        this.logger = logger;
        this._cache = _cache;
        this.AddContextToRequest = function (request) {
            request.Context = JSON.parse(sessionStorage.getItem('UserContext'));
            return request;
        };
        this.PrepareRequestOptions = function () {
            var /** @type {?} */ headers = new Headers({
                'AuthToken': sessionStorage.getItem('UserToken'),
                'Content-Type': 'application/json'
            });
            var /** @type {?} */ options = new RequestOptions({
                headers: headers,
                withCredentials: true
            });
            return options;
        };
        this.ParseJson = function (response) {
            var /** @type {?} */ token = response.headers.get("AuthToken");
            if (token)
                sessionStorage.setItem('UserToken', JSON.stringify(token));
            _this.loaderService.display(false);
            var /** @type {?} */ json = response.json();
            return json;
        };
        this.HandleExceptions = function (error, origin) {
            _this.loaderService.display(false);
            var /** @type {?} */ strError = error.json();
            //this.toastrService.error(strError.ExceptionMessage, "Fatal Error");
            //this.toastrService.error(strError.ExceptionMessage, "Fatal Error");
            _this.logger.error(strError.ExceptionMessage);
            var /** @type {?} */ tcmResponse = {
                Data: null,
                ErrorList: [{
                        ErrorMessage: strError.ExceptionMessage,
                        ErrorCode: "0000",
                        ExtErrorPosReference: null,
                        SystemErrorMessage: strError.StackTrace
                    }],
                Success: false
            };
            return Observable.of(tcmResponse);
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
            _this.ValidateInput("Get", domain, params_in);
            _this.loaderService.display(showLoadIndicator);
            _this.logger.log("Get - " + url);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            var /** @type {?} */ params = new URLSearchParams();
            for (var /** @type {?} */ key in params_in) {
                if (params_in.hasOwnProperty(key)) {
                    var /** @type {?} */ val = params_in[key];
                    params.set(key, val);
                }
            }
            var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken') });
            var /** @type {?} */ options = new RequestOptions({ headers: headers, withCredentials: true, search: params });
            return _this.http.get(url)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                _this.AddToCache(resObj, cache);
                return resObj;
            }).catch(function (error) {
                //Handle Error
                return _this.HandleExceptions(error, url);
            });
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
            var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken'), 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var /** @type {?} */ options = new RequestOptions({ headers: headers, withCredentials: true, responseType: ResponseContentType.ArrayBuffer });
            //'arraybuffer'
            //'arraybuffer'
            _this.http.post(url, request, options)
                .subscribe(function (result) {
                _this.loaderService.display(false);
                var /** @type {?} */ token = result.headers.get("AuthToken");
                if (token)
                    sessionStorage.setItem('UserToken', token);
                var /** @type {?} */ file = new Blob([(/** @type {?} */ (result))._body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                var /** @type {?} */ dateSuffix = new Date(Date.now()).toLocaleDateString();
                FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
            }, function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        this.Invoke = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return null;
        };
        /**
         * Use to Get Resouce with complex parameters
         * @param domain
         * @param Data
         * @param cache
         */
        this.Post = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject("Post - " + url, Data);
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http.post(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                _this.AddToCache(resObj, cache);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        this.PostAnonymous = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return null;
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
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            _this.logger.logObject("Put - " + url, Data);
            return _this.http.put(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        /**
         * Modify / Update
         * @param domain
         * @param Data
         * @param cache
         */
        this.Patch = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            _this.logger.logObject("Patch - " + url, Data);
            return _this.http.patch(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        /**
         *
         * @param domain
         * @param Data
         * @param cache
         */
        this.Delete = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            // this.logger.log("Delete - " + url, Data, LogLevel.Info);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http.delete(url, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DataService.prototype.GetFromCache = /**
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
    DataService.prototype.AddToCache = /**
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
    DataService.prototype.ValidateInput = /**
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
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Http, },
        { type: LoaderService, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['ICacheService',] },] },
    ]; };
    return DataService;
}());
export { DataService };
function DataService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DataService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DataService.ctorParameters;
    /** @type {?} */
    DataService.prototype.AddContextToRequest;
    /** @type {?} */
    DataService.prototype.PrepareRequestOptions;
    /** @type {?} */
    DataService.prototype.ParseJson;
    /** @type {?} */
    DataService.prototype.HandleExceptions;
    /**
     * Get by simple parameters
     * \@param domain
     * \@param cache
     * @type {?}
     */
    DataService.prototype.Get;
    /**
     *
     * \@param domain
     * \@param Data
     * @type {?}
     */
    DataService.prototype.ExportToExcel;
    /** @type {?} */
    DataService.prototype.Invoke;
    /**
     * Use to Get Resouce with complex parameters
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataService.prototype.Post;
    /** @type {?} */
    DataService.prototype.PostAnonymous;
    /**
     *
     * \@param domain - Name of the Domain
     * \@param id - Unique Id for search
     * \@param field - Search Field
     * \@param cache -
     * @type {?}
     */
    DataService.prototype.GetById;
    /**
     * Create
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataService.prototype.Put;
    /**
     * Modify / Update
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataService.prototype.Patch;
    /**
     *
     * \@param domain
     * \@param Data
     * \@param cache
     * @type {?}
     */
    DataService.prototype.Delete;
    /** @type {?} */
    DataService.prototype.http;
    /** @type {?} */
    DataService.prototype.loaderService;
    /** @type {?} */
    DataService.prototype.coreConfig;
    /** @type {?} */
    DataService.prototype.logger;
    /** @type {?} */
    DataService.prototype._cache;
}
