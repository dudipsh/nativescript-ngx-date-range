import { Common } from './ngx-date-range.common';
export declare class NgxDateRange extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
    public initCalendar: () => NgxDateRange;
    public  getSelectedDates: () => any;
}


interface Options {
    supportsRtl?: boolean;
 }


// export enum SelectionMode {
//     SINGLE = 0,
//     MULTIPLE = 1,
//     RANGE = 2,
// }
