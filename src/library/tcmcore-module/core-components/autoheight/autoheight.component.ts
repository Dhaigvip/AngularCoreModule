/*
  Vipul Dhaigude        2018-01-25    Created
  Adjust the height of the division based on the screen height.
*/


import { Component, OnInit, ViewContainerRef, Directive, ElementRef, HostListener } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[auto-height]'
})
export class AutoHeightDirective {

  @HostListener('mouseover') onMouseOver() {
    let part = this.element.nativeElement.style.overflow = "auto";
  }
  @HostListener('mouseout') onMouseOut() {
    let part = this.element.nativeElement.style.overflow = "hidden";
  }

  constructor(private element: ElementRef) {

  }
  ngOnInit() {
    this.calculateElementHeight();
    $(window).resize(this.calculateElementHeight);
  }
  calculateElementHeight = () => {
    var etop = $(this.element.nativeElement).offset().top;
    var actual_top = etop - $(window).scrollTop();

    var windowHeight = $(window).height();
    this.element.nativeElement.style.maxHeight = ((windowHeight - actual_top)) + "px";;
    this.element.nativeElement.style.overflow = "hidden";
    this.element.nativeElement.style.minHeight = ((windowHeight - actual_top)) + "px";;
  }
}
