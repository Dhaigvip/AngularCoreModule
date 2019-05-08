/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, ElementRef, LOCALE_ID, Directive, Output, EventEmitter } from '@angular/core';
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(locale, elementRef) {
        var _this = this;
        this.locale = locale;
        this.elementRef = elementRef;
        this.ngModelChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
        this.timeoptions = {
            format: 'H:i',
            datepicker: false,
            step: 30,
            onSelectTime: function (dateText) {
                var /** @type {?} */ d = new Date(dateText);
                var /** @type {?} */ dateStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                //dateStr = this.parse(dateStr);
                //dateStr = this.parse(dateStr);
                _this.ngModelChange.emit(dateStr);
            }
        };
    }
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        $(this.elementRef.nativeElement).datetimepicker(this.timeoptions);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TimePickerComponent.prototype.parse = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            var /** @type {?} */ arr = val.trim().split(':');
            var /** @type {?} */ hr = arr[0], /** @type {?} */ min = arr[1], /** @type {?} */ sec = arr[2];
            if (hr) {
                var /** @type {?} */ temp = Number(hr);
                if (temp < 1)
                    temp = 1;
                if (temp > 23)
                    temp = 23;
                hr = temp.toString();
            }
            if (min) {
                var /** @type {?} */ temp = Number(min);
                if (temp > 59) {
                    temp = 0;
                    (Number(hr) != 23) ? hr += 1 : hr;
                }
                min = temp.toString();
            }
            return hr + ':' + min + ':' + sec;
        }
        return '';
    };
    TimePickerComponent.decorators = [
        { type: Directive, args: [{
                    selector: "[tcm-time]"
                },] },
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: ElementRef, },
    ]; };
    TimePickerComponent.propDecorators = {
        "ngModelChange": [{ type: Output },],
    };
    return TimePickerComponent;
}());
export { TimePickerComponent };
function TimePickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimePickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimePickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TimePickerComponent.propDecorators;
    /** @type {?} */
    TimePickerComponent.prototype.el;
    /** @type {?} */
    TimePickerComponent.prototype.ngModelChange;
    /** @type {?} */
    TimePickerComponent.prototype.timeoptions;
    /** @type {?} */
    TimePickerComponent.prototype.locale;
    /** @type {?} */
    TimePickerComponent.prototype.elementRef;
}
