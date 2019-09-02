import {CSSType, View} from "tns-core-modules/ui/core/view";
import {registerElement} from "nativescript-angular";

// @CSSType("NgxDateRange")
//
// @CSSType("Options")
export class Common extends View {

}
export class Options {
    supportsRtl?: boolean;
    selectionMode?: 'SINGLE' | 'MULTIPLE' | 'RANGE';

    constructor() {
        this.selectionMode = 'RANGE';
        this.supportsRtl = false;
    }
}

registerElement("NgxDateRange", () => require("./").NgxDateRange);
