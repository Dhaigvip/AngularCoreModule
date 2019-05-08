/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01   Created
*/
import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
var NavigationService = /** @class */ (function () {
    function NavigationService(logger, router, route) {
        var _this = this;
        this.logger = logger;
        this.router = router;
        this.route = route;
        this._routes = [];
        this.Navigate = function (key) {
            //let path = this.GenerateNavigationPath(key);
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.router.navigate([path]).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithQueryParams = function (key, params) {
            //let path = this.GenerateNavigationPath(key);
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + params);
            _this.router.navigate([path], { queryParams: { data: JSON.stringify(params) } }).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithMandatoryParams = function (key, params) {
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + params);
            _this.router.navigate([path], params).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithExtras = function (key, navigationExtras) {
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + navigationExtras);
            _this.router.navigate([path], navigationExtras).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this._routes = this.router.config;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NavigationService.prototype.GetPath = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ y = null;
        var /** @type {?} */ path = '';
        for (var /** @type {?} */ i = 0; i < this._routes.length; i++) {
            y = this.GetMatchingPath(key, this._routes[i]);
            if (y) {
                return (y.id === this._routes[i].id) ? y.path : this._routes[i].path + '/' + y.path;
            }
        }
        return path;
    };
    /**
     * @param {?} id
     * @param {?} currentNode
     * @return {?}
     */
    NavigationService.prototype.GetMatchingPath = /**
     * @param {?} id
     * @param {?} currentNode
     * @return {?}
     */
    function (id, currentNode) {
        var /** @type {?} */ i, /** @type {?} */ currentChild, /** @type {?} */ result;
        if (id == currentNode.id) {
            return currentNode;
        }
        else {
            if (currentNode.children == null)
                return false;
            // Use a for loop instead of forEach to avoid nested functions
            // Otherwise "return" will not work properly
            for (i = 0; i < currentNode.children.length; i += 1) {
                currentChild = currentNode.children[i];
                // Search in the current child
                result = this.GetMatchingPath(id, currentChild);
                // Return the result if the node has been found
                if (result !== false) {
                    return result;
                }
            }
            // The node has not been found and we have no more options
            return false;
        }
    };
    NavigationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['ILogService',] },] },
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    return NavigationService;
}());
export { NavigationService };
function NavigationService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavigationService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavigationService.ctorParameters;
    /** @type {?} */
    NavigationService.prototype._routes;
    /** @type {?} */
    NavigationService.prototype.Navigate;
    /** @type {?} */
    NavigationService.prototype.NavigateWithQueryParams;
    /** @type {?} */
    NavigationService.prototype.NavigateWithMandatoryParams;
    /** @type {?} */
    NavigationService.prototype.NavigateWithExtras;
    /** @type {?} */
    NavigationService.prototype.logger;
    /** @type {?} */
    NavigationService.prototype.router;
    /** @type {?} */
    NavigationService.prototype.route;
}
