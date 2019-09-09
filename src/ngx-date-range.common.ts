import { View} from "tns-core-modules/ui/core/view";

export class Common extends View {

}
export class Options {
    selectionMode?: 'SINGLE' | 'MULTIPLE' | 'RANGE';
    initialDate?: string;
    simpleDateFormat?: string;
    supportsRtl?: boolean;
    disablePrevDates?: boolean;
    selectToday?: boolean;
    language: {
        languageCode: string,
        countryCode: string
    };
    constructor() {
        this.selectionMode = 'RANGE';
        this.simpleDateFormat = 'MMMM, YYYY';
        this.initialDate = null;
        this.supportsRtl = false;
        this.disablePrevDates = false;
        this.selectToday = false;
        this.language = {
            languageCode: null,
            countryCode: null
        };
    }
}

