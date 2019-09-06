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
    reject;
    resolve;
    private _delegate: CalendarDateRangePickerViewControllerDelegateImpl;
    dateRangePickerViewController
    constructor() {
        super();
        const collectionViewLayout =  UICollectionViewFlowLayout.alloc();
        this.dateRangePickerViewController =  CalendarDateRangePickerViewController.new()
        this._delegate = CalendarDateRangePickerViewControllerDelegateImpl.initWithOwner(new WeakRef<NgxDateRange>(this));
        this.dateRangePickerViewController.delegate = this._delegate;

         //   .present(this.dateRangePickerViewController.dateRangePickerViewController, true, null)

        // const collectionViewLayout =  UICollectionViewFlowLayout.alloc()
        // let dateRangePickerViewController = CalendarDateRangePickerViewController(collectionViewLayout)
        // dateRangePickerViewController.delegate = CalendarDateRangePickerViewControllerDelegateImpl

        // let delegate: DateRangePickerDelegateImpl = DateRangePickerDelegateImpl.new();
        //
        // let dateRangePickerViewController = CalendarDateRangePickerViewController.new()
        // dateRangePickerViewController.delegate = delegate;
        // let navigationController = new UINavigationController(dateRangePickerViewController)
        // nativeView = view.nativeView;
    }
    // public initNativeView() {
    //    // dateRangePickerViewController.delegate = this._delegate;
    //     let navigationController = new UINavigationController(this.dateRangePickerViewController)
    //     navigationController.setViewControllersAnimated(this.dateRangePickerViewController, true)
    // }
    //
    // public onLoaded() {
    //     super.onLoaded();
    //     (this.nativeViewProtected as UINavigationController).delegate = this._delegate;
    // }
}

export function create(_options) {
    return new NgxDateRange();
}


export class CalendarDateRangePickerViewControllerDelegate {
    didCancelPickingDateRange: () => void;
    didPickDateRange: (startDate: Date, endDate: Date) => void;
}

@ObjCClass(CalendarDateRangePickerViewControllerDelegate)
class CalendarDateRangePickerViewControllerDelegateImpl extends NSObject {
    public static initWithOwner(owner: WeakRef<NgxDateRange>): CalendarDateRangePickerViewControllerDelegateImpl {
        const delegate = CalendarDateRangePickerViewControllerDelegateImpl.new() as CalendarDateRangePickerViewControllerDelegateImpl;
        delegate._owner = owner;

        return delegate;
    }

    private _owner: WeakRef<NgxDateRange>;
    private startDate: Date;
    private endDate: Date;

    public didCancelPickingDateRange() {

    }

    public didPickDateRange(startDate: Date, endDate: Date) {
        this.startDate = startDate;
        this.endDate = endDate;
        this._owner.get().startDate = startDate;
        this._owner.get().endDate = startDate;

    }

}
