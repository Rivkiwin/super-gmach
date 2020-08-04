import { Injectable } from '@angular/core';
import {
  Expense, Future_expenditure, Contemporary_expenditure
} from '../classes/expense';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Expenditure } from '../classes/expenditure';
import { type } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  baseUrl: string = "http://localhost:62859/api/Expenditure/"
  postId;
  expnditures = new Map<Number, Expenditure>();
  constructor(private http: HttpClient) {

  }
  public add(ex: Expenditure) {

    this.http.post(`${this.baseUrl}AddExpenditure`, ex).subscribe(
      data => this.postId = data,
      _error => { return false });
    return true
  }

  GetById(id) {
    return this.http.get(`${this.baseUrl}getListGetexpenditure/${id}`).pipe(
      catchError(this.handleError)
      );
  }
  public Get() {
    // http://localhost:4200/user/GetUsersList
    return this.http.get(`${this.baseUrl}getListGetexpenditure`).pipe(
      catchError(this.handleError)
      );
    // .subscribe(
    //     data =>  this.postId = data,
    //     _error=> {return false});
    //     return true
  };

  Cancel(id: number) {
    this.http.post(`${this.baseUrl}cancelExpenditure`, id).subscribe()
  }



  Update(ex:Expenditure)
  {
    debugger
    this.http.post(`${this.baseUrl}updateExpenditure`,ex).subscribe({
      next: data => this.postId = data,
      error: error => console.error('There was an error!', error)
  })
  }

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
      return throwError(error);
  }
}
