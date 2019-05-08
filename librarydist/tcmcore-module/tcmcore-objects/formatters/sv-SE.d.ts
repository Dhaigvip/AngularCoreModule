export declare var formatter: {
    integer: {
        thousandsSeparator: string;
        defaultValue: string;
    };
    number: {
        decimalSeparator: string;
        thousandsSeparator: string;
        decimalPlaces: number;
        defaultValue: string;
    };
    currency: {
        decimalSeparator: string;
        thousandsSeparator: string;
        decimalPlaces: number;
        prefix: string;
        suffix: string;
        defaultValue: string;
    };
    date: {
        dayNames: string[];
        monthNames: string[];
        AmPm: string[];
        srcformat: string;
        newformat: string;
        parseRe: RegExp;
        masks: {
            ISO8601Long: string;
            ISO8601Short: string;
            ShortDate: string;
            LongDate: string;
            FullDateTime: string;
            MonthDay: string;
            ShortTime: string;
            LongTime: string;
            SortableDateTime: string;
            UniversalSortableDateTime: string;
            YearMonth: string;
        };
        reformatAfterEdit: boolean;
        userLocalTime: boolean;
    };
};
