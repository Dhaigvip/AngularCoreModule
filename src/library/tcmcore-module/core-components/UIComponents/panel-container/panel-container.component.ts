/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions, InputControlOptions, PanelContainer } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'tcm-panel',
  exportAs: 'tcm-panel',
  templateUrl: 'panel-container.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }], 
  encapsulation: ViewEncapsulation.None
})
//, ControlValueAccessor
export class PanelContainerComponent {  
  @Input() options: PanelContainer = null;

  constructor(
    private translate: TranslateService) {
  }
} 
