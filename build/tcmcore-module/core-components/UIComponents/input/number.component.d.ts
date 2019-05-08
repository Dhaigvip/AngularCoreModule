import { tcmnumber } from './tcm-number.pipe';
import { ElementRef, OnInit, EventEmitter } from '@angular/core';
export declare class NumberComponent implements OnInit {
    private locale;
    private elementRef;
    private tcmpipe;
    private el;
    ngModelChange: EventEmitter<{}>;
    decimalPlaces: string;
    constructor(locale: any, elementRef: ElementRef, tcmpipe: tcmnumber);
    onFocus(value: any): void;
    onBlur(value: any): void;
    ngOnInit(): void;
    updateDisplay(): void;
}
