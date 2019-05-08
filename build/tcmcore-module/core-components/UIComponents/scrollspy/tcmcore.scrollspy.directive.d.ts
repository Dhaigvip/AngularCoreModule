import { EventEmitter, ElementRef } from '@angular/core';
export declare class ScrollSpyDirective {
    private _el;
    spiedTags: any[];
    sectionChange: EventEmitter<string>;
    private currentSection;
    constructor(_el: ElementRef);
    onScroll(event: any): void;
}
