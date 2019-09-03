import {Common, Options} from './ngx-date-range.common';

export declare class NgxDateRange extends Common {


    public  getSelectedDates: () => any;
    public  options: (_options: Options) => void;

}

export function create(options?: Options): NgxDateRange;
