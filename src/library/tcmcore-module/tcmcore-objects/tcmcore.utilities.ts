import { formatter as english_formatter } from './formatters/en-US';
import { formatter as swedish_formatter } from './formatters/sv-SE';
import { Injectable } from '@angular/core';

declare var $: any;
@Injectable()
export class Utilities {

  FormatNumber = (val: number, locale: string, decimalPlaces: string = '6') => {
    var opts = null;
    if (!val) return '';
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
    if (decimalPlaces && this.isNumber(decimalPlaces)) {
      opts.decimalPlaces = decimalPlaces;
    }
    //try converting to real number first
    val = Number(this.UnFormatNumber(val, locale, decimalPlaces));

    if (!this.isNumber(val)) {
      val *= 1;
    }
    if (this.isNumber(val)) {
      var bNegative = (val < 0);

      var sOutput = String(Number(val).toFixed(opts.decimalPlaces));
      var sDecimalSeparator = opts.decimalSeparator || ".";
      var nDotIndex;
      if (this.isNumber(opts.decimalPlaces)) {
        // Round to the correct decimal place
        var nDecimalPlaces = opts.decimalPlaces;
        var nDecimal = Math.pow(10, nDecimalPlaces);
        //sOutput = String(Math.round(val * nDecimal) / nDecimal);
        nDotIndex = sOutput.lastIndexOf(".");
        if (nDecimalPlaces > 0) {
          // Add the decimal separator
          if (nDotIndex < 0) {
            sOutput += sDecimalSeparator;
            nDotIndex = sOutput.length - 1;
          }
          // Replace the "."
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
        var sThousandsSeparator = opts.thousandsSeparator;
        nDotIndex = sOutput.lastIndexOf(sDecimalSeparator);
        nDotIndex = (nDotIndex > -1) ? nDotIndex : sOutput.length;
        var sNewOutput = sOutput.substring(nDotIndex);
        var nCount = -1, i;
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
  }
  UnFormatNumber = (val, locale: string, decimalPlaces: string = '6') => {
    if (!val) return '';
    var re = /([\.\*\_\'\(\)\{\}\+\?\\])/g;
    var opts = null;
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
    if (decimalPlaces && this.isNumber(decimalPlaces)) {
      opts.decimalPlaces = decimalPlaces;
    }
    var sep = opts.thousandsSeparator.replace(re, "\\$1");
    var stripTag = new RegExp(sep, "g");
    var ret = val.toString().replace(stripTag, "").replace(opts.decimalSeparator, '.');
    var sOutput = String(Number(ret).toFixed(opts.decimalPlaces));
    return sOutput;
  }
  isNumber = (o) => {
    o = Number(o);
    return typeof o === 'number' && isFinite(o);
  }
  isBoolean = (o) => {
    return typeof o === 'boolean';
  }
  isObject = (o) => {
    return (o && (typeof o === 'object' || $.isFunction(o))) || false;
  }
  isString = (o) => {
    return typeof o === 'string';
  }

  isValue = (o) => {
    return (this.isObject(o) || this.isString(o) || this.isNumber(o) || this.isBoolean(o));
  }
  isEmpty = (o) => {
    if (!this.isString(o) && this.isValue(o)) {
      return false;
    }
    if (!this.isValue(o)) {
      return true;
    }
    o = $.trim(o).replace(/\&nbsp\;/ig, '').replace(/\&#160\;/ig, '');
    return o === "";
  }
}
export var StringConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "string")
    return value;

  return value.toString();
}

export var BooleanConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "boolean")
    return value;

  return value.toString() === "true";
}

export var NumberConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "number")
    return value;
  return parseFloat(value.toString());
}
export function InputConverter(converter?: (value: any) => any) {
  return (target: Object, key: string) => {
    if (converter === undefined) {
      var metadata = (<any>Reflect).getMetadata("design:type", target, key);
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

    var definition = Object.getOwnPropertyDescriptor(target, key);
    if (definition) {
      Object.defineProperty(target, key, {
        get: definition.get,
        set: newValue => {
          definition.set(converter(newValue));
        },
        enumerable: true,
        configurable: true
      });
    } else {
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
