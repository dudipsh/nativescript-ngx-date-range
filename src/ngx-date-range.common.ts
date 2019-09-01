import {CSSType, View} from "tns-core-modules/ui/core/view";
import {registerElement} from "nativescript-angular";

@CSSType("NgxDateRange")

export class Common extends View {
}


registerElement("NgxDateRange", () => require("./").NgxDateRange);
