import { Injectable } from '@angular/core';
import {
  Expense, Future_expenditure, Contemporary_expenditure
} from '../classes/expense';
import { HttpClient } from '@angular/common/http';
import { Expenditure } from '../classes/expenditure';
import { type } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  baseUrl: string = "http://localhost:62859/api/Expenditure/"
  postId;
  expnditures= new Map<Number,Expenditure>();
  constructor(private http: HttpClient) {
    
   }
  public add(ex: Expenditure) {

    this.http.post(`${this.baseUrl}AddExpenditure`, ex).subscribe(data => {
      this.postId = data
    });

  }

  GetById(id){
    return this.http.get(`${this.baseUrl}getListGetexpenditure/${id}`)
  }   
  public Get() {
    // this.http.get(`${this.baseUrl}getListGetexpenditure`).subscribe(ex=>{
    //   (<Expenditure[]>ex).forEach(e => {
    //    this.expnditures.set(e.id,e);
    //     });
    //   });
    return this.http.get(`${this.baseUrl}getListGetexpenditure`);
    // http://localhost:4200/user/GetUsersList
  }
 
  public getAll_Future_expenditures() {
    // return this.list_Future_expenditures;
  }
  public getAll_Current_expenditures() {
    // return this.list_Current_expenditures;
  }
}
