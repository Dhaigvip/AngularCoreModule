/* NgRx */
import { createFeatureSelector, createSelector, MemoizedSelector } from
  '@ngrx/store';
import { CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';


const getCoreState = createFeatureSelector<CoreState>('core');

export const getInboxItems = createSelector(
  getCoreState,
  state => state.TCMMessages
);
export const getSelectedInboxItem = createSelector(
  getCoreState,
  state => state.CurrentInboxItem
);
export const getDashboardItems = createSelector(
  getCoreState,
  state => state.DashboardMessages
);



