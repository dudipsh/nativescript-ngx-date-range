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
    console.log('=-=-=-=-Done=-=-=-=-=-=-=-');
    //console.log('didPickDateRangeWithStartDateEndDate', { startDate, endDate });
    const currentViewController = topmost().viewController as UIViewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
      console.log('Date picker closed on Done.');
      console.log(
        'Start Date: ' +
          startDate.getDate() +
          '-' +
          startDate.getMonth() +
          '-' +
          startDate.getFullYear()
      );
      console.log(
        'End Date: ' +
          endDate.getDate() +
          '-' +
          endDate.getMonth() +
          '-' +
          endDate.getFullYear()
      );
      alert(
        'Start Date: ' +
          startDate.getDate() +
          ' -' +
          startDate.getMonth() +
          '-' +
          startDate.getFullYear() +
          '\nEnd Date: ' +
          endDate.getDate() +
          '-' +
          endDate.getMonth() +
          '-' +
          endDate.getFullYear()
      );
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
    
    // nativeView
    nativeView.delegate = this.delegate;
    var myCurrentDate = new Date();
    var maximumDateYear = new Date(
      myCurrentDate.setFullYear(myCurrentDate.getFullYear() + 2)
    );
    nativeView.minimumDate = new Date();
    nativeView.maximumDate = maximumDateYear;

    // If you want to show selected range on calendar
    // nativeView.selectedStartDate = new Date();
    // var todayDate = new Date();
    // var myEndDate = new Date(todayDate);
    // myEndDate.setDate(myEndDate.getDate() + 8);
    // nativeView.selectedEndDate = myEndDate;

    console.log('nativeView :::::::::: ', nativeView);

    //alert(myEndDate);
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
  // options.selectionMode = 'SINGLE';
  console.log('options::::: ', options);
  return new NgxDateRange();
}
registerElement('NgxDateRange', () => require('./').NgxDateRange);
