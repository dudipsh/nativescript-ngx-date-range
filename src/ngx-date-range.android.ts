import {Common, Options} from './ngx-date-range.common';
import SimpleDateFormat = java.text.SimpleDateFormat;
import Locale = java.util.Locale;
import Integer = java.lang.Integer;
import View = android.view.View;
import {CSSType} from "tns-core-modules/ui/core/view";
import {Page} from "tns-core-modules/ui/page";
import {registerElement} from "nativescript-angular";
declare let com: any;
const CalendarPickerView = com.savvi.rangedatepicker.CalendarPickerView;
let calendarView;
let options: Options;

@CSSType("DateRangeOptions")
export class DateRangeOptions {
    public  selectionMode?: string;
    constructor() {
    }
}

export class NgxDateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;
    constructor() {
        super();
    }

    public initCalendar(): any {
        const _option = {
            [options.selectionMode]: CalendarPickerView.SelectionMode[options.selectionMode]
        }
        [options.selectionMode]
        calendarView = new CalendarPickerView(this._context, null);
        let nextYear = java.util.Calendar.getInstance();
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, -1);
        lastYear.add(java.util.Calendar.MONTH, -10);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, -1);

        nextYear.add(java.util.Calendar.YEAR, 2);
        nextYear.add(java.util.Calendar.MONTH, 2);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, 2);
        // @ts-ignore
        const list: java.util.ArrayList<Integer> = new java.util.ArrayList<>();
        const today = new java.util.Date();
        // @ts-ignore
        const arrayList: java.util.ArrayList<java.util.Date>  = new java.util.ArrayList<>();
        calendarView.deactivateDates(list);
        calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat("MMMM, YYYY", Locale.getDefault()))
            .inMode(CalendarPickerView.SelectionMode[_option])
            .withHighlightedDates(arrayList)
            .withSelectedDate(today);
        calendarView.clearSelectedDates();
      //  this.calendarView = calendarView;
     //   console.log(this.calendarView);
        //   this.calendarView.supportsRtl = false


        return calendarView;
    }
    public createNativeView() {
        console.log('**')
        console.log(options)
        this.calendarView = this.initCalendar();
        return this.calendarView;

    }
    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        const nativeView = this.nativeViewProtected;
        this.nativeView.setId(nativeView);
    }

     getSelectedDates() {
         const selectedDates = {
             startDate: null,
             endDate: null,
             originDates: null
         };
        const dates = calendarView.getSelectedDates().toString();
         selectedDates.originDates = dates;
        if (dates.toString()) {
            const toArr = dates.toString().split(',');
            if (toArr.length >= 2) {
                const startDate = toArr[0].replace('[', '').replace(']', '');
                const endDate = toArr[toArr.length - 1].replace(']', '');
                selectedDates.startDate = startDate.toString();
                selectedDates.endDate = endDate.toString().substring(1); // remove extra char space
                return selectedDates;
            } else {
                const startDate = dates.toString().replace('[', '').replace(']', '');
                selectedDates.startDate = startDate.toString();
                selectedDates.endDate = null;
                return selectedDates;
            };
        }
         return selectedDates;
    }
    // public setOnDateSelectedListener(listener: OnDateSelectedListener) {
    //     return this.calendarView.setOnDateSelectedListener(listener);
    // }

    public showOnlyFutureDates() {
        let nextYear = java.util.Calendar.getInstance();
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, 0);
        lastYear.add(java.util.Calendar.MONTH, 0);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, 0);

        nextYear.add(java.util.Calendar.YEAR, 1);
        nextYear.add(java.util.Calendar.MONTH, 1);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, 1);
        const calendarView = new CalendarPickerView(this._context, null);

        calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat("MMMM, YYYY", Locale.getDefault()))
            .withSelectedDate(new java.util.Date())
            .inMode(CalendarPickerView.SelectionMode.MULTIPLE); // [options.selectionMode]
        calendarView.clearSelectedDates();
    }

}

export function create(_options?: Options) {
    options = _options;
    console.log(options)
    registerElement("NgxDateRange", () => require("./").NgxDateRange);
    return new NgxDateRange();
}


