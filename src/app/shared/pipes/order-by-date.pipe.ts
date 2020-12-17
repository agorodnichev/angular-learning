import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses/shared/course.model';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(items: Course[]): Course[] {
    console.log(items)
    return items.sort((first, second) =>  first.date.getTime() - second.date.getTime())
  }

}
// 2017-09-28T04:39:24+00:00