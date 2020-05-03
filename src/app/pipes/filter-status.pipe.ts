import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(items: any[], ...args: unknown[]): unknown {
    return null;
  }
 
}
