import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-datepicker-year',
  templateUrl: './datepicker-year.component.html',
  styleUrls: ['./datepicker-year.component.scss'],
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
export class DatepickerYearComponent implements OnInit {

  @Input() width: string = '200';
  @Output() onGetValue: EventEmitter<any> = new EventEmitter();
  formYear: FormControl;
  constructor() {
    this.formYear = new FormControl("");
  }

  ngOnInit(): void {
  }

  selectedYear(date, datepicker: MatDatepicker<any>) {
    const year = new Date(date).getFullYear();
    this.onGetValue.emit(year.toString());
    this.formYear.setValue(year.toString());
    datepicker.close();
  }

}
