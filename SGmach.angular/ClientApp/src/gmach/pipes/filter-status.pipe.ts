import { Pipe, PipeTransform } from '@angular/core';
import { FundClass, StatusE } from 'src/gmach/classes/fund-class';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {
  statusE=StatusE;
  key=Object.values;
  transform(value: FundClass[], args:string): unknown {
     if (args=='All' || !args)
      return value;
    return value.filter(item=>item.status==args);
  }

}

