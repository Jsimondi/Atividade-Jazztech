import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDays'
})
export class WeekDaysPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch(value) {
      case 0:
        return 'Dom';
      case 1:
        return 'Seg';
      case 2:
        return 'Ter';
      case 3:
        return 'Qua';
      case 4:
        return 'Qui';
      case 5:
        return 'Sex';
      case 6:
        return 'Sab';
      default:
        return ''
    }
  }

}
