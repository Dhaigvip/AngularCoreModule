/*
  Vipul Dhaigude        2017-01-25    Created
*/


import { ErrorHandler, Injectable, Inject } from '@angular/core';
import { ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor( @Inject('ILogService') private logger: ILogService) { }
  handleError(error) {
    this.logger.error(error);
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    //throw error;
  }
}
