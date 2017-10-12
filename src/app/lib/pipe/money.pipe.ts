import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (!value) value = 0;
    if (typeof value == 'string') value = parseInt(value);

    return value.toFixed(2);
  }

}
