import { Injectable } from '@angular/core';
import { FundClass, StatusE } from 'src/gmach/classes/fund-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class FundServiceService {
//name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string
private funds_list:FundClass[]=[new FundClass("rachel lea", StatusE.active, 3, true, "hghgh")];
baseUrl="http://localhost:62859/api/Fund";
  constructor(private httpc:HttpClient) { }
  public add(fund:FundClass):void
  {
    // this.funnd.push(fund);
  }
  public get_all()
  {
  
     return this.httpc.get(`${this.baseUrl}/GetAll`);
  }
  public GetById(id)
  {
    return this.httpc.get(`${this.baseUrl}/GetByID/${id}`);
  }
}
