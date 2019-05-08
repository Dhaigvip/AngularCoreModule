/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var CoreActionTypes = {
    TCMMessageReceived: '[Core] TCMMessageReceived',
    DashboardMessageReceived: '[Core] DashboardMessageReceived',
    SetCurrentInboxItem: '[Core] Set Inbox Item',
};
export { CoreActionTypes };
var TCMMessageReceived = /** @class */ (function () {
    function TCMMessageReceived(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.TCMMessageReceived;
    }
    return TCMMessageReceived;
}());
export { TCMMessageReceived };
function TCMMessageReceived_tsickle_Closure_declarations() {
    /** @type {?} */
    TCMMessageReceived.prototype.type;
    /** @type {?} */
    TCMMessageReceived.prototype.payload;
}
var DashboardMessageReceived = /** @class */ (function () {
    function DashboardMessageReceived(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.DashboardMessageReceived;
    }
    return DashboardMessageReceived;
}());
export { DashboardMessageReceived };
function DashboardMessageReceived_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardMessageReceived.prototype.type;
    /** @type {?} */
    DashboardMessageReceived.prototype.payload;
}
var SetCurrentInboxItem = /** @class */ (function () {
    function SetCurrentInboxItem(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.SetCurrentInboxItem;
    }
    return SetCurrentInboxItem;
}());
export { SetCurrentInboxItem };
function SetCurrentInboxItem_tsickle_Closure_declarations() {
    /** @type {?} */
    SetCurrentInboxItem.prototype.type;
    /** @type {?} */
    SetCurrentInboxItem.prototype.payload;
}
