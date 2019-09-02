import {Component, OnInit} from "@angular/core";
import {create, NgxDateRange} from "../../../../src";
import {Options} from "../../../../src/ngx-date-range.common";
import {DateRangeOptions} from "../../../../src/ngx-date-range.android";

// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts
// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    dateRange;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        const options = new Options();
        options.selectionMode = 'SINGLE';
        this.dateRange =  create(options);
      // this.dateRange = new NgxDateRange();
        console.log(this.dateRange);
     }
    test() {
        console.log(this.dateRange.getSelectedDates())
    }

    setOnDateSelectedListener($event) {
        console.log($event)
    }
}
