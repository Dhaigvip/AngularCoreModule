/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { MessageWrapper } from '../tcmcore-objects/tcmcore.domain.objects';
import { SignalR } from '@dharapvj/ngx-signalr' //'ng2-signalr';
;
import { TCMMessageReceived } from '../state/tcmcore.actions';
import { Store } from '@ngrx/store';
var MessageService = /** @class */ (function () {
    function MessageService(_signalR, coreConfig, auth, store) {
        var _this = this;
        this._signalR = _signalR;
        this.coreConfig = coreConfig;
        this.auth = auth;
        this.store = store;
        this.messages = new Array();
        this.newTCMMessage = new Subject();
        this.conx = null;
        this.counter = 0;
        this.Init = function (hubName, userContext, options) {
            console.log("TCM Message Serive Init-->Start");
            var /** @type {?} */ conf = {
                hubName: hubName,
                qs: userContext.RegUser,
                url: _this.coreConfig.Config.SignalRUrl,
                jsonp: true
            };
            var /** @type {?} */ o;
            _this.conx = _this._signalR.createConnection(conf);
            console.log(conf);
            _this.conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
            _this.conx.start().then(function (c) {
                var /** @type {?} */ listener = c.listenFor('newTCMMessage');
                listener.subscribe(function (message) {
                    console.log('received ' + message);
                    //Convert string to JSON.
                    var /** @type {?} */ m = JSON.parse(message);
                    _this.store.dispatch(new TCMMessageReceived(m));
                    //this.AddMessagesToCollection(m);
                    //this.newTCMMessage.next(m);
                });
                // invoke a server side method, with parameters
                c.invoke('RegisterUser', userContext).then(function (result) {
                    //return result;
                });
            });
            return Observable.of(true);
        };
    }
    /**
     * @param {?} message
     * @param {?} target
     * @param {?} messageId
     * @return {?}
     */
    MessageService.prototype.SendMessage = /**
     * @param {?} message
     * @param {?} target
     * @param {?} messageId
     * @return {?}
     */
    function (message, target, messageId) {
        if (!messageId) {
            messageId = (this.counter).toString();
            this.counter++;
        }
        var /** @type {?} */ m = new MessageWrapper();
        m.Target = target;
        m.Context = this.auth.GetUserContext();
        m.Message = message;
        m.MessageId = messageId;
        this.conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
        var /** @type {?} */ r = this.conx.start().then(function (c) {
            return Observable.fromPromise(c.invoke('ReceiveClientMessage', m));
        });
        return r;
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return [
        { type: SignalR, },
        { type: undefined, decorators: [{ type: Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IAuthService',] },] },
        { type: Store, },
    ]; };
    return MessageService;
}());
export { MessageService };
function MessageService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MessageService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MessageService.ctorParameters;
    /** @type {?} */
    MessageService.prototype.messages;
    /** @type {?} */
    MessageService.prototype.newTCMMessage;
    /** @type {?} */
    MessageService.prototype.conx;
    /** @type {?} */
    MessageService.prototype.counter;
    /** @type {?} */
    MessageService.prototype.Init;
    /** @type {?} */
    MessageService.prototype._signalR;
    /** @type {?} */
    MessageService.prototype.coreConfig;
    /** @type {?} */
    MessageService.prototype.auth;
    /** @type {?} */
    MessageService.prototype.store;
}
