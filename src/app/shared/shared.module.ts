import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';
import { LoaderComponent } from './components/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
  MinutesToHoursPipe,
  HighlightBorderDirective,
  OrderByDatePipe,
  FilterByTextPipe,
  LoaderComponent,],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MinutesToHoursPipe,
    HighlightBorderDirective,
    OrderByDatePipe,
    FilterByTextPipe,
    LoaderComponent,
  ],
  providers: [],
})
export class SharedModule { }
