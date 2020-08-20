import { Common, Options } from './ngx-date-range.common';
import { topmost } from 'tns-core-modules/ui/frame';
import { registerElement } from 'nativescript-angular';

let options: Options = new Options();

class CalendarDateRangePickerViewControllerDelegateImpl extends NSObject
  implements CalendarDateRangePickerViewControllerDelegate {
  static ObjCProtocols = [CalendarDateRangePickerViewControllerDelegate];

  static new(): CalendarDateRangePickerViewControllerDelegateImpl {
    return <CalendarDateRangePickerViewControllerDelegateImpl>super.new(); // calls new() on the NSObject
  }

  didPickDateRangeWithStartDateEndDate(startDate: Date, endDate: Date): void {
    console.log('didPickDateRangeWithStartDateEndDate', { startDate, endDate });
  }
  didSelectEndDateWithEndDate(endDate: Date): void {
    console.log('didSelectEndDateWithEndDate', { endDate });
  }
  didSelectStartDateWithStartDate(startDate: Date): void {
    console.log('didSelectStartDateWithStartDate', { startDate });
  }

  didCancelPickingDateRange(): void {
    console.log('didCancelPickingDateRange');
    const currentViewController = topmost().viewController as UIViewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
      console.log('Date picker dismissed');
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
    const nativeView = CalendarDateRangePickerViewController.new().initWithCollectionViewLayout(
      UICollectionViewFlowLayout.new().init()
    );

    this.delegate = CalendarDateRangePickerViewControllerDelegateImpl.new().init();

    nativeView.delegate = this.delegate;

    nativeView.minimumDate = new Date();
    nativeView.maximumDate = new Date();
    nativeView.maximumDate.setFullYear(
      nativeView.maximumDate.getFullYear() + 1
    );

    nativeView.selectedStartDate = new Date();

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
  // initializeVars() {
  //   console.log('=-=-=-=-=-initializeVars=-=-=-=-=-=-=-=-');
  //   const calendar = Date()['currentCalendar'];
  //   const currentDate = Date().today;
  //   const startDate = currentDate.startDayOfMonth;
  //   const numberOfDaysInMonth = currentDate.daysIntMonth;

  //   const langCode = 'he';
  //   let lcode = (calendar.locale.languageCode = {
  //     langCode = lcode,
  //   });
  //   direction = NSLocale.characterDirection(forLanguage: langCode).rawValue == 2 ? .rightToLeft : .leftToRight
  // }

  getSelectedDates() {}
}
export function create(_options?: Options) {
  options = _options;
  return new NgxDateRange();
}
registerElement('NgxDateRange', () => require('./').NgxDateRange);
