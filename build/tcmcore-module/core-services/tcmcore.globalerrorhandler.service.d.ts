import { ErrorHandler } from '@angular/core';
import { ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class GlobalErrorHandler implements ErrorHandler {
    private logger;
    constructor(logger: ILogService);
    handleError(error: any): void;
}
