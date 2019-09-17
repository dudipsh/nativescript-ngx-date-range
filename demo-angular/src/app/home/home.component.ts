import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { NgxDateRange } from 'nativescript-ngx-date-range';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    dateRange: NgxDateRange;
    ngOnInit(): void {
        this.dateRange = new NgxDateRange();
    }

    selectedDates() {
        this.dateRange.showDateRangePicker();
    }
}
