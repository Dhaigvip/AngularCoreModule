/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { getInboxItems } from '../../state/tcmcore.selectors';
import { SetCurrentInboxItem } from '../../state/tcmcore.actions';
var InboxList = /** @class */ (function () {
    function InboxList(messageService, navigation, router
        //, private shared: CoreShareService
        , store) {
        //this.router.events.subscribe((eventType) => {
        //  if (eventType instanceof NavigationStart) {
        //  }
        //});
        //this.messageService.newTCMMessage.subscribe((newMessage) => {
        //  let added = false;
        //  for (let i = 0; i < this.inboxes.length; i++) {
        //    if (this.inboxes[i].MessageId == newMessage.MessageId) {
        //      this.inboxes[i] = newMessage;
        //      added = true;
        //      break;
        //    }
        //  }
        //  if (!added) this.inboxes.push(newMessage);
        //})
        this.messageService = messageService;
        this.navigation = navigation;
        this.router = router;
        this.store = store;
        this.inboxes = null;
        this.splitdirection = 'horizontal';
        this.showlist = true;
        this.tasks = [];
        this.views = [];
        this.labelClass = function (label) {
            return {
                'b-l-info': label === 'New Order',
                'b-l-primary': label === 'Cancel Order',
                'b-l-warning': label === 'Approve',
                'b-l-danger': label === 'Check'
            };
        };
    }
    /**
     * @return {?}
     */
    InboxList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inboxes = this.store.pipe(select(getInboxItems));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    InboxList.prototype.SetInboxData = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        obj.State = 1;
        this.store.dispatch(new SetCurrentInboxItem(obj));
    };
    /**
     * @return {?}
     */
    InboxList.prototype.DemoData = /**
     * @return {?}
     */
    function () {
        this.tasks = [
            { value: 'newfund', viewValue: 'Create New Fund' },
            { value: 'newcustomer', viewValue: 'Create New Customer' },
            { value: 'newpit', viewValue: 'Create New Payment Instruction' }
        ];
        this.views = [
            { value: 'fundoverview', viewValue: 'Fund Overview' },
            { value: 'customeroverview', viewValue: 'Customer Overview' },
            { value: 'fundoverview', viewValue: 'Pending confirmation overview' }
        ];
        this.inboxes = [
            {
                "id": 10,
                "subject": "Place a new subscription order",
                "from": "james@gmail.com",
                "avatar": "assets/img/a10.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "attach": [
                    { "name": "c1.jpg", "url": "assets/img/c1.jpg" },
                    { "name": "c3.jpg", "url": "assets/img/c3.jpg" }
                ],
                "date": "12:20 7/23/2014",
                "label": "New Order",
                "fold": "important",
                "target": "orderentry"
            },
            {
                "id": 9,
                "subject": "Place a new subscription order",
                "from": "james@gmail.com",
                "avatar": "assets/img/a9.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Retur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "date": "12:20 7/23/2014",
                "label": "New Order",
                "fold": "important",
                "target": "orderentry"
            },
            {
                "id": 8,
                "subject": "Cancel order number 12805",
                "from": "jessica@gmail.com",
                "avatar": "assets/img/a1.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "attach": [
                    { "name": "c0.jpg", "url": "images/c0.jpg" }
                ],
                "date": "16:20 7/22/2014",
                "label": "Cancel Order",
                "fold": "important",
                "target": "ordercancel"
            },
            {
                "id": 7,
                "subject": "Approve new Payment Instruction",
                "from": "lucy@hotmail.com",
                "avatar": "assets/img/a2.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.",
                "date": "10:20 7/22/2014",
                "label": "Approve",
                "fold": "sent",
                "state": "unread",
                "target": "paymentapprove"
            },
            {
                "id": 6,
                "subject": "Check all the orders for cut-off",
                "from": "Jobs@jobhunter.com",
                "avatar": "assets/img/a3.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date": "3:20 7/22/2014",
                "label": "Check",
                "fold": "starred",
                "state": "unread",
                "target": "ordercancel"
            },
            {
                "id": 6,
                "subject": "Check all the orders for cut-off",
                "from": "Jobs@jobhunter.com",
                "avatar": "assets/img/a3.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date": "3:20 7/22/2014",
                "label": "Check",
                "fold": "starred",
                "state": "unread",
                "target": "ordercancel"
            },
            {
                "id": 6,
                "subject": "Check all the orders for cut-off",
                "from": "Jobs@jobhunter.com",
                "avatar": "assets/img/a3.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date": "3:20 7/22/2014",
                "label": "Check",
                "fold": "starred",
                "state": "unread",
                "target": "ordercancel"
            },
            {
                "id": 6,
                "subject": "Check all the orders for cut-off",
                "from": "Jobs@jobhunter.com",
                "avatar": "assets/img/a3.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date": "3:20 7/22/2014",
                "label": "Check",
                "fold": "starred",
                "state": "unread",
                "target": "ordercancel"
            }, {
                "id": 6,
                "subject": "Check all the orders for cut-off",
                "from": "Jobs@jobhunter.com",
                "avatar": "assets/img/a3.jpg",
                "to": [
                    { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
                ],
                "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date": "3:20 7/22/2014",
                "label": "Check",
                "fold": "starred",
                "state": "unread",
                "target": "ordercancel"
            }
        ];
    };
    /**
     * @param {?} change
     * @return {?}
     */
    InboxList.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.Save = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.CheckIfDirty = /**
     * @return {?}
     */
    function () {
        return false;
    };
    InboxList.decorators = [
        { type: Component, args: [{
                    selector: 'inbox_list',
                    template: "<split [direction]=\"splitdirection\"> <split-area size=\"30\" [order]=\"0\" *ngIf=\"showlist\"> <div> <!-- header --> <div class=\"m-b\" *ngIf=\"(inboxes | async)?.length > 0\"> <div class=\"btn-group pull-right\"> <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-chevron-left\"></i></button> <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-chevron-right\"></i></button> </div> <div class=\"btn-toolbar\"> <div class=\"btn-group dropdown\"> <button class=\"btn btn-default btn-sm btn-bg dropdown-toggle\" data-toggle=\"dropdown\"> <span class=\"dropdown-label\">Filter</span> <span class=\"caret\"></span> </button> <ul class=\"dropdown-menu text-left text-sm\"> <li><a ui-sref=\"app.inbox.list({fold:'unread'})\">Unread</a></li> <li><a ui-sref=\"app.inbox.list({fold:'starred'})\">Starred</a></li> </ul> </div> <div class=\"btn-group\"> <button class=\"btn btn-sm btn-bg btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-title=\"Refresh\" data-original-title=\"\" title=\"\"><i class=\"fa fa-refresh\"></i></button> </div> </div> </div> <!--<div class=\"panel-card bg-white p clearfix m-b-sm b-l b-l-2x r\"> <mat-form-field> <mat-select placeholder=\"New\"> <mat-option *ngFor=\"let task of tasks\" [value]=\"task.value\"> {{ task.viewValue }} </mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-select placeholder=\"Overviews\"> <mat-option *ngFor=\"let view of views\" [value]=\"view.value\"> {{ view.viewValue }} </mat-option> </mat-select> </mat-form-field> </div>--> <!-- / header --> <!-- list --> <div class=\"m-b-lg\"> <!--| filter:fold--> <div *ngFor=\"let inbox of inboxes|async\" [ngClass]=\"labelClass(inbox.Label)\" class=\"panel-card bg-white p clearfix m-b-sm b-l b-l-2x r\"> <a class=\"pull-left m-r\"> <img [src]=\"inbox.Avatar\" class=\"w-40 rounded\"> </a> <div class=\"pull-right text-sm text-muted\"> <span class=\"hidden-xs\">{{ inbox.Date }}</span> <i class=\"fa fa-paperclip ng-hide m-l-sm\" *ngIf=\"inbox.Attach\"></i> </div> <div class=\"clear\"> <div> <a routerLink=\"{{inbox.Target}}\" [queryParams]=\"{location: 'inbox'+ inbox.MessageId}\" (click)=\"SetInboxData(inbox)\" class=\"text-md\"><b *ngIf=\"inbox.State == 0\">{{inbox.Subject}}</b><span *ngIf=\"inbox.State == 1\">{{inbox.Subject}}</span></a> <span class=\"label bg-light m-l-sm\">{{inbox.Label}}</span> </div> <div class=\"text-ellipsis m-t-xs text-muted-dk text-sm\" matTooltip=\"{{inbox.Content}}\" matTooltipClass=\"tooltip-x\">{{inbox.Content}}</div> </div> <!--{{inbox | json}}--> </div> </div> <!-- / list --> </div> </split-area> <split-area size=\"70\" [order]=\"1\"> <router-outlet></router-outlet> </split-area> </split> "
                },] },
    ];
    /** @nocollapse */
    InboxList.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['ITCMWebSocketService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['INavigationService',] },] },
        { type: Router, },
        { type: Store, },
    ]; };
    return InboxList;
}());
export { InboxList };
function InboxList_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InboxList.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InboxList.ctorParameters;
    /** @type {?} */
    InboxList.prototype.inboxes;
    /** @type {?} */
    InboxList.prototype.splitdirection;
    /** @type {?} */
    InboxList.prototype.showlist;
    /** @type {?} */
    InboxList.prototype.tasks;
    /** @type {?} */
    InboxList.prototype.views;
    /** @type {?} */
    InboxList.prototype.labelClass;
    /** @type {?} */
    InboxList.prototype.messageService;
    /** @type {?} */
    InboxList.prototype.navigation;
    /** @type {?} */
    InboxList.prototype.router;
    /** @type {?} */
    InboxList.prototype.store;
}
