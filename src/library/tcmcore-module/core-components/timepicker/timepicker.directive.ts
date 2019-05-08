/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { Directive, ElementRef, OnInit, Input, HostListener, Output, EventEmitter, AfterViewInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[tcmtimePicker]'

})
export class TimepickerDirective implements OnInit, AfterViewInit {
  @Input('options') newoptions: any = {};
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter()

  private newTime: string = '0:00:00';
  private options: any;
  private defaultTime: string = '0:00:00';

  constructor(private el: ElementRef) {

  }


  @HostListener('blur') onLostFocus() {
    if (this.el.nativeElement.value === '') {
      this.newTime = this.defaultTime;
      this.ngModelChange.emit(this.newTime);
    }
  }
  ngOnInit() {

    this.options = {
      showSeconds: this.newoptions.allow24hourFormat || true,
      showMeridian: !(this.newoptions.allow24hourFormat || true),
      defaultTime: this.newoptions.defaultTime || '00:00:00',
      minuteStep: this.newoptions.minuteStep || 15,
      secondStep: this.newoptions.secondStep || 15
    };

    $(this.el.nativeElement).timepicker(this.options).on('changeTime.timepicker', event => {
      console.log(event.time.value);
      if (this.newTime !== event.time.value) {
        this.newTime = event.time.value;
        this.ngModelChange.emit(event.time.value);
        console.log(event.time.value);
      }
    });
  }

  ngAfterViewInit() {
    this.ngModelChange.emit(this.defaultTime);
  }
}
