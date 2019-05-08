var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CoreActionTypes } from './tcmcore.actions';
var /** @type {?} */ initialState = {
    error: '',
    TCMMessages: [],
    CurrentInboxItem: null,
    DashboardMessages: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function CoreReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CoreActionTypes.DashboardMessageReceived:
            var /** @type {?} */ newArray = state.DashboardMessages.slice(0);
            var /** @type {?} */ index = newArray.findIndex(function (item) { return item.QueryId == action.payload.QueryId; });
            if (index == -1) {
                newArray.push(action.payload);
            }
            else {
                newArray[index] = action.payload;
            }
            return __assign({}, state, { DashboardMessages: newArray });
        case CoreActionTypes.TCMMessageReceived:
            return __assign({}, state, { TCMMessages: state.TCMMessages.concat([action.payload]) });
        case CoreActionTypes.SetCurrentInboxItem:
            return __assign({}, state, { CurrentInboxItem: action.payload });
        default:
            return state;
    }
}
