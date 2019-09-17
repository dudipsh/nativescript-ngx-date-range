import { Common } from './ngx-date-range.common';
import { topmost } from 'tns-core-modules/ui/frame';

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

  showDateRangePicker() {
    const nativeView = CalendarDateRangePickerViewController.new().initWithCollectionViewLayout(
      UICollectionViewFlowLayout.new().init(),
    );

    this.delegate = CalendarDateRangePickerViewControllerDelegateImpl.new().init();

    nativeView.delegate = this.delegate;

    const navigationController = UINavigationController.new().initWithRootViewController(
      nativeView,
    );

    const currentViewController = topmost().viewController as UIViewController;

    currentViewController.presentViewControllerAnimatedCompletion(
      navigationController,
      true,
      () => {
        // TODO: Pending of implementation
        console.log('Date Picker presented');
      },
    );
  }
}
