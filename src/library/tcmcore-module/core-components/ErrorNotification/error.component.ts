/*
  Vipul Dhaigude        2018-01-01    Created
  Obsolete - Use ErrorDiv
*/


import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'error-cmp',
  templateUrl: 'error.component.html'
})

export class ErrorComponent {
  @Input() message: string;

  constructor() { }

}
