import {Common, Options} from './ngx-date-range.common';
import {DateRangeOptions} from "./ngx-date-range.android";

export declare class NgxDateRange extends Common {


    public  getSelectedDates: () => any;
    public  options: (_options: Options) => void;

    //options: Options;
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  //   public initCalendar: () => NgxDateRange;

}


// export enum SelectionMode {
//     SINGLE = 0,
//     MULTIPLE = 1,
//     RANGE = 2,
// }
