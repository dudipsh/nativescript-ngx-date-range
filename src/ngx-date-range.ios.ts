import {Common, Options} from './ngx-date-range.common';
import {registerElement} from "nativescript-angular";
import {topmost} from "tns-core-modules/ui/frame";
import {View} from "tns-core-modules/ui/core/view";
declare var CalendarDateRangePickerViewController;

var options: Options;
registerElement("NgxDateRange", () => require("./").NgxDateRange);

export class NgxDateRange extends Common {
    public startDate: Date;
    public endDate: Date;
    constructor() {
        super();
    }
}

export function create(_options) {
    return  {};
}
