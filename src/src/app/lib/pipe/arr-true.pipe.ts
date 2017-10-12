import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrTrue'
})
export class ArrTruePipe implements PipeTransform {

  transform(value: any[], key?: string): any {
    if (key) {
      return value.every(item => !!item && item[key]);
    } else {
      return value.every(item => !!value);

    }


  }

}
