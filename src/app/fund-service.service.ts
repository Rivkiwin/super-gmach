import { Injectable } from '@angular/core';
import { FundClass } from './fund-class';

@Injectable({
  providedIn: 'root'
})
export class FundServiceService {
private funds_list:FundClass[]=[];
  constructor() { }
  public add(fund:FundClass):void
  {
    this.funds_list.push(fund);
  }
  public get_all(): FundClass[]
  {
     return this.funds_list
  }
  
}