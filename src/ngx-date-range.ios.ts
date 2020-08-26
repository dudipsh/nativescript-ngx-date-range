import { Common, Options } from './ngx-date-range.common';
import { topmost } from 'tns-core-modules/ui/frame';
import { registerElement } from 'nativescript-angular';

let options: Options = new Options();
let selectedDates = {
  startDate: null,
  endDate: null,
  originDates: null
};


class CalendarDateRangePickerViewControllerDelegateImpl
  extends NSObject
  implements CalendarDateRangePickerViewControllerDelegate {
  static ObjCProtocols = [CalendarDateRangePickerViewControllerDelegate];

  static new(): CalendarDateRangePickerViewControllerDelegateImpl {
    return <CalendarDateRangePickerViewControllerDelegateImpl>super.new(); // calls new() on the NSObject
  }

  didPickDateRangeWithStartDateEndDate(startDate: Date, endDate: Date): void {
    console.log('=-=-=-=-Done=-=-=-=-=-=-=-');
    //console.log('didPickDateRangeWithStartDateEndDate', { startDate, endDate });
    const currentViewController = topmost().viewController as UIViewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
      selectedDates.startDate = startDate;
      selectedDates.endDate = endDate;
    });
  }
  didSelectEndDateWithEndDate(endDate: Date): void {
    // console.log('didSelectEndDateWithEndDate', { endDate });
    // console.log(
    //   endDate.getDate() +
    //     ' - ' +
    //     endDate.getMonth() +
    //     ' - ' +
    //     endDate.getFullYear()
    // );
  }

  didSelectStartDateWithStartDate(startDate: Date): void {
    // console.log(
    //   startDate.getDate() +
    //     ' - ' +
    //     startDate.getMonth() +
    //     ' - ' +
    //     startDate.getFullYear()
    // );
    // console.log('didSelectStartDateWithStartDate', { startDate });
  }

  didCancelPickingDateRange(): void {
    console.log('didCancelPickingDateRange');
    const currentViewController = topmost().viewController as UIViewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
      console.log('Date picker dismissed');
    });
  }

  didPickSingleDateWithStartDate(startDate: Date): void {
    console.log('Single Date Selection');
    const currentViewController = topmost().viewController as UIViewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
      selectedDates.startDate = startDate;
      selectedDates.endDate = startDate;
    });
  }
}

export class NgxDateRange extends Common {
  delegate: CalendarDateRangePickerViewControllerDelegateImpl;
  constructor() {
    super();
    //   this.showDateRangePicker();
  }
  showDateRangePicker() {
    resetSelectedDates();
    const nativeView = CalendarDateRangePickerViewController.new().initWithCollectionViewLayout(
      UICollectionViewFlowLayout.new().init()
    );

    this.delegate = CalendarDateRangePickerViewControllerDelegateImpl.new().init();

    // nativeView
    nativeView.delegate = this.delegate;
    var myCurrentDate = new Date();
    var maximumDateYear = new Date(
      myCurrentDate.setFullYear(myCurrentDate.getFullYear() + 2)
    );
    nativeView.minimumDate = new Date();
    nativeView.maximumDate = maximumDateYear;
    nativeView.calenderSelectionStyle = options.selectionMode;

    const navigationController = UINavigationController.new().initWithRootViewController(
      nativeView
    );

    const currentViewController = topmost().viewController as UIViewController;

    currentViewController.presentViewControllerAnimatedCompletion(
      navigationController,
      true,
      () => {
        // TODO: Pending of implementation
        console.log('Date Picker presented');
      }
    );
    currentViewController['allowsMultipleSelection'] = false;
  }

  getSelectedDates() {
    return selectedDates;
  }
}
export function create(_options?: Options) {
  options = _options;
  // options.selectionMode = 'SINGLE';
  console.log('options::::: ', options);
  return new NgxDateRange();
}

function resetSelectedDates() {
  selectedDates = {
    startDate: null,
    endDate: null,
    originDates: null
  };
}

registerElement('NgxDateRange', () => require('./').NgxDateRange);
