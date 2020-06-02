import { Injectable } from '@angular/core';
import { Expense } from '../classes/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  private list_Expenditure:Expense[]=[new Expense(new Date(2020/12/12),133,"bank","cash")];
  constructor() { }
public  add(e:Expense)
  {
    this.list_Expenditure.push(e);
  }
 public getAll():Expense[]{
   return this.list_Expenditure;
 }

}
