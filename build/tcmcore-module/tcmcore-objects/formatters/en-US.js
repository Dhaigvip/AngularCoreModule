/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var /** @type {?} */ formatter = {
    integer: { thousandsSeparator: ",", defaultValue: '0' },
    number: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 6, defaultValue: '0.00' },
    currency: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 6, prefix: "", suffix: "", defaultValue: '0.00' },
    date: {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        AmPm: ["am", "pm", "AM", "PM"],
        srcformat: 'Y-m-d',
        newformat: 'n/j/Y',
        parseRe: /[#%\\\/:_;.,\t\s-]/,
        masks: {
            // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
            // and see http://docs.jquery.com/UI/Datepicker/formatDate
            // and https://github.com/jquery/globalize#dates for alternative formats used frequently
            // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
            // information about date, time, numbers and currency formats used in different countries
            // one should just convert the information in PHP format
            ISO8601Long: "Y-m-d H:i:s",
            ISO8601Short: "Y-m-d",
            // short date:
            //    n - Numeric representation of a month, without leading zeros
            //    j - Day of the month without leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            // example: 3/1/2012 which means 1 March 2012
            ShortDate: "n/j/Y",
            // in jQuery UI Datepicker: "M/d/yyyy"
            // long date:
            //    l - A full textual representation of the day of the week
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            LongDate: "l, F d, Y",
            // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
            // long date with long time:
            //    l - A full textual representation of the day of the week
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    s - Seconds, with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            FullDateTime: "l, F d, Y g:i:s A",
            // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
            // month day:
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            MonthDay: "F d",
            // in jQuery UI Datepicker: "MMMM dd"
            // short time (without seconds)
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            ShortTime: "g:i A",
            // in jQuery UI Datepicker: "h:mm tt"
            // long time (with seconds)
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    s - Seconds, with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            LongTime: "g:i:s A",
            // in jQuery UI Datepicker: "h:mm:ss tt"
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            // month with year
            //    Y - A full numeric representation of a year, 4 digits
            //    F - A full textual representation of a month
            YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
        },
        reformatAfterEdit: false,
        userLocalTime: false
    }
};
