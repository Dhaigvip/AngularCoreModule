import { ElementRef, OnInit, EventEmitter } from '@angular/core';
export declare class TimePickerComponent implements OnInit {
    private locale;
    private elementRef;
    private el;
    ngModelChange: EventEmitter<{}>;
    private timeoptions;
    constructor(locale: any, elementRef: ElementRef);
    ngOnInit(): void;
    parse(val: string): string;
}
