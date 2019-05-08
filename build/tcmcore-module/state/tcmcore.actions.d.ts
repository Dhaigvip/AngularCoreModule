import { Action } from '@ngrx/store';
export declare enum CoreActionTypes {
    TCMMessageReceived = "[Core] TCMMessageReceived",
    DashboardMessageReceived = "[Core] DashboardMessageReceived",
    SetCurrentInboxItem = "[Core] Set Inbox Item",
}
export declare class TCMMessageReceived implements Action {
    payload: any;
    readonly type: CoreActionTypes;
    constructor(payload: any);
}
export declare class DashboardMessageReceived implements Action {
    payload: any;
    readonly type: CoreActionTypes;
    constructor(payload: any);
}
export declare class SetCurrentInboxItem implements Action {
    payload: any;
    readonly type: CoreActionTypes;
    constructor(payload: any);
}
export declare type CoreActions = TCMMessageReceived | SetCurrentInboxItem | DashboardMessageReceived;
