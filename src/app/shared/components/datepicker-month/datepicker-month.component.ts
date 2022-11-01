import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMMM',
    monthYearA11yLabel: 'MMMM',
  },
};

@Component({
  selector: 'app-datepicker-month',
  templateUrl: './datepicker-month.component.html',
  styleUrls: ['./datepicker-month.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    },
  ]
})
export class DatepickerMonthComponent implements OnInit {

  @Input() width: string = '200';
  @Output() onGetValue: EventEmitter<any> = new EventEmitter();
  formMonth: FormControl;

  constructor() { 
    this.formMonth = new FormControl("");
  }

  ngOnInit(): void {
  }

  selectedYear(date, datepicker: MatDatepicker<any>) {
    console.log('new Date(date)',new Date(date));
    const month = new Date(date).getMonth();
    console.log('month',new Date(date).getMonth());
    this.onGetValue.emit(month.toString());
    this.formMonth.setValue('October');
    datepicker.close();
  }

}
