/* NgRx */
import { Action } from '@ngrx/store';


export enum CoreActionTypes {
  TCMMessageReceived = '[Core] TCMMessageReceived',
  DashboardMessageReceived = '[Core] DashboardMessageReceived',
  SetCurrentInboxItem = '[Core] Set Inbox Item'
}


export class TCMMessageReceived implements Action {
  readonly type = CoreActionTypes.TCMMessageReceived;
  constructor(public payload: any) { }
}

export class DashboardMessageReceived implements Action {
  readonly type = CoreActionTypes.DashboardMessageReceived;
  constructor(public payload: any) { }
}

export class SetCurrentInboxItem implements Action {
  readonly type = CoreActionTypes.SetCurrentInboxItem;

  constructor(public payload: any) { }
}

// Union the valid types
export type CoreActions = 
  | TCMMessageReceived  
  | SetCurrentInboxItem
  | DashboardMessageReceived
  
