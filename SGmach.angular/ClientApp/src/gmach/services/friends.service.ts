import { Injectable, Inject } from '@angular/core';
import { Friend, StatusFriendE } from '../classes/friend';
import { HttpClient } from '@angular/common/http';
import { Communication } from '../classes/communication';
import { Credit } from '../classes/Credit';
import { BankDetails } from '../classes/Bank-detalis';

@Injectable({
  providedIn: 'root'
})
//ceiling:number,ID:number,fname:string,lname:string,status:StatusFriendE,city:string,Street:string,Phon1:number,num_street:number,Vip:boolean, card_number:number,  CVV:number,validity:Data,credit:boolean, Bank:string, Accoun_number:number,Branch:string, Phon2?:number,Email?:EmailValidator,collection_dateCard?:Data,collection_date?:Date, Direct_debit?:boolean  
export class FriendsService {
  // private friends_list: Friend[] = [new Friend(10000, 144, "moty", "viner", StatusFriendE.Married, "bb", "zz", "0548497979", 4, true, 123, 122, new Date(2018, 5, 10, 18), true, "poalim", 123, "123", "05555324"), new Friend(10000, 144, "chim", "viner", StatusFriendE.Married, "bb", "zz", "0548497979", 4, true, 123, 122, new Date(2018, 5, 10, 18), true, "poalim", 123, "123", "05555324")];
  // private friends_list:Friend[]=[];
  postId
  baseUrl;
  // ="http://localhost:62859/api/User/";

  constructor(private httpclinet: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/User/`;
  }
  
  public add(User: Friend,Communication:Communication,Credit:Credit,Bank:BankDetails) {
    var UserId;
    // this.httpclinet.post(`${this.baseUrl}add`,{User,Communication,Bank}).subscribe(Data=>UserId=Data.);
    User.communication_ways=Communication;
   return  this.httpclinet.post(`${this.baseUrl}add`,User);
  }

 
  public get() {
  
   return this.httpclinet.get(`${this.baseUrl}get`)
    // http://localhost:4200/user/GetUsersList
  }

  Edite(friend:Friend)
  {
    debugger
    friend.bank_Details=null;
    friend.credit=null;
    return this.httpclinet.post(`${this.baseUrl}Edite`,friend);
  }

  public GetById(id) {
  
    return this.httpclinet.get(`${this.baseUrl}getUserById/${id}`)
     // http://localhost:4200/user/getUserById/${id}
   }
   public Alerts() {
  
    return this.httpclinet.get(`${this.baseUrl}/getAlerts`)
     // http://localhost:4200/user/getUserById/${id}
   }
}
