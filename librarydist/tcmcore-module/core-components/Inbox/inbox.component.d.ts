import { SimpleChange } from "@angular/core";
export declare class Inbox {
    folds: any[];
    labels: any[];
    newLabel: any;
    inboxes: any[];
    constructor();
    ngOnInit(): void;
    Demodata(): void;
    labelClass: (label: any) => {
        'b-l-info': boolean;
        'b-l-primary': boolean;
        'b-l-warning': boolean;
        'b-l-success': boolean;
    };
    addLabel: () => void;
    ngOnChanges(change: SimpleChange): void;
    ngAfterViewInit(): void;
    Save(): void;
    CheckIfDirty(): boolean;
}
