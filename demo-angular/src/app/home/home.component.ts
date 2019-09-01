import {Component, OnInit} from "@angular/core";
import {NgxDateRange, Options} from "../../../../src";

// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts
// https://github.com/NativeScript/nativescript-imagepicker/blob/master/src/imagepicker.android.ts

// import {NgxDateRange} from "../../../../src";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    dateRange: NgxDateRange;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        // const option: Options = {
        //     selectionMode: SelectionMode.SINGLE,
        //     supportsRtl: true
        // };
        this.dateRange  = new NgxDateRange();
    //    this.dateRange.initCalendar();
      //  this.dateRange = dateRange.initCalendar(this);
        // Init your component properties here.
    }
    test() {
        console.log('*222**')
        console.log(this.dateRange.getSelectedDates())
       // console.log(this.dateRange.getSelectedDates())
    }
    onLoaded(args) {
        console.log('2')
        console.log(this.dateRange)
    }
}
