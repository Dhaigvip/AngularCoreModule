/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild, ElementRef } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions, InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';
import { MatInput } from "@angular/material";

// Do this in app.module if yu want to use localised numbers
//
//import localeSv from '@angular/common/locales/sv';
//import { registerLocaleData } from '@angular/common';
//registerLocaleData(localeSv, 'sv');
//
//

@Component({
  selector: 'tcm-input',
  exportAs: 'tcm-input',
  templateUrl: 'input.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  styles: [`
    .mat-hint {
        color: rgba(9, 47, 247, 0.98);
    }
    .error-text {
        color: red;
    }`],
  encapsulation: ViewEncapsulation.None
})
//, ControlValueAccessor
export class InputComponent implements OnInit {

  private validationMessages = {
    required: this.translate.instant("required"),
    minlength: this.translate.instant("minlength"),
    maxlength: this.translate.instant("maxlength")
  }
  @Input() options: InputControlOptions = null;
  @Input() val: string = null;
  @Output() valueChange: EventEmitter<any> = new EventEmitter()

  @ViewChild('ctrl') private ctrl: FormControl;
  constructor(
    private translate: TranslateService
    , private el: ElementRef) {
  }
  ngOnInit() {
    this.ctrl.valueChanges.subscribe(result => {
      this.valueChange.emit(result);
    });
    if (this.options.focus)
      this.el.nativeElement.focus();
  }
} 
