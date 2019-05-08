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
import { Store } from '@ngrx/store';
import * as signalR from "@aspnet/signalr";
import { DashboardMessageReceived } from '../state/tcmcore.actions';
var DashboardServiceCore = /** @class */ (function () {
    function DashboardServiceCore(store, coreConfig) {
        var _this = this;
        this.store = store;
        this.coreConfig = coreConfig;
        this.start = function (userContext) {
            _this._hubConnection.start().then(function (c) {
                var /** @type {?} */ x = 0;
                _this._hubConnection.invoke('RegisterUser', userContext).then(function (result) {
                    console.log(result);
                });
            }).catch(function (err) { return console.error(err); });
        };
        this.Init = function (hubName, userContext, options) {
            _this._hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(_this.coreConfig.Config.SignalRUrl + ("/" + hubName))
                .configureLogging(signalR.LogLevel.Information)
                .build();
            _this.start(userContext);
            _this._hubConnection.onclose(function () {
                setTimeout(function () { return _this.start(userContext); }, 5000);
            });
            _this._hubConnection.on("newMessage", function (message) {
                console.log('received dashboard message' + message);
                //Convert string to JSON.
                message.Data = JSON.parse(message.Data);
                _this.store.dispatch(new DashboardMessageReceived(message));
            });
            return Observable.of(true);
        };
    }
    DashboardServiceCore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DashboardServiceCore.ctorParameters = function () { return [
        { type: Store, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
    ]; };
    return DashboardServiceCore;
}());
export { DashboardServiceCore };
function DashboardServiceCore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardServiceCore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardServiceCore.ctorParameters;
    /** @type {?} */
    DashboardServiceCore.prototype._hubConnection;
    /** @type {?} */
    DashboardServiceCore.prototype.start;
    /** @type {?} */
    DashboardServiceCore.prototype.Init;
    /** @type {?} */
    DashboardServiceCore.prototype.store;
    /** @type {?} */
    DashboardServiceCore.prototype.coreConfig;
}
