import { Injectable } from '@angular/core';
import { Friend } from '../classes/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
private friends_list:Friend[]=[]; 
public add(friend:Friend):void
{
  this.friends_list.push(friend);
}
public GetAll():Friend[]
{
  return this.friends_list;
}
  constructor() { }
}
