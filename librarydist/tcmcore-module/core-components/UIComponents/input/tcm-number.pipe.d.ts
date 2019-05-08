import { PipeTransform } from "@angular/core";
import { Utilities } from "../../../tcmcore-objects/tcmcore.utilities";
export declare class tcmnumber implements PipeTransform {
    private utilities;
    constructor(utilities: Utilities);
    transform(value: any, locale: string, decimalPlaces: string): string | number;
    parse(value: any, locale: string, decimalPlaces: string): string;
}
