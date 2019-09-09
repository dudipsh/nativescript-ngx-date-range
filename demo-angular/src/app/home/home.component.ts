import {Component, OnInit} from "@angular/core";
import {create, NgxDateRange} from "../../../../src";
import {Options} from "../../../../src/ngx-date-range.common";
import {Page} from "tns-core-modules/ui/page";

// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts
// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    dateRange: NgxDateRange;
    constructor(private page: Page) {
    }

    ngOnInit(): void {
          const options = new Options();
        options.selectionMode = 'RANGE';
          options.selectToday = true;
         options.disablePrevDates = true;
         options.language = {
             countryCode: 'ISR',
             languageCode: 'heb'
         };
        this.dateRange =  create(options);
     }
    selectedDates() {
       console.log(this.dateRange.getSelectedDates())
    }

}
