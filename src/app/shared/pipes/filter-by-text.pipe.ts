import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses/shared/course.model';

@Pipe({
  name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {

  transform(items: Course[], substring: string): Course[] {
    return items.filter(s => s.name.toUpperCase().includes(substring.toUpperCase()));
  }

}
