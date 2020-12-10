import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';


@NgModule({
  declarations: [
  MinutesToHoursPipe,
  HighlightBorderDirective,
  OrderByDatePipe,
  FilterByTextPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    MinutesToHoursPipe,
    HighlightBorderDirective,
    OrderByDatePipe,
    FilterByTextPipe,
  ],
  providers: [],
})
export class SharedModule { }
