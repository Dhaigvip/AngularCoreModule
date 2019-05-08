/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component } from "@angular/core";
var Inbox = /** @class */ (function () {
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';
    function Inbox() {
        var _this = this;
        this.folds = [];
        this.labels = [];
        this.inboxes = [];
        this.labelClass = function (label) {
            return {
                'b-l-info': label === 'New',
                'b-l-primary': label === 'Approve',
                'b-l-warning': label === 'Modify',
                'b-l-success': label === 'Delete'
            };
        };
        this.addLabel = function () {
            _this.labels.push({
                name: _this.newLabel.name,
                filter: _this.newLabel.name,
                color: '#ccc'
            });
            _this.newLabel.name = '';
        };
    }
    /**
     * @return {?}
     */
    Inbox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.Demodata();
    };
    /**
     * @return {?}
     */
    Inbox.prototype.Demodata = /**
     * @return {?}
     */
    function () {
        this.folds = [
            { name: 'Order', filter: '', id: 1 },
            { name: 'Customer', filter: 'starred', id: 2 },
            { name: 'Fund', filter: 'sent', id: 3 },
            { name: 'Payment', filter: 'important', id: 4 },
            { name: 'Accounts', filter: 'draft', id: 5 },
            { name: 'Other', filter: 'trash', id: 6 }
        ];
        this.labels = [
            { name: 'New', filter: 'new', color: '#23b7e5' },
            { name: 'Approve', filter: 'approve', color: '#7266ba' },
            { name: 'Modify', filter: 'modify', color: '#fad733' },
            { name: 'Delete', filter: 'delete', color: '#27c24c' }
        ];
    };
    /**
     * @param {?} change
     * @return {?}
     */
    Inbox.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.Save = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.CheckIfDirty = /**
     * @return {?}
     */
    function () {
        return false;
    };
    Inbox.decorators = [
        { type: Component, args: [{
                    selector: 'inbox',
                    styles: [""],
                    template: "<div class=\"row padding\"> <!--<div class=\"col-md-1\"> <div class=\"hidden-sm hidden-xs\" id=\"inbox-menu\"> <ul class=\"nav nav-pills nav-stacked nav-sm\"> <li *ngFor=\"let fold of folds\" routerLinkActive=\"active\"> <a routerLink=\"inboxlist/{{fold.id}}\"> {{fold.name}} </a> </li> </ul> <div class=\"p-v\">Labels</div> <ul class=\"nav nav-pills nav-stacked nav-sm\"> <li *ngFor=\"let label of labels\" routerLinkActive=\"active\" [ngClass]=\"labelClass(label.name.toLowerCase())\"> <a> <i class=\"fa fa-fw fa-circle text-muted\"></i> {{label.name}} </a> </li> </ul> </div> </div>--> <!--<div class=\"col-md-12\">--> <router-outlet></router-outlet> <!--</div>--> </div> "
                },] },
    ];
    /** @nocollapse */
    Inbox.ctorParameters = function () { return []; };
    return Inbox;
}());
export { Inbox };
function Inbox_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Inbox.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Inbox.ctorParameters;
    /** @type {?} */
    Inbox.prototype.folds;
    /** @type {?} */
    Inbox.prototype.labels;
    /** @type {?} */
    Inbox.prototype.newLabel;
    /** @type {?} */
    Inbox.prototype.inboxes;
    /** @type {?} */
    Inbox.prototype.labelClass;
    /** @type {?} */
    Inbox.prototype.addLabel;
}
