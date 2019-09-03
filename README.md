# Nativescript ui date range

Date Range plugin for angular support only for Android!


![nativesceipt date range](https://raw.githubusercontent.com/dudipsh/nativescript-ngx-date-range/master/screenshots/dateRange1.PNG)

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
    <!-- Add your page content here -->
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
    simpleDateFormat?: string; // default = "MMMM, YYYY"
    supportsRtl?: boolean; // default = false
    disablePrevDates?: boolean; // default = false
    selectToday?: boolean;  // default = false
}
```





## License


Apache License Version 2.0, January 2004
