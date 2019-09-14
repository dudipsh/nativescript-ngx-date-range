import {Common, Options} from './ngx-date-range.common';
import SimpleDateFormat = java.text.SimpleDateFormat;
import Locale = java.util.Locale;
import Integer = java.lang.Integer;
import {registerElement} from "nativescript-angular";

declare let com: any;
let calendarView;


const CalendarPickerView = com.nativescript.daterange.CalendarPickerView;
let options: Options = new Options();


export class NgxDateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;
    constructor() {
        super();
    }
    private getCalendarRangeValues() {
        let next = 2;
        let back = -1;
        if (options.disablePrevDates) {
            back = 0;
            next = 1;
        };
        const calender = {
            lastYear: back,
            lastMonth: back,
            lastDayOfMoth: back,
            nextYear: next,
            nextMonth: next,
            nextDayOfMoth: next,
        };
        return calender;
    }
    public initCalendar(): any {
        const dateRange = this.getCalendarRangeValues();
        calendarView = new CalendarPickerView(this._context, null);

        let nextYear = java.util.Calendar.getInstance();
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, dateRange.lastYear);
        lastYear.add(java.util.Calendar.MONTH, dateRange.lastYear);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, dateRange.lastYear);

        nextYear.add(java.util.Calendar.YEAR, dateRange.nextYear);
        nextYear.add(java.util.Calendar.MONTH, dateRange.nextYear);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, dateRange.nextYear);
        // @ts-ignore
        const list: java.util.ArrayList<Integer> = new java.util.ArrayList<>();
        let today = new java.util.Date();
        if (options.initialDate) {
            today = new java.util.Date(options.initialDate);
        }
        // @ts-ignore
        const arrayList: java.util.ArrayList<java.util.Date>  = new java.util.ArrayList<>();
        calendarView.deactivateDates(list);

        let local = Locale.getDefault();
        if (options.language.languageCode && options.language.countryCode) {
            const location = new Locale(options.language.languageCode);
            Locale.setDefault(location)
            local = new Locale(options.language.languageCode, options.language.countryCode);
        }

        calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat(options.simpleDateFormat, local))
            .inMode(CalendarPickerView.SelectionMode[options.selectionMode])
            .withHighlightedDates(arrayList)
            .withSelectedDate(today);
        if (!options.selectToday) {
            calendarView.clearSelectedDates();
        }
        calendarView.supportsRtl = options.supportsRtl;
        return calendarView;
    }
    public createNativeView() {
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

}
import { android as androidApp } from "tns-core-modules/application";
export function create(_options?: Options) {
    options = _options;
    return new NgxDateRange();
   //  console.log(11)
   //   const range = new NgxRange(androidApp.context);
   //  console.log(range.GetSavviCalendar)
   // range.CalendarPickerView();
   // return NgxDateRange.CalendarPickerView()
 //   console.log(1)
 //    const test = new com.nativescript.daterange.NgxRange(androidApp.context)
  //  console.log(test)

  //  return test.CalendarPickerView();
 //   console.log( com.nativescript.daterange.NgxDateRange)
  //  ngx.CreateCalendar(this)
}
registerElement("NgxDateRange", () => require("./").NgxDateRange);


