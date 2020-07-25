import { Injectable } from '@angular/core';
import { Friend, StatusFriendE } from '../classes/friend';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//ceiling:number,ID:number,fname:string,lname:string,status:StatusFriendE,city:string,Street:string,Phon1:number,num_street:number,Vip:boolean, card_number:number,  CVV:number,validity:Data,credit:boolean, Bank:string, Accoun_number:number,Branch:string, Phon2?:number,Email?:EmailValidator,collection_dateCard?:Data,collection_date?:Date, Direct_debit?:boolean  
export class FriendsService {
  // private friends_list: Friend[] = [new Friend(10000, 144, "moty", "viner", StatusFriendE.Married, "bb", "zz", "0548497979", 4, true, 123, 122, new Date(2018, 5, 10, 18), true, "poalim", 123, "123", "05555324"), new Friend(10000, 144, "chim", "viner", StatusFriendE.Married, "bb", "zz", "0548497979", 4, true, 123, 122, new Date(2018, 5, 10, 18), true, "poalim", 123, "123", "05555324")];
  // private friends_list:Friend[]=[];
  postId
  baseUrl: string = "http://localhost:62859/api/User/";
  constructor(private httpclinet: HttpClient) { }
  public add(friend: Friend) {
     this.httpclinet.post(`${this.baseUrl}addUser`,friend).subscribe(data => {
      this.postId= data
  })
  return this.postId;
  }

 
  public get() {
  
   return this.httpclinet.get(`${this.baseUrl}/GetUsersList`)
    // http://localhost:4200/user/GetUsersList
  }

}
