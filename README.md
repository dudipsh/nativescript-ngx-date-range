# Nativescript Date Range

Date Range Picker plugin for Nativescript
Support RTL
![nativesceipt date range](https://raw.githubusercontent.com/dudipsh/nativescript-ngx-date-range/master/screenshots/calendar_he.png)
![nativesceipt date range](https://raw.githubusercontent.com/dudipsh/nativescript-ngx-date-range/master/screenshots/calendar_ios.png)

## Installation

```javascript
npm i nativescript-ngx-date-range --save
```

## Usage 

#### app.module
```typescript
export class HomeComponent implements OnInit {
    dateRange;
    constructor() {
    }

    ngOnInit(): void {
        const options = new Options();
        options.selectionMode = 'RANGE';
        options.selectToday = true;
        options.disablePrevDates = true;
        this.dateRange =  create(options);
     }
    selectedDates() {
        console.log(this.dateRange.getSelectedDates())
    }

}
```

#### home.component.html
```html
<StackLayout>
    <Button class="btn btn-active" text="Console Dates" (tap)="selectedDates()"></Button>
    <NgxDateRange></NgxDateRange>
</StackLayout>
```

## API
```typescript
getSelectedDates() => {
    startDate: string,
    endDate: string,
    originDates: string[]
}

Options  = {
    selectionMode?: 'SINGLE' | 'MULTIPLE' | 'RANGE'; // default = RANGE
    initialDate?: 'yyyy/mm/dd' // default = today
    simpleDateFormat?: string; // default = "MMMM, YYYY"
    supportsRtl?: boolean; // default = false
    disablePrevDates?: boolean; // default = false
    selectToday?: boolean;  // default = false
    minDate?: string; // (Android only) default = today
    maxDate?: string; // (Android only) default = today + 1 year
    language?: 
        {
             countryCode: 'ISR', //default = null
             languageCode: 'heb' // default = null
         };

}
```
## Colors
### colors.xml

##### projectName/App_Resources/Android/src/main/res/values/colors.xml
```xml
    <color name="calendar_selected_day_bg">#a6d3d6</color>
    <color name="calendar_selected_range_bg">#a6d3d6</color>
    <color name="calendar_unavailable_bg">#585757</color>
    <color name="calendar_range_middle_unavailable_bg">#eae72b</color>
    <color name="calendar_range_middle_deactivated_bg">#673AB7</color>
```

[Language object](https://www.localeplanet.com/java/he-IL/index.html)





## License


Apache License Version 2.0
