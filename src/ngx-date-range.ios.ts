import {Common, Options} from './ngx-date-range.common';
import {View} from "tns-core-modules/ui/core/view";
import {Color} from "tns-core-modules/color";
declare var CalendarDateRangePickerViewController;
var options: Options;

export class NgxDateRange extends Common {
    dateRangePickerViewController;
    _hostView: View;

    constructor( hostView?: View) {
        super();
        this._hostView = hostView;
    }
    get hostView() {
        return this._hostView;
    }

    public static options(_options: Options) {
        options = _options;
    }

    present() {
        const self = this;
        return new Promise<void>((resolve, reject) => {
            let dateRangePickerViewControllerDelegate =  new CalendarDateRangePickerViewController()
            dateRangePickerViewControllerDelegate._resolve = resolve;
            dateRangePickerViewControllerDelegate._reject = reject;
            this.dateRangePickerViewController.delegate = dateRangePickerViewControllerDelegate;
            this.dateRangePickerViewController.titleText = "lalalalala";
            this.dateRangePickerViewController.selectedStartDate = new Date();
            this.dateRangePickerViewController.selectedColor = new Color('blue');
           // CalendarDateRangePickerViewController.navigationController.present(this.dateRangePickerViewController, true, null)
            //  this.hostController.presentingViewController(self.dateRangePickerViewController)
        //    this.hostController.presentViewControllerAnimatedCompletion(self.dateRangePickerViewController, true, null);
        });
    }
}

export class CalendarDateRangePickerViewControllerDelegate  extends NSObject  {
    public _resolve: any;
    public _reject: any;


    didCancelPickingDateRange() {
        this._reject(null);
    }
    didPickDateRange(startDate, endDate) {
     //   console.log(startDate)
       // this._resolve(startDate);
    }
    private registerToGlobal(): any {
        (<any>global).CalendarDateRangePickerViewControllerDelegate = this;
    }
    static new(): CalendarDateRangePickerViewControllerDelegate {
        const instance = <CalendarDateRangePickerViewControllerDelegate>super.new(); // calls new() on the NSObject

        instance.registerToGlobal();

        return instance;
    }
}


export class RangeDates {
    startDate: Date;
    endDate: Date;
}


import {registerElement} from "nativescript-angular";
registerElement("NgxDateRange", () => require("./").NgxDateRange);
