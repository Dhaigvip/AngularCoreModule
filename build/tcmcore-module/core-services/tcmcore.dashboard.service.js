/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { SignalR } from '@dharapvj/ngx-signalr' //'ng2-signalr';
;
import { Store } from '@ngrx/store';
import { DashboardMessageReceived } from '../state/tcmcore.actions';
var DashboardService = /** @class */ (function () {
    //private messages: Array<DashboardData> = new Array<DashboardData>();
    //public newMessage: Subject<DashboardData> = new Subject<DashboardData>();
    function DashboardService(_signalR, store, coreConfig) {
        var _this = this;
        this._signalR = _signalR;
        this.store = store;
        this.coreConfig = coreConfig;
        this.Init = function (hubName, userContext, options) {
            console.log("Dashboard Serive Init-->Start");
            var /** @type {?} */ conf = {
                hubName: hubName,
                qs: userContext.RegUser,
                url: _this.coreConfig.Config.SignalRUrl,
                jsonp: true
            };
            var /** @type {?} */ o;
            var /** @type {?} */ conx = _this._signalR.createConnection(conf);
            console.log(conf);
            conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
            conx.start().then(function (c) {
                var /** @type {?} */ listener = c.listenFor('newMessage');
                listener.subscribe(function (message) {
                    console.log('received ' + message);
                    //Convert string to JSON.
                    message.Data = JSON.parse(message.Data);
                    _this.store.dispatch(new DashboardMessageReceived(message));
                    //this.AddMessagesToCollection(message);
                    //this.newMessage.next(message);
                });
                // invoke a server side method, with parameters
                c.invoke('RegisterUser', userContext).then(function (result) {
                    //return result;
                });
            });
            return Observable.of(true);
        };
    }
    DashboardService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DashboardService.ctorParameters = function () { return [
        { type: SignalR, },
        { type: Store, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
    ]; };
    return DashboardService;
}());
export { DashboardService };
function DashboardService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardService.ctorParameters;
    /** @type {?} */
    DashboardService.prototype.Init;
    /** @type {?} */
    DashboardService.prototype._signalR;
    /** @type {?} */
    DashboardService.prototype.store;
    /** @type {?} */
    DashboardService.prototype.coreConfig;
}
