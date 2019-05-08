export declare class Utilities {
    FormatNumber: (val: number, locale: string, decimalPlaces?: string) => string | number;
    UnFormatNumber: (val: any, locale: string, decimalPlaces?: string) => string;
    isNumber: (o: any) => boolean;
    isBoolean: (o: any) => boolean;
    isObject: (o: any) => any;
    isString: (o: any) => boolean;
    isValue: (o: any) => any;
    isEmpty: (o: any) => boolean;
}
export declare var StringConverter: (value: any) => any;
export declare var BooleanConverter: (value: any) => any;
export declare var NumberConverter: (value: any) => any;
export declare function InputConverter(converter?: (value: any) => any): (target: Object, key: string) => void;
