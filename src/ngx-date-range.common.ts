import { View} from "tns-core-modules/ui/core/view";

export class Common extends View {

}
export class Options {
    selectionMode?: 'SINGLE' | 'MULTIPLE' | 'RANGE';
    simpleDateFormat?: string;
    supportsRtl?: boolean;
    disablePrevDates?: boolean;
    selectToday?: boolean;
    constructor() {
        this.selectionMode = 'RANGE';
        this.simpleDateFormat = 'MMMM, YYYY';
        this.supportsRtl = false;
        this.disablePrevDates = false;
        this.selectToday = false;
    }
}

