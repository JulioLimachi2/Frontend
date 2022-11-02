import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input, LOCALE_ID } from '@angular/core';
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
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class DatepickerMonthComponent implements OnInit {

  @Input() width: string = 'initial';
  @Output() onGetValue: EventEmitter<any> = new EventEmitter();
  formMonth: FormControl;

  constructor(private datePipe: DatePipe) { 
    this.formMonth = new FormControl("");
  }

  ngOnInit(): void {
  }

  selectedMonth(date, datepicker: MatDatepicker<any>) {
    this.onGetValue.emit(this.datePipe.transform(date,'MMMM'));
    this.formMonth.setValue(date);
    datepicker.close();
  }

}
