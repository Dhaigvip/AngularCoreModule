import { Component } from "@angular/core";

let instances = 0;

@Component({
  selector: 'counter',
  template: '<h1>{{this.id}}</h1>'
})
export class Counter {
  id: number;

  constructor() {
    this.id = ++instances;
  }
}

@Component({
  selector: 'wrapper',
  template: `
    <div class="box red">
      <ng-content></ng-content>
    </div>
    <div class="box">
      <ng-content select="counter"></ng-content>
    </div>
  `
})
export class Wrapper { }
