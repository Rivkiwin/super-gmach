import { Injectable } from '@angular/core';
import {
  Expense, Future_expenditure, Contemporary_expenditure
} from '../classes/expense';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  baseUrl: string = "http://localhost:62859/api/Expenditure/"
  // private list_Future_expenditures: Future_expenditure[] = [new Future_expenditure(1200, "bank", new Date(2020 / 12 / 12))];
  // private list_Current_expenditures: Contemporary_expenditure[] = [new Contemporary_expenditure(133, "bank", "cash")];


  constructor(private http: HttpClient) { }
  // public add(e: ) {
  //   // this.list_Future_expenditures.push(e);
  // }
  public Get()
  {
    return this.http.get(`${this.baseUrl}/getListGetexpenditure`)
    // http://localhost:4200/user/GetUsersList
  }
  
  public getAll_Future_expenditures() {
    // return this.list_Future_expenditures;
  }
  public getAll_Current_expenditures() {
    // return this.list_Current_expenditures;
  }
}
