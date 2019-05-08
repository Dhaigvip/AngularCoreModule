/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions, InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'tcm-button',
  exportAs: 'tcm-button',
  templateUrl: 'button.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  
  encapsulation: ViewEncapsulation.None
})
//, ControlValueAccessor
export class ButtonComponent  {  
    @ViewChild('ctrl') ctrl: FormControl;
  constructor(
    private translate: TranslateService) {
  }
} 
