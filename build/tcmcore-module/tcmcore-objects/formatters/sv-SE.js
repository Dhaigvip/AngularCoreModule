/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var /** @type {?} */ formatter = {
    integer: { thousandsSeparator: " ", defaultValue: '0' },
    number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 6, defaultValue: '0,00' },
    currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 6, prefix: "", suffix: "Kr", defaultValue: '0,00' },
    date: {
        dayNames: [
            "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör",
            "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
            "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
        ],
        AmPm: ["fm", "em", "FM", "EM"],
        srcformat: 'Y-m-d',
        newformat: 'Y-m-d',
        parseRe: /[#%\\\/:_;.,\t\s-]/,
        masks: {
            ISO8601Long: "Y-m-d H:i:s",
            ISO8601Short: "Y-m-d",
            ShortDate: "n/j/Y",
            LongDate: "l, F d, Y",
            FullDateTime: "l, F d, Y g:i:s A",
            MonthDay: "F d",
            ShortTime: "g:i A",
            LongTime: "g:i:s A",
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            YearMonth: "F, Y"
        },
        reformatAfterEdit: false,
        userLocalTime: false
    },
};
