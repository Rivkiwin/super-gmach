import { Injectable } from '@angular/core';
import { Expense, Future_expenditure, Contemporary_expenditure
} from '../classes/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  private list_Future_expenditures:Future_expenditure[]=[new Future_expenditure(1200,"bank",new Date(2020/12/12))];
  private list_Current_expenditures:Contemporary_expenditure[]=[new Contemporary_expenditure(133,"bank","cash")];

  
  constructor() { }
public  add(e:Future_expenditure)
  {
    this.list_Future_expenditures.push(e);
  }
 public getAll_Future_expenditures():Expense[]{
   return this.list_Future_expenditures;
 }
 public getAll_Current_expenditures():Expense[]{
  return this.list_Current_expenditures;
}
}
