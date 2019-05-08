import { SimpleChange } from "@angular/core";
import { Router } from "@angular/router";
import { ITCMWebSocketService, INavigationService, CoreState } from "../../tcmcore-objects/tcmcore.domain.interfaces";
import { Store } from "@ngrx/store";
export declare class InboxList {
    private messageService;
    private navigation;
    private router;
    private store;
    inboxes: any;
    splitdirection: string;
    showlist: boolean;
    tasks: any[];
    views: any[];
    constructor(messageService: ITCMWebSocketService, navigation: INavigationService, router: Router, store: Store<CoreState>);
    ngOnInit(): void;
    SetInboxData(obj: any): void;
    DemoData(): void;
    labelClass: (label: any) => {
        'b-l-info': boolean;
        'b-l-primary': boolean;
        'b-l-warning': boolean;
        'b-l-danger': boolean;
    };
    ngOnChanges(change: SimpleChange): void;
    ngAfterViewInit(): void;
    Save(): void;
    CheckIfDirty(): boolean;
}
