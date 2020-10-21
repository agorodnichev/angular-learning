import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';

@NgModule({
  declarations: [
  MinutesToHoursPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    MinutesToHoursPipe
  ],
  providers: [],
})
export class SharedModule { }
