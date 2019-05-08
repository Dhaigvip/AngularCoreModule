
/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from "@angular/core";
import { FormControl, ControlContainer, NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from "ng2-translate";
import { AutoCompleteComponent } from './autocomplete.component';

@Component({
  selector: 'simple-auto-complete',
  exportAs: 'simple-auto-complete',
  styles: [`
    .default-text {
        color: inherit;
    }
    .mat-autocomplete-panel {
      min-width: 400px;
    }
    .mat-hint {
        color: rgba(9, 47, 247, 0.98);
    }
    .error-text {
        color: red;
    }`],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'simple-autocomplete.component.html'
})
export class SimpleAutoCompleteComponent extends AutoCompleteComponent {

  constructor(translate: TranslateService) {
    super(translate);
  }
} 
