/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createFeatureSelector, createSelector } from '@ngrx/store';
var /** @type {?} */ getCoreState = createFeatureSelector('core');
export var /** @type {?} */ getInboxItems = createSelector(getCoreState, function (state) { return state.TCMMessages; });
export var /** @type {?} */ getSelectedInboxItem = createSelector(getCoreState, function (state) { return state.CurrentInboxItem; });
export var /** @type {?} */ getDashboardItems = createSelector(getCoreState, function (state) { return state.DashboardMessages; });
