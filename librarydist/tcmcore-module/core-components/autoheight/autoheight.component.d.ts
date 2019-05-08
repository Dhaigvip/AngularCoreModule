import { ElementRef } from '@angular/core';
export declare class AutoHeightDirective {
    private element;
    onMouseOver(): void;
    onMouseOut(): void;
    constructor(element: ElementRef);
    ngOnInit(): void;
    calculateElementHeight: () => void;
}
