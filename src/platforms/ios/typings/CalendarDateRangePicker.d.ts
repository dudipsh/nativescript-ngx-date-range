declare var CalendarDateRangePickerVersionNumber: number;

declare var CalendarDateRangePickerVersionString: interop.Reference<number>;

declare class CalendarDateRangePickerViewController
  extends UICollectionViewController
  implements UICollectionViewDelegateFlowLayout {
  static alloc(): CalendarDateRangePickerViewController; // inherited from NSObject

  static new(): CalendarDateRangePickerViewController; // inherited from NSObject

  cellFont: UIFont;

  cellHighlightedColor: UIColor;

  delegate: CalendarDateRangePickerViewControllerDelegate;

  disabledDates: NSArray<Date>;

  headerFont: UIFont;

  highlightedLabelColor: UIColor;

  maximumDate: Date;

  minimumDate: Date;

  selectedColor: UIColor;

  selectedEndDate: Date;

  selectedLabelColor: UIColor;

  selectedStartDate: Date;

  titleText: string;

  calenderSelectionStyle: string;

  static readonly defaultCellFontSize: number;

  static readonly defaultHeaderFontSize: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  collectionViewCanFocusItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): boolean;

  collectionViewCanPerformActionForItemAtIndexPathWithSender(
    collectionView: UICollectionView,
    action: string,
    indexPath: NSIndexPath,
    sender: any
  ): boolean;

  collectionViewDidDeselectItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidEndDisplayingCellForItemAtIndexPath(
    collectionView: UICollectionView,
    cell: UICollectionViewCell,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(
    collectionView: UICollectionView,
    view: UICollectionReusableView,
    elementKind: string,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidHighlightItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidSelectItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidUnhighlightItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): void;

  collectionViewDidUpdateFocusInContextWithAnimationCoordinator(
    collectionView: UICollectionView,
    context: UICollectionViewFocusUpdateContext,
    coordinator: UIFocusAnimationCoordinator
  ): void;

  collectionViewLayoutInsetForSectionAtIndex(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    section: number
  ): UIEdgeInsets;

  collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    section: number
  ): number;

  collectionViewLayoutMinimumLineSpacingForSectionAtIndex(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    section: number
  ): number;

  collectionViewLayoutReferenceSizeForFooterInSection(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    section: number
  ): CGSize;

  collectionViewLayoutReferenceSizeForHeaderInSection(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    section: number
  ): CGSize;

  collectionViewLayoutSizeForItemAtIndexPath(
    collectionView: UICollectionView,
    collectionViewLayout: UICollectionViewLayout,
    indexPath: NSIndexPath
  ): CGSize;

  collectionViewPerformActionForItemAtIndexPathWithSender(
    collectionView: UICollectionView,
    action: string,
    indexPath: NSIndexPath,
    sender: any
  ): void;

  collectionViewShouldDeselectItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): boolean;

  collectionViewShouldHighlightItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): boolean;

  collectionViewShouldSelectItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): boolean;

  collectionViewShouldShowMenuForItemAtIndexPath(
    collectionView: UICollectionView,
    indexPath: NSIndexPath
  ): boolean;

  collectionViewShouldSpringLoadItemAtIndexPathWithContext(
    collectionView: UICollectionView,
    indexPath: NSIndexPath,
    context: UISpringLoadedInteractionContext
  ): boolean;

  collectionViewShouldUpdateFocusInContext(
    collectionView: UICollectionView,
    context: UICollectionViewFocusUpdateContext
  ): boolean;

  collectionViewTargetContentOffsetForProposedContentOffset(
    collectionView: UICollectionView,
    proposedContentOffset: CGPoint
  ): CGPoint;

  collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(
    collectionView: UICollectionView,
    originalIndexPath: NSIndexPath,
    proposedIndexPath: NSIndexPath
  ): NSIndexPath;

  collectionViewTransitionLayoutForOldLayoutNewLayout(
    collectionView: UICollectionView,
    fromLayout: UICollectionViewLayout,
    toLayout: UICollectionViewLayout
  ): UICollectionViewTransitionLayout;

  collectionViewWillDisplayCellForItemAtIndexPath(
    collectionView: UICollectionView,
    cell: UICollectionViewCell,
    indexPath: NSIndexPath
  ): void;

  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(
    collectionView: UICollectionView,
    view: UICollectionReusableView,
    elementKind: string,
    indexPath: NSIndexPath
  ): void;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  indexPathForPreferredFocusedViewInCollectionView(
    collectionView: UICollectionView
  ): NSIndexPath;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

  scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

  scrollViewDidEndDraggingWillDecelerate(
    scrollView: UIScrollView,
    decelerate: boolean
  ): void;

  scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

  scrollViewDidEndZoomingWithViewAtScale(
    scrollView: UIScrollView,
    view: UIView,
    scale: number
  ): void;

  scrollViewDidScroll(scrollView: UIScrollView): void;

  scrollViewDidScrollToTop(scrollView: UIScrollView): void;

  scrollViewDidZoom(scrollView: UIScrollView): void;

  scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

  scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

  scrollViewWillBeginDragging(scrollView: UIScrollView): void;

  scrollViewWillBeginZoomingWithView(
    scrollView: UIScrollView,
    view: UIView
  ): void;

  scrollViewWillEndDraggingWithVelocityTargetContentOffset(
    scrollView: UIScrollView,
    velocity: CGPoint,
    targetContentOffset: interop.Pointer | interop.Reference<CGPoint>
  ): void;

  self(): this;

  viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface CalendarDateRangePickerViewControllerDelegate {
  didCancelPickingDateRange(): void;

  didPickDateRangeWithStartDateEndDate(startDate: Date, endDate: Date): void;

  didSelectEndDateWithEndDate(endDate: Date): void;

  didSelectStartDateWithStartDate(startDate: Date): void;

  didPickSingleDateWithStartDate(startDate: Date): void;
}
declare var CalendarDateRangePickerViewControllerDelegate: {
  prototype: CalendarDateRangePickerViewControllerDelegate;
};
