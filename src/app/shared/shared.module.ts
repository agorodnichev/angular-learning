import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { BorderHighliterDirective } from './directives/border-highliter.directive';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';

@NgModule({
  declarations: [
  MinutesToHoursPipe,
  BorderHighliterDirective,
  OrderByDatePipe,
  FilterByTextPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    MinutesToHoursPipe,
    BorderHighliterDirective,
    OrderByDatePipe,
    FilterByTextPipe,
  ],
  providers: [],
})
export class SharedModule { }
