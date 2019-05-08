import { Inject, ElementRef, LOCALE_ID, HostListener, OnInit, Directive, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
declare var $: any;

@Directive({
  selector: "[tcm-time]"
})

export class TimePickerComponent implements OnInit {
  private el: HTMLInputElement;
  @Output() ngModelChange = new EventEmitter();
  private timeoptions;

  constructor(
    @Inject(LOCALE_ID) private locale,
    private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;

    this.timeoptions = {
      format: 'H:i',
      datepicker: false,
      step: 30,
      onSelectTime: (dateText) => {
        let d = new Date(dateText);        
        var dateStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        //dateStr = this.parse(dateStr);
        this.ngModelChange.emit(dateStr);
      }
    };
  }

  ngOnInit() {

    $(this.elementRef.nativeElement).datetimepicker(this.timeoptions);
  }
  parse(val: string) {
    if (val) {
      var arr = val.trim().split(':');
      var hr = arr[0], min = arr[1], sec = arr[2];
      if (hr) {
        var temp = Number(hr);
        if (temp < 1) temp = 1;
        if (temp > 23) temp = 23;
        hr = temp.toString();
      }
      if (min) {
        var temp = Number(min);
        if (temp > 59) {
          temp = 0;
          (Number(hr) != 23) ? hr += 1 : hr;
        }
        min = temp.toString();
      }
      return hr + ':' + min + ':' + sec;
    }
    return '';
  }
}
