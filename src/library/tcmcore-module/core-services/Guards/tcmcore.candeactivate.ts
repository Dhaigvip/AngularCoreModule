/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ICanComponentDeactivate } from '../../tcmcore-objects/tcmcore.domain.interfaces';



@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {
  canDeactivate(component: ICanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
