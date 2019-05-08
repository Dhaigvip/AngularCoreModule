
/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from "@angular/core";
import { FormControl, ControlContainer, NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'auto-complete',
  exportAs: 'auto-complete',
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
  templateUrl: 'autocomplete.component.html'
})
export class AutoCompleteComponent implements OnInit {
  @Input() options: AutoCompleteOptions = null;
  @Input() disabled: boolean = false;
  @Input() selectedObject: any = null;
  @Output() selectedObjectChange = new EventEmitter();

  @Input() getData: (postdata: SearchRepository) => Observable<ClientResponseDTO>;

  private errorMsgSearch: string = '';
  private objSearch: string = null;
  private ObjList = [];
  private bb: FormControl = new FormControl();

  constructor(
    private translate: TranslateService) {
  }

  clearObject = () => {
    this.clearObjectInternal()
    this.selectedObjectChange.emit(null);
  }
  clearObjectInternal = () => {
    this.bb.setValue('');
    this.objSearch = '';
    this.ObjList = [];
    this.selectedObject = null;
  }
  public ResetControl = () => {
    this.clearObjectInternal();
    this.bb.markAsPristine();
    this.bb.markAsUntouched();
    this.errorMsgSearch = '';
  }

  ObjectSelected = ($event) => {
    console.log($event.option.value);
    this.setObject($event.option.value);
    this.selectedObjectChange.emit(this.selectedObject);
  }

  setObject = (obj) => {
    this.selectedObject = obj;
    this.objSearch = this.GetObjectValue(obj, this.options.displayProp);
    this.ObjList = [];
  }

  displayObject = (obj) => {
    if (obj && typeof obj === 'object') {
      return obj ? this.GetObjectValue(obj, this.options.displayProp) : "Search object not found";
    }
    return obj;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedObject"]) {
      if (changes["selectedObject"].currentValue == null) {
        this.clearObjectInternal();
      }
      else {
        this.setObject({ ...changes["selectedObject"].currentValue });
      }
    }

    if (changes["disabled"]) {
      (changes["disabled"].currentValue) ? this.bb.disable() : this.bb.enable();
    }
  }
  GetObjectValue = (obj, prop: string) => {
    if (!this.options.separator) this.options['separator'] = '/ '
    let rstr = ''
    if (obj && prop) {
      let multi = prop.split(',')
      if (multi.length > 0) {
        for (var i = 0; i < multi.length; i++) {
          rstr += this.GetNestedPropertyValue(obj, multi[i]) + this.options.separator
        }
      }
      else {

        rstr = this.GetNestedPropertyValue(obj, prop);
      }
    }
    rstr = rstr.replace(/\/\s*$/, "");
    return rstr;
  }

  private GetNestedPropertyValue(obj, prop) {
    var a = prop.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in obj) {
        obj = obj[k];
      }
    }
    return typeof obj == 'string' ? obj : '';
  }

  ngOnInit() {

    (this.disabled) ? this.bb.disable() : this.bb.enable();

    this.bb.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(input => {
        if (!input) {
          this.clearObject();
          return false;
        }
        if (this.objSearch) {
          if (typeof this.objSearch != 'object' && (this.objSearch.trim() === input.trim())) {
            return false;
          }
        }
        const checkTypeOfInput = input, type = typeof checkTypeOfInput;
        if (type === 'object') return false;
        return true;
      })
      .subscribe(model => {
        this.errorMsgSearch = '';
        return this.search(model).subscribe(result => {

          if (result && result.ErrorList && result.ErrorList.length > 0) {
            this.errorMsgSearch = result.ErrorList[0].ErrorMessage;
            this.clearObject();
            return;
          }

          if (result != null && result.Success == true && result.Data != null) {
            var keyNames = Object.keys(result.Data);
            for (var i in keyNames) {
              if (keyNames[i].toLowerCase().indexOf('list') !== -1) {
                this.ObjList = result.Data[keyNames[i]];
                break;
              }
            }
            if (this.ObjList && this.ObjList.length == 1) {
              this.ObjectSelected({ option: { value: this.ObjList[0] } });
            } else if (this.ObjList && this.ObjList.length == 0) {
              this.errorMsgSearch = this.translate.instant('no_matching_records');
              this.clearObjectInternal();
            }
            if (!this.ObjList) this.clearObject();
          }
          else {
            this.clearObject();
          }
        });
      });
  }
  //GetObjProps = () => {
  //  if (this.selectedObject) {
  //    var x = Object.getOwnPropertySymbols(this.selectedObject);
  //    x.forEach(t => {
  //      console.log(t);
  //    });§
  //  }
  //}
  search = (input): Observable<any> => {
    const checkTypeOfInput = input, type = typeof checkTypeOfInput;

    if (type === 'object' && type != null) {
      console.log('input is an Object');
      return Observable.of(null);
    } else {
      console.log('inside Accounts');
      const repository: any = this.PrepareSearchRepository(input.trim());
      return this.getData(repository).map((result) => {
        return result;
      });
    }
  }

  public PrepareSearchRepository = (input) => {
    const repository = new SearchRepository();
    repository.CriteriaType = 'BySearch';
    repository.Options = <Options>{};
    repository.Options.BrowseFrom = 1;
    repository.Options.BrowseTo = 100;
    repository.Options.CaseSensitive = false;
    repository.Options.ShowActive = true;
    repository.Options.ShowInactive = true;
    repository.SearchCriteria = [];
    this.options.searchCriteria.forEach(item => {
      repository.SearchCriteria.push({
        SearchConcatenatorId: 'OR',
        SearchFieldId: item.SearchFieldId,
        SearchOperatorId: item.SearchOperatorId,
        SearchValue: item.SearchValue ? item.SearchValue : input,
        ExtPosReference: null
      })
    });
    return repository;
  }
} 
