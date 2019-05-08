/*
  Vipul Dhaigude        2018-01-01    Created
  Displays error on the top of the page.
  This component takes list of ERRORDTO as parameters.
*/


import { Component, OnInit, ViewContainerRef, Input, EventEmitter } from '@angular/core';
import { ErrorDTO } from '../../tcmcore-objects/tcmcore.domain.objects';

@Component({
  selector: 'error-div',
  templateUrl: './errordiv.component.html',
})
export class ErrorDivComponent {
  @Input() public Errors: Array<ErrorDTO>;
  public errordivclosed: EventEmitter<void> = new EventEmitter();

  constructor() {

  }
  close = () => {
    this.Errors = null;
    this.errordivclosed.next();
  }
}
