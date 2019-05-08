/*
  Vipul Dhaigude        2017-01-08    Created
*/


import { Injectable, Inject } from '@angular/core';
import { IWindowRef } from '../tcmcore-objects/tcmcore.domain.interfaces';


function _window(): any {
  return window;
}

@Injectable()
export class WindowRef implements IWindowRef {

  constructor() { }

  get nativeWindow(): any {
    return _window();
  }

}
