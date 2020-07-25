import { Injectable } from '@angular/core';
import { FundClass, StatusE } from '../classes/fund-class';
import { HttpClient } from '@angular/common/http';
import { User_in_Fund } from '../classes/User_in_Found';

@Injectable({
  providedIn: 'root'
  
})
export class FundServiceService {
//name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string
// private funds_list:FundClass[]=[new FundClass("rachel lea", StatusE.active, 3, true, "hghgh")];
baseURL="http://localhost:62859/api/Fund";
postId
  constructor(private http:HttpClient) { }
  public add(fund:FundClass):void
  {
    // this.funds_list.push(fund);
  }
  public get_all()
  {
    return this.http.get(`${this.baseURL}/GetFunds`);
  }
    GetByID(fundId)
  {   
    return this.http.get(`${this.baseURL}/GetFundGyID/${fundId}`)
    
  }
   GetFriendByFundId(fundID)
  {
    return this.http.get(`${this.baseURL}/UsersInFund/${fundID}`);
  }
}