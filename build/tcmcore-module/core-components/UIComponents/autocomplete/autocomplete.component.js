var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { FormControl, ControlContainer, NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, AutoCompleteOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from "ng2-translate";
var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.options = null;
        this.disabled = false;
        this.selectedObject = null;
        this.selectedObjectChange = new EventEmitter();
        this.errorMsgSearch = '';
        this.objSearch = null;
        this.ObjList = [];
        this.bb = new FormControl();
        this.clearObject = function () {
            _this.clearObjectInternal();
            _this.selectedObjectChange.emit(null);
        };
        this.clearObjectInternal = function () {
            _this.bb.setValue('');
            _this.objSearch = '';
            _this.ObjList = [];
            _this.selectedObject = null;
        };
        this.ResetControl = function () {
            _this.clearObjectInternal();
            _this.bb.markAsPristine();
            _this.bb.markAsUntouched();
            _this.errorMsgSearch = '';
        };
        this.ObjectSelected = function ($event) {
            console.log($event.option.value);
            _this.setObject($event.option.value);
            _this.selectedObjectChange.emit(_this.selectedObject);
        };
        this.setObject = function (obj) {
            _this.selectedObject = obj;
            _this.objSearch = _this.GetObjectValue(obj, _this.options.displayProp);
            _this.ObjList = [];
        };
        this.displayObject = function (obj) {
            if (obj && typeof obj === 'object') {
                return obj ? _this.GetObjectValue(obj, _this.options.displayProp) : "Search object not found";
            }
            return obj;
        };
        this.GetObjectValue = function (obj, prop) {
            if (!_this.options.separator)
                _this.options['separator'] = '/ ';
            var /** @type {?} */ rstr = '';
            if (obj && prop) {
                var /** @type {?} */ multi = prop.split(',');
                if (multi.length > 0) {
                    for (var /** @type {?} */ i = 0; i < multi.length; i++) {
                        rstr += _this.GetNestedPropertyValue(obj, multi[i]) + _this.options.separator;
                    }
                }
                else {
                    rstr = _this.GetNestedPropertyValue(obj, prop);
                }
            }
            rstr = rstr.replace(/\/\s*$/, "");
            return rstr;
        };
        //GetObjProps = () => {
        //  if (this.selectedObject) {
        //    var x = Object.getOwnPropertySymbols(this.selectedObject);
        //    x.forEach(t => {
        //      console.log(t);
        //    });§
        //  }
        //}
        this.search = function (input) {
            var /** @type {?} */ checkTypeOfInput = input, /** @type {?} */ type = typeof checkTypeOfInput;
            if (type === 'object' && type != null) {
                console.log('input is an Object');
                return Observable.of(null);
            }
            else {
                console.log('inside Accounts');
                var /** @type {?} */ repository = _this.PrepareSearchRepository(input.trim());
                return _this.getData(repository).map(function (result) {
                    return result;
                });
            }
        };
        this.PrepareSearchRepository = function (input) {
            var /** @type {?} */ repository = new SearchRepository();
            repository.CriteriaType = 'BySearch';
            repository.Options = /** @type {?} */ ({});
            repository.Options.BrowseFrom = 1;
            repository.Options.BrowseTo = 100;
            repository.Options.CaseSensitive = false;
            repository.Options.ShowActive = true;
            repository.Options.ShowInactive = true;
            repository.SearchCriteria = [];
            _this.options.searchCriteria.forEach(function (item) {
                repository.SearchCriteria.push({
                    SearchConcatenatorId: 'OR',
                    SearchFieldId: item.SearchFieldId,
                    SearchOperatorId: item.SearchOperatorId,
                    SearchValue: item.SearchValue ? item.SearchValue : input,
                    ExtPosReference: null
                });
            });
            return repository;
        };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["selectedObject"]) {
            if (changes["selectedObject"].currentValue == null) {
                this.clearObjectInternal();
            }
            else {
                this.setObject(__assign({}, changes["selectedObject"].currentValue));
            }
        }
        if (changes["disabled"]) {
            (changes["disabled"].currentValue) ? this.bb.disable() : this.bb.enable();
        }
    };
    /**
     * @param {?} obj
     * @param {?} prop
     * @return {?}
     */
    AutoCompleteComponent.prototype.GetNestedPropertyValue = /**
     * @param {?} obj
     * @param {?} prop
     * @return {?}
     */
    function (obj, prop) {
        var /** @type {?} */ a = prop.split('.');
        for (var /** @type {?} */ i = 0, /** @type {?} */ n = a.length; i < n; ++i) {
            var /** @type {?} */ k = a[i];
            if (k in obj) {
                obj = obj[k];
            }
        }
        return typeof obj == 'string' ? obj : '';
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        (this.disabled) ? this.bb.disable() : this.bb.enable();
        this.bb.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(function (input) {
            if (!input) {
                _this.clearObject();
                return false;
            }
            if (_this.objSearch) {
                if (typeof _this.objSearch != 'object' && (_this.objSearch.trim() === input.trim())) {
                    return false;
                }
            }
            var /** @type {?} */ checkTypeOfInput = input, /** @type {?} */ type = typeof checkTypeOfInput;
            if (type === 'object')
                return false;
            return true;
        })
            .subscribe(function (model) {
            _this.errorMsgSearch = '';
            return _this.search(model).subscribe(function (result) {
                if (result && result.ErrorList && result.ErrorList.length > 0) {
                    _this.errorMsgSearch = result.ErrorList[0].ErrorMessage;
                    _this.clearObject();
                    return;
                }
                if (result != null && result.Success == true && result.Data != null) {
                    var /** @type {?} */ keyNames = Object.keys(result.Data);
                    for (var /** @type {?} */ i in keyNames) {
                        if (keyNames[i].toLowerCase().indexOf('list') !== -1) {
                            _this.ObjList = result.Data[keyNames[i]];
                            break;
                        }
                    }
                    if (_this.ObjList && _this.ObjList.length == 1) {
                        _this.ObjectSelected({ option: { value: _this.ObjList[0] } });
                    }
                    else if (_this.ObjList && _this.ObjList.length == 0) {
                        _this.errorMsgSearch = _this.translate.instant('no_matching_records');
                        _this.clearObjectInternal();
                    }
                    if (!_this.ObjList)
                        _this.clearObject();
                }
                else {
                    _this.clearObject();
                }
            });
        });
    };
    AutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'auto-complete',
                    exportAs: 'auto-complete',
                    styles: ["\n    .default-text {\n        color: inherit;\n    }\n    .mat-autocomplete-panel {\n      min-width: 400px;\n    }\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
                    encapsulation: ViewEncapsulation.None,
                    template: "<mat-form-field class=\"full-width\" [ngClass]=\"[options.class? options.class : 'full-width',errorMsgSearch ? 'error-text':'default-text']\"> <mat-icon *ngIf=\"selectedObject == null\" matPrefix>search</mat-icon> <mat-icon *ngIf=\"selectedObject != null\" matPrefix style=\"color: green;font-weight: bolder;font-size: 24px;\">check</mat-icon> <mat-hint align=\"end\" [ngClass]=\"{'default-text': errorMsgSearch === '', 'error-text': errorMsgSearch !== ''}\"> <strong>{{errorMsgSearch ? errorMsgSearch : (selectedObject ? GetObjectValue(selectedObject, options.hintProp):'')}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options.hintLabel ? options.hintLabel : ''}} </mat-hint>  <button type=\"button\" *ngIf=\"selectedObject != null\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearObject()\"> <mat-icon>close</mat-icon> </button> <!--<button matSuffix mat-icon-button aria-label=\"settings\" (click)=\"GetObjProps()\"> <mat-icon>settings</mat-icon> </button>--> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <mat-label>{{options.label}}</mat-label> <input matTooltip=\"{{selectedObject ? GetObjectValue(selectedObject, options.tooltipProp):''}}\" matInput name=\"{{options.id}}\" id=\"{{options.id}}\" [matAutocomplete]=\"auto\" [formControl]=\"bb\" [ngModel]=\"objSearch\" [errorStateMatcher]=\"matcher\" [required]=\"options.required\" [disabled]=\"options.required\" /> <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayObject\" panelWidth=\"400px\" (optionSelected)=\"ObjectSelected($event)\"> <mat-option *ngFor=\"let obj of ObjList\" [value]=\"obj\"> <span class=\"small\">{{GetObjectValue(obj, options.displayProp)}}</span> </mat-option> </mat-autocomplete> </mat-form-field> "
                },] },
    ];
    /** @nocollapse */
    AutoCompleteComponent.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    AutoCompleteComponent.propDecorators = {
        "options": [{ type: Input },],
        "disabled": [{ type: Input },],
        "selectedObject": [{ type: Input },],
        "selectedObjectChange": [{ type: Output },],
        "getData": [{ type: Input },],
    };
    return AutoCompleteComponent;
}());
export { AutoCompleteComponent };
function AutoCompleteComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AutoCompleteComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AutoCompleteComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AutoCompleteComponent.propDecorators;
    /** @type {?} */
    AutoCompleteComponent.prototype.options;
    /** @type {?} */
    AutoCompleteComponent.prototype.disabled;
    /** @type {?} */
    AutoCompleteComponent.prototype.selectedObject;
    /** @type {?} */
    AutoCompleteComponent.prototype.selectedObjectChange;
    /** @type {?} */
    AutoCompleteComponent.prototype.getData;
    /** @type {?} */
    AutoCompleteComponent.prototype.errorMsgSearch;
    /** @type {?} */
    AutoCompleteComponent.prototype.objSearch;
    /** @type {?} */
    AutoCompleteComponent.prototype.ObjList;
    /** @type {?} */
    AutoCompleteComponent.prototype.bb;
    /** @type {?} */
    AutoCompleteComponent.prototype.clearObject;
    /** @type {?} */
    AutoCompleteComponent.prototype.clearObjectInternal;
    /** @type {?} */
    AutoCompleteComponent.prototype.ResetControl;
    /** @type {?} */
    AutoCompleteComponent.prototype.ObjectSelected;
    /** @type {?} */
    AutoCompleteComponent.prototype.setObject;
    /** @type {?} */
    AutoCompleteComponent.prototype.displayObject;
    /** @type {?} */
    AutoCompleteComponent.prototype.GetObjectValue;
    /** @type {?} */
    AutoCompleteComponent.prototype.search;
    /** @type {?} */
    AutoCompleteComponent.prototype.PrepareSearchRepository;
    /** @type {?} */
    AutoCompleteComponent.prototype.translate;
}
