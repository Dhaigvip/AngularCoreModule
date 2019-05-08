/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { formatter as english_formatter } from './formatters/en-US';
import { formatter as swedish_formatter } from './formatters/sv-SE';
import { Injectable } from '@angular/core';
var Utilities = /** @class */ (function () {
    function Utilities() {
        var _this = this;
        this.FormatNumber = function (val, locale, decimalPlaces) {
            if (decimalPlaces === void 0) { decimalPlaces = '6'; }
            var /** @type {?} */ opts = null;
            if (!val)
                return '';
            switch (locale) {
                case 'sv-SE':
                    opts = swedish_formatter.number;
                    break;
                case 'en-US':
                    opts = english_formatter.number;
                    break;
                default:
                    opts = english_formatter.number;
            }
            if (decimalPlaces && _this.isNumber(decimalPlaces)) {
                opts.decimalPlaces = decimalPlaces;
            }
            //try converting to real number first
            val = Number(_this.UnFormatNumber(val, locale, decimalPlaces));
            if (!_this.isNumber(val)) {
                val *= 1;
            }
            if (_this.isNumber(val)) {
                var /** @type {?} */ bNegative = (val < 0);
                var /** @type {?} */ sOutput = String(Number(val).toFixed(opts.decimalPlaces));
                var /** @type {?} */ sDecimalSeparator = opts.decimalSeparator || ".";
                var /** @type {?} */ nDotIndex;
                if (_this.isNumber(opts.decimalPlaces)) {
                    // Round to the correct decimal place
                    var /** @type {?} */ nDecimalPlaces = opts.decimalPlaces;
                    var /** @type {?} */ nDecimal = Math.pow(10, nDecimalPlaces);
                    //sOutput = String(Math.round(val * nDecimal) / nDecimal);
                    nDotIndex = sOutput.lastIndexOf(".");
                    if (nDecimalPlaces > 0) {
                        // Add the decimal separator
                        if (nDotIndex < 0) {
                            sOutput += sDecimalSeparator;
                            nDotIndex = sOutput.length - 1;
                        }
                        else if (sDecimalSeparator !== ".") {
                            sOutput = sOutput.replace(".", sDecimalSeparator);
                        }
                        // Add missing zeros
                        while ((sOutput.length - 1 - nDotIndex) < nDecimalPlaces) {
                            sOutput += "0";
                        }
                    }
                }
                if (opts.thousandsSeparator) {
                    var /** @type {?} */ sThousandsSeparator = opts.thousandsSeparator;
                    nDotIndex = sOutput.lastIndexOf(sDecimalSeparator);
                    nDotIndex = (nDotIndex > -1) ? nDotIndex : sOutput.length;
                    var /** @type {?} */ sNewOutput = sOutput.substring(nDotIndex);
                    var /** @type {?} */ nCount = -1, /** @type {?} */ i;
                    for (i = nDotIndex; i > 0; i--) {
                        nCount++;
                        if ((nCount % 3 === 0) && (i !== nDotIndex) && (!bNegative || (i > 1))) {
                            sNewOutput = sThousandsSeparator + sNewOutput;
                        }
                        sNewOutput = sOutput.charAt(i - 1) + sNewOutput;
                    }
                    sOutput = sNewOutput;
                }
                // Prepend prefix
                sOutput = (opts.prefix) ? opts.prefix + sOutput : sOutput;
                // Append suffix
                sOutput = (opts.suffix) ? sOutput + opts.suffix : sOutput;
                return sOutput;
            }
            return val;
        };
        this.UnFormatNumber = function (val, locale, decimalPlaces) {
            if (decimalPlaces === void 0) { decimalPlaces = '6'; }
            if (!val)
                return '';
            var /** @type {?} */ re = /([\.\*\_\'\(\)\{\}\+\?\\])/g;
            var /** @type {?} */ opts = null;
            switch (locale) {
                case 'sv-SE':
                    opts = swedish_formatter.number;
                    break;
                case 'en-US':
                    opts = english_formatter.number;
                    break;
                default:
                    opts = english_formatter.number;
            }
            if (decimalPlaces && _this.isNumber(decimalPlaces)) {
                opts.decimalPlaces = decimalPlaces;
            }
            var /** @type {?} */ sep = opts.thousandsSeparator.replace(re, "\\$1");
            var /** @type {?} */ stripTag = new RegExp(sep, "g");
            var /** @type {?} */ ret = val.toString().replace(stripTag, "").replace(opts.decimalSeparator, '.');
            var /** @type {?} */ sOutput = String(Number(ret).toFixed(opts.decimalPlaces));
            return sOutput;
        };
        this.isNumber = function (o) {
            o = Number(o);
            return typeof o === 'number' && isFinite(o);
        };
        this.isBoolean = function (o) {
            return typeof o === 'boolean';
        };
        this.isObject = function (o) {
            return (o && (typeof o === 'object' || $.isFunction(o))) || false;
        };
        this.isString = function (o) {
            return typeof o === 'string';
        };
        this.isValue = function (o) {
            return (_this.isObject(o) || _this.isString(o) || _this.isNumber(o) || _this.isBoolean(o));
        };
        this.isEmpty = function (o) {
            if (!_this.isString(o) && _this.isValue(o)) {
                return false;
            }
            if (!_this.isValue(o)) {
                return true;
            }
            o = $.trim(o).replace(/\&nbsp\;/ig, '').replace(/\&#160\;/ig, '');
            return o === "";
        };
    }
    Utilities.decorators = [
        { type: Injectable },
    ];
    return Utilities;
}());
export { Utilities };
function Utilities_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Utilities.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Utilities.ctorParameters;
    /** @type {?} */
    Utilities.prototype.FormatNumber;
    /** @type {?} */
    Utilities.prototype.UnFormatNumber;
    /** @type {?} */
    Utilities.prototype.isNumber;
    /** @type {?} */
    Utilities.prototype.isBoolean;
    /** @type {?} */
    Utilities.prototype.isObject;
    /** @type {?} */
    Utilities.prototype.isString;
    /** @type {?} */
    Utilities.prototype.isValue;
    /** @type {?} */
    Utilities.prototype.isEmpty;
}
export var /** @type {?} */ StringConverter = function (value) {
    if (value === null || value === undefined || typeof value === "string")
        return value;
    return value.toString();
};
export var /** @type {?} */ BooleanConverter = function (value) {
    if (value === null || value === undefined || typeof value === "boolean")
        return value;
    return value.toString() === "true";
};
export var /** @type {?} */ NumberConverter = function (value) {
    if (value === null || value === undefined || typeof value === "number")
        return value;
    return parseFloat(value.toString());
};
/**
 * @param {?=} converter
 * @return {?}
 */
export function InputConverter(converter) {
    return function (target, key) {
        if (converter === undefined) {
            var /** @type {?} */ metadata = (/** @type {?} */ (Reflect)).getMetadata("design:type", target, key);
            if (metadata === undefined || metadata === null)
                throw new Error("The reflection metadata could not be found.");
            if (metadata.name === "String")
                converter = StringConverter;
            else if (metadata.name === "Boolean")
                converter = BooleanConverter;
            else if (metadata.name === "Number")
                converter = NumberConverter;
            else
                throw new Error("There is no converter for the given property type '" + metadata.name + "'.");
        }
        var /** @type {?} */ definition = Object.getOwnPropertyDescriptor(target, key);
        if (definition) {
            Object.defineProperty(target, key, {
                get: definition.get,
                set: function (newValue) {
                    definition.set(converter(newValue));
                },
                enumerable: true,
                configurable: true
            });
        }
        else {
            Object.defineProperty(target, key, {
                get: function () {
                    return this["__" + key];
                },
                set: function (newValue) {
                    this["__" + key] = converter(newValue);
                },
                enumerable: true,
                configurable: true
            });
        }
    };
}
