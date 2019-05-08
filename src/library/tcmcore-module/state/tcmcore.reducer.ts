import { CoreActionTypes, CoreActions } from './tcmcore.actions';
import { CoreState } from '../tcmcore-objects/tcmcore.domain.interfaces';

const initialState: CoreState = {
  error: '',
  TCMMessages: [],
  CurrentInboxItem: null,
  DashboardMessages: []
};

export function CoreReducer(state = initialState, action: CoreActions): CoreState {
  switch (action.type) {
    case CoreActionTypes.DashboardMessageReceived:
      var newArray = state.DashboardMessages.slice(0);
      var index = newArray.findIndex((item) => item.QueryId == action.payload.QueryId)
      if (index == -1) {
        newArray.push(action.payload);
      }
      else {
        newArray[index] = action.payload
      }
      return {
        ...state,
        DashboardMessages: newArray
      };
    case CoreActionTypes.TCMMessageReceived:
      return {
        ...state,
        TCMMessages: [...state.TCMMessages, action.payload]
      };
    case CoreActionTypes.SetCurrentInboxItem:
      return {
        ...state,
        CurrentInboxItem: action.payload
      }

    default:
      return state;
  }
}
