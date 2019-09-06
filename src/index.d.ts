import {Common, Options} from './ngx-date-range.common';

export declare class NgxDateRange extends Common {


    public  getSelectedDates: () => any;
    public  options: (_options: Options) => void;
    public start: (view) => any;
}

export function create(options?: Options): NgxDateRange;
