import { Inject, Injectable } from '@angular/core';
import { FundClass, StatusE } from 'src/gmach/classes/fund-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class FundServiceService {
//name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string
private funds_list:FundClass[]=[new FundClass("rachel lea", StatusE.active, 3, true, "hghgh")];
baseUrl;
// ="http://localhost:62859/api/Fund";
  constructor(private httpc:HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/Fund`;
  }
  public Save(fundId) {

    return this.httpc.post(`${this.baseUrl}/Save`, fundId);

  }
  public add(fund:FundClass)
  {
     return this.httpc.post(`${this.baseUrl}/add`,fund);
  }
  public get_all()
  {
  
     return this.httpc.get(`${this.baseUrl}/GetAll`);
  }
  public GetById(id)
  {
    return this.httpc.get(`${this.baseUrl}/GetByID/${id}`);
  }

  public GetUsersToAdd(fundId)
  {
    return this.httpc.get(`${this.baseUrl}/GetUsersToAdd/${fundId}`);
  }
  public AddFriends(friends,fundId)
  {
    debugger
    return this.httpc.post(`${this.baseUrl}/AddFriends`,{friends,fundId});
  }
  public GetFriends(fundId)
  {
    return this.httpc.get(`${this.baseUrl}/UsersInFund/${fundId}`)
  }
}
