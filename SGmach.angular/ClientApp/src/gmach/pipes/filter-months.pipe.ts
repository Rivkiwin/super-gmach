import { Pipe, PipeTransform } from '@angular/core';
import {Friend} from "src/gmach/classes/friend";

@Pipe({
  name: 'filterMonths'
})
export class FilterMonthsPipe implements PipeTransform {
date=new Date();

  transform(value:Friend[], ...args: unknown[]): unknown {
    if (!args)
      return value;
      return null
    // return value.filter(x=>x.Join_date);
  }

}
