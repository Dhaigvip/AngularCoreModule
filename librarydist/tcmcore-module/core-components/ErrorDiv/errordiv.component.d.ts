import { EventEmitter } from '@angular/core';
import { ErrorDTO } from '../../tcmcore-objects/tcmcore.domain.objects';
export declare class ErrorDivComponent {
    Errors: Array<ErrorDTO>;
    errordivclosed: EventEmitter<void>;
    constructor();
    close: () => void;
}
