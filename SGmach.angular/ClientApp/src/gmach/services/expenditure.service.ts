import {Inject, Injectable} from '@angular/core';
import {
  Expense, Future_expenditure, Contemporary_expenditure
} from 'src/gmach/classes/expense';
import { HttpClient } from '@angular/common/http';
import { Expenditure } from 'src/gmach/classes/expenditure';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  // baseUrl: string;
  // baseUrl="http://localhost:62859/api/Expenditure";
  baseUrl;
  postId: object;
  constructor(private http: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/Expenditure`;

  }
   add(expenditure: Expenditure) {
         debugger
   return this.http.post(`${this.baseUrl}/AddExpenditure`, expenditure);

  }
  public Get() {
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
