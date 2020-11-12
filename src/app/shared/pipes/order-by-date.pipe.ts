import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses/shared/course.model';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(items: Course[]): Course[] {
    return items.sort((first, second) =>  first.creationDate.getTime() - second.creationDate.getTime())
  }

}
