/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { Utilities } from "../../../tcmcore-objects/tcmcore.utilities";

@Injectable()
@Pipe({ name: 'tcmnumber', pure: true })
export class tcmnumber implements PipeTransform {
  constructor(private utilities: Utilities) { }

  transform(value: any, locale: string, decimalPlaces:string) {
    return this.utilities.FormatNumber(value, locale, decimalPlaces);
  }
  parse(value: any, locale: string, decimalPlaces: string) {
    return this.utilities.UnFormatNumber(value, locale, decimalPlaces);
  }
}
