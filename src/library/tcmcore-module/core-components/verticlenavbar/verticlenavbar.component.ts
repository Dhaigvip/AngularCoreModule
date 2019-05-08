/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { Component, OnInit, Input, Inject } from '@angular/core';
import { IThemeService } from '../../../index';

@Component({
  selector: 'verticle-navbar-cmp',
  templateUrl: 'verticlenavbar.component.html'
})

export class VerticleNavbarComponent implements OnInit {

  @Input() VeticleRoutes: any;

  constructor( ) {

  }

  onClick(id) {
    let ele = document.querySelector("#" + id);
    if (ele) {
      ele.scrollIntoView();
      window.scrollBy(0, -130);
    }
  }
  ngOnInit() {
  }
}
