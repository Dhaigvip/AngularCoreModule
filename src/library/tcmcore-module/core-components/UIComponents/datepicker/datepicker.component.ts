
/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions, InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'tcm-date',
  exportAs: 'tcm-date',
  templateUrl: 'datepicker.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
 
  encapsulation: ViewEncapsulation.None
})
//, ControlValueAccessor
export class DateComponent implements OnInit {

  private validationMessages = {
    required: this.translate.instant("required"),
    minlength: this.translate.instant("minlength"),
    maxlength: this.translate.instant("maxlength")
  }
  //var txt = '{"name":"John", "age":30, "city":"New York"}'
  @Input() options: InputControlOptions = null;
  @Input() val: string = null;
  @Output() valueChange: EventEmitter<any> = new EventEmitter()


  @ViewChild('ctrl') ctrl: FormControl;
  constructor(
    private translate: TranslateService) {
  }
  ngOnInit() {
    this.ctrl.valueChanges.subscribe(result => {
      this.valueChange.emit(result);
    });
  }
} 
