import { ElementRef, OnChanges, OnInit, Renderer } from '@angular/core';
export declare class FocusDirective implements OnChanges, OnInit {
    private element;
    renderer: Renderer;
    focus: boolean;
    constructor(element: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(): void;
}
