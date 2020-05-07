import { Pipe, PipeTransform } from '@angular/core';
import { FundClass, StatusE } from '../classes/fund-class';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {
  statusE=StatusE;
  key=Object.values;
  transform(value: FundClass[], args:string): unknown {
     if (args=='All')
      return args;
    return value.filter(item=>item.Status==this.statusE[args]);
  }
 
}
