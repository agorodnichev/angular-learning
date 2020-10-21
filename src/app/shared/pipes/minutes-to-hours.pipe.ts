import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    return `${Math.floor(value/60)}h ${value%60 > 0 ? value%60 + 'min' : ''}`
 }
}
