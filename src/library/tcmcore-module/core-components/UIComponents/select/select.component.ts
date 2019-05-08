/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild, Inject } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, CacheData, CacheObject, SelectControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';
import { IStaticDataService } from "../../../tcmcore-objects/tcmcore.domain.interfaces";

@Component({
  selector: 'tcm-select',
  exportAs: 'tcm-select',
  templateUrl: 'select.component.html',
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
export class SelectComponent implements OnInit {

  private validationMessages = {
    requiredselection: this.translate.instant("requiredselection"),
  }
  @Input() options: SelectControlOptions = null;
  @Input() val: string = null;
  @Output() valueChange: EventEmitter<any> = new EventEmitter()
  private myOptions = null;

  @ViewChild('ctrl') ctrl: FormControl;
  constructor(
    private translate: TranslateService
    , @Inject('IStaticDataService') private staticDataService: IStaticDataService
    ) {
  }

  //Static Data
  public GetStaticData = (key: String): CacheData => {
    return this.staticDataService.GetStaticData(key);
  }
  public GetStaticDataList = (keys: Array<string>): Array<CacheData> => {
    return this.staticDataService.GetStaticDataList(keys);
  }
  public GetStaticDataItems = (key: string): CacheObject[] => {
    return this.staticDataService.GetStaticDataItems(key);
  }

  ngOnInit() {    
    this.ctrl.valueChanges.subscribe(result => {
      this.valueChange.emit(result);
    });
  }
} 
