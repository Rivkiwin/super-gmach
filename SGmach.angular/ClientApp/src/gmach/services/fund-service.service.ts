import { Injectable } from '@angular/core';
import { FundClass, StatusE } from 'src/gmach/classes/fund-class';

@Injectable({
  providedIn: 'root'

})
export class FundServiceService {
//name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string
private funds_list:FundClass[]=[new FundClass("rachel lea", StatusE.active, 3, true, "hghgh")];
baseUrl="http://localhost:62859/api/fund/";
  constructor() { }
  public add(fund:FundClass):void
  {
    this.funds_list.push(fund);
  }
  public get_all(): FundClass[]
  {

     return this.funds_list
  }
  public GETOne_ByName(name:string):FundClass
  {
    return this.funds_list.find(fund => fund.name==name);
  }
}
