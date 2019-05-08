/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { tcmnumber } from './tcm-number.pipe';
import { Inject, ElementRef, LOCALE_ID, HostListener, OnInit, Directive, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
@Directive({
  selector: "[tcm-number]"
})
export class NumberComponent implements OnInit {
  private el: HTMLInputElement;
  @Output() ngModelChange = new EventEmitter();
  @Input() decimalPlaces: string = '6';
  constructor(
    @Inject(LOCALE_ID) private locale,
    private elementRef: ElementRef,
    private tcmpipe: tcmnumber) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.tcmpipe.parse(value, this.locale, this.decimalPlaces); // opossite of transform
    this.ngModelChange.emit(this.el.value);

    //var val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
    //val ? this.el.value = val.toString() : '';
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    var val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
    val ? this.el.value = val.toString() : '';
  }
  ngOnInit() {
    var formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces)
    this.updateDisplay();
  }

  updateDisplay() {
    setTimeout(() => {
      this.onFocus(this.el.value);
    }, 10);
    setTimeout(() => {
      this.onBlur(this.el.value);
    }, 15);
  }
  //ngAfterViewInit(): void {
  //  var formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces);
  //   formattedValue ? this.el.value = formattedValue.toString() : this.el.value = '';
  //}
} 
